import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SectionTitle } from "../components";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [adress, setAdress] = useState("");

  const navigate = useNavigate();

  const isValidate = () => {
    let isProceed = true;
    let errorMessage = "";

    if (name.length === 0) {
      isProceed = false;
      errorMessage = "Please enter the value in username field";
    } else if (lastname.length === 0) {
      isProceed = false;
      errorMessage = "Please enter the value in lastname field";
    } else if (email.length === 0) {
      isProceed = false;
      errorMessage = "Please enter the value in email field";
    } else if (phone.length < 4) {
      isProceed = false;
      errorMessage = "Phone must be longer than 3 characters";
    } else if (adress.length < 4) {
      isProceed = false;
      errorMessage = "Adress must be longer than 3 characters";
    } else if (password.length < 6) {
      isProceed = false;
      errorMessage = "Please enter a password longer than 5 characters";
    } else if (confirmPassword.length < 6) {
      isProceed = false;
      errorMessage = "Please enter a confirm password longer than 5 characters";
    } else if (password !== confirmPassword) {
      isProceed = false;
      errorMessage = "Passwords must match";
    }

    if (!isProceed) {
      toast.warn(errorMessage);
    }

    return isProceed;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let regObj = {
      id: nanoid(),
      name,
      lastname,
      email,
      phone,
      adress,
      password,
      userWishlist: [],
    };

    if (isValidate()) {
      fetch("http://localhost:8080/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then((res) => {
          toast.success("Registration Successful");
          navigate("/login");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };
  return (
    <>
      <SectionTitle title="ثبت‌نام" path="" />
      <div className="flex flex-col justify-center sm:py-12">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-dark border border-gray-600 shadow w-full rounded-lg divide-y divide-gray-200 bg-red-100">
            <form className="px-5 py-7" onSubmit={handleSubmit}>
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950 ">
                نام
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-right text-sm w-full text-stone-900 bg-gray-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950">
                نام‌خانوادگی
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-right text-sm w-full text-stone-900 bg-gray-100"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950">
                ایمیل
              </label>
              <input
                type="email"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-right text-sm w-full text-stone-900 bg-gray-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950">
                شماره تماس
              </label>
              <input
                type="tel"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-right text-sm w-full text-stone-900 bg-gray-100"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950">
                آدرس
              </label>
              <input
                type="text"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-right text-sm w-full text-stone-900 bg-gray-100"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950">
              رمزعبور
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-right text-sm w-full text-stone-900 bg-gray-100 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              />
              <label className="font-semibold text-right text-sm pb-1 block text-stone-950 ">
                تکرار رمزعبور
              </label>
              <input
                type="password"
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-right text-sm w-full text-stone-900 bg-gray-100"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              />
              <button
                type="submit"
                className="transition duration-200 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block  bg-red-600 hover:bg-red-400 text-white"
              >
                <span className="inline-block mr-2">ثبت‌نام</span>
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
          <div className="py-5 text-center ">
            <Link
              to="/login"
              className="btn btn-wide  bg-red-600 hover:bg-red-400 text-white"
              onClick={() => window.scrollTo(0, 0)}
            >
              حساب داری؟ وارد شوید
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
