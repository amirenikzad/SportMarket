import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../components";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { loginUser, logoutUser } from "../features/auth/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (loginState) {
      localStorage.clear();
      store.dispatch(logoutUser());
    }
  }, []);

  const isValidate = () => {
    let isProceed = true;

    if (email.length === 0) {
      isProceed = false;
      toast.warn("لطفا ایمیل خود را وارد کنید");
    } else if (password.length < 6) {
      isProceed = false;
      toast.warn("رمز عبور باید حداقل ۶ کاراکتر باشد");
    }
    return isProceed;
  };

  const proceedLogin = (e) => {
    e.preventDefault();
    if (isValidate()) {
      fetch("http://localhost:8080/user")
        .then((res) => res.json())
        .then((res) => {
          let data = res;
          const foundUser = data.filter(
            (item) => item.email === email && item.password === password
          );
          if (foundUser[0]) {
            toast.success("ورود با موفقیت‌ انجام شد");
            localStorage.setItem("id", foundUser[0].id);
            store.dispatch(loginUser());
            navigate("/");
          } else {
            toast.warn("ایمیل یا رمزعبور اشتباه است");
          }
        })
        .catch((err) => {
          toast.error("ورود موفقیت‌آمیز نبود: " + err.message);
        });
    }
  };

  return (
    <>
      <SectionTitle title="ورود" path="" />
      <div className="flex flex-col justify-center sm:py-12 ">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border  shadow w-full rounded-lg   ">
            <form className="px-5 py-7 bg-red-100" onSubmit={proceedLogin}>
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950">
                ایمیل
              </label>
              <input
                value={email}
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-stone-950 bg-gray-100"
              />
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950">
                رمزعبور
              </label>
              <input
                type="password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full text-stone-900 bg-gray-100"
              />
              <button
                type="submit"
                className="transition duration-200 bg-red-600 hover:bg-red-400 focus:bg-gray-100 focus:shadow-sm focus:ring-4 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">ورود</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-4 h-4 inline-block"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div className="py-5 text-center">
            <Link
              to="/register"
              className="btn btn-wide btn-red-600 bg-red-600 hover:bg-red-400 text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              حساب ندارید؟ ثبت‌نام کنید
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
