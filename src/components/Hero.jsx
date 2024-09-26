import { Link } from "react-router-dom";
import "../styles/Hero.css";
const Hero = () => {
  return (
    <div className="hero bg-red-950 bg-blend-overlay">
    <div className="hero-content text-center">
      <div className="max-w-xl">
        <h1 className="text-6xl font-bold max-md:text-6xl text-blue-200">قدم به سوی بهترین انتخاب اسپرت مارکت، همراه همیشگی استایل و راحتی شما</h1>
        <p className="py-6 text-2xl max-md:text-lg text-blue-200">
        مقصدی مطمئن برای عاشقان ورزش و استایل‌های جذاب که با با ارائه انواع کفش‌ها و کتونی‌های ورزشی از برترین برندهای دنیا، به شما این امکان را می‌دهد که راحتی و کیفیت را در کنار هم تجربه کنید
        </p>
        <Link to="/shop" className="btn btn-wide text-white bg-red-700 hover:bg-red-400">همین الان بخرید</Link>
      </div>
    </div>
  </div>
  )
}

export default Hero