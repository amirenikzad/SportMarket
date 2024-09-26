import React, { useEffect } from "react";
import { SectionTitle } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { store } from "../store";
import { calculateTotals, clearCart } from "../features/cart/cartSlice";

const ThankYou = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const saveToOrderHistory = async () => {
    try {
      const response = await axios.post("http://localhost:8080/orders", {
        userId: localStorage.getItem("id"),
        orderStatus: "در حال پردازش",
        subtotal: total,
        cartItems: cartItems,
      });
    } catch (err) {
      toast.error(err.response);
    }
  };

  if (cartItems.length > 0) {
    saveToOrderHistory();
    store.dispatch(clearCart());
    store.dispatch(calculateTotals());
    toast.success("سفارش با موفقیت انجام شد");
  }

  useEffect(() => {
    if (!loginState) {
      toast.error("ابتدا باید به حساب خود وارد شوید");
      navigate("/");
    }
  }, []);


  return (
    <>
      {/* <SectionTitle title="با‌تشکر از‌شما" path="" /> */}
      <div className="thankyou-content text-center text-stone-950 px-10 max-w-7xl mx-auto">
        <h2 className="text-6xl max-sm:text-4xl">
        از خرید شما متشکریم
        </h2>

        <h3 className="text-2xl mt-10 max-sm:text-xl">
        امیدواریم محصول جدید خود را دوست داشته باشی
        </h3>
        <h3 className="text-2xl mt-5 max-sm:text-xl">
          برای پیگیری خرید و خدمات پس از فروش می توانید از لینک های زیر استفاده کنید
        </h3>
        <ul className="text-xl mt-5 text-blue-500 max-sm:text-lg">
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/order-history">&rarr; دیدن تارخچه خرید &larr;</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            <Link to="/">&rarr; مشاهده محصولات بیشتر  &larr;</Link>
          </li>
          <li className="hover:text-blue-600 cursor-pointer">
            &rarr; ما را در  فضای مجازی دنبال کنید &larr;
          </li>
        </ul>

        <h4 className="text-xl mt-5 max-sm:text-lg">
        از خرید شما سپاسگزاریم
        </h4>
        <h4 className="text-xl max-sm:text-lg">
          با تشکر از شما، امیر نیکزاد
        </h4>
      </div>
    </>
  );
};

export default ThankYou;
