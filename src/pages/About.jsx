import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
      <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-stone-950">اسپرت مارکت</h2>
      
      <p className="text-3xl text-center max-sm:text-sm max-sm:px-2 text-stone-950">
      اسپرت‌مارکت با هدف ارائه بهترین کفش‌ها و کتونی‌های ورزشی از برترین برندها تأسیس شده است. ما به کیفیت، راحتی و استایل اهمیت می‌دهیم واز متنوع کفش‌های ورزشی و روزمره را برای تمام سلیقه‌ها اینجاست
      </p>
      <p className="text-3xl text-center max-sm:text-sm max-sm:px-2 text-stone-950">
      صداقت، کیفیت و رضایت مشتریان اولویت ماست. تیم پشتیبانی ما آماده است تا تجربه‌ خرید راحت را فراهم کند. با ما، همیشه یک قدم جلوتر باشید
      </p>
      <Link to="/contact" className="btn border-red-700 bg-red-600 text-white hover:bg-red-400 font-bold btn-wide mt-5">ارتباط‌ با ما</Link>
      </div>
    </div>
  );
};

export default About;
