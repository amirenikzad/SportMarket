import React from "react";
import { Link } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Footer = () => {
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  return (
    <footer className="footer footer-center p-10 bg-red-500 text-base-content rounded mt-10 max-md:px-0">
      <nav className="grid grid-flow-col max-sm:grid-flow-row gap-4">
        <Link to="/" className="link link-hover text-2xl max-md:text-xl text-blue-600" onClick={() => window.scrollTo(0, 0)}>
        صفحه‌اصلی
        </Link>
        <Link to="/shop" className="link link-hover text-2xl max-md:text-xl text-blue-600" onClick={() => window.scrollTo(0, 0)}>
        فروشگاه
        </Link>
        <Link to="/about" className="link link-hover text-2xl max-md:text-xl text-blue-600" onClick={() => window.scrollTo(0, 0)}>
        درباره‌ما
        </Link>
        <Link to="/contact" className="link link-hover text-2xl max-md:text-xl text-blue-600" onClick={() => window.scrollTo(0, 0)}>
        ارتباط با‌ ما
        </Link>
        {!loginState && (
          <>
            <Link
              to="/login"
              className="link link-hover text-2xl max-md:text-xl text-blue-600"
              onClick={() => window.scrollTo(0, 0)}
            >
              ورود
            </Link>
            <Link
              to="/register"
              className="link link-hover text-2xl max-md:text-xl text-blue-600"
              onClick={() => window.scrollTo(0, 0)}
            >
              ثبت‌نام
            </Link>
          </>
        )}
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <FaSquareXTwitter className="text-6xl max-sm:text-4xl text-blue-600" />
          <FaSquareFacebook className="text-6xl max-sm:text-4xl text-blue-600" />
          <FaSquareInstagram className="text-6xl max-sm:text-4xl text-blue-600" />
          <FaSquareYoutube className="text-6xl max-sm:text-4xl text-blue-600" />
        </div>
      </nav>
      <aside>
        <p className="text-2xl max-sm:text-sm text-blue-600">
          ارتباط با ما
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
