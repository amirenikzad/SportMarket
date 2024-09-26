import React from "react";
import { Form } from "react-router-dom";
import { SectionTitle } from "../components";

const Contact = () => {
  return (
    <>
      <SectionTitle title="ارتباط با‌ ما" path="" />
      <div className="isolate px-6 lg:px-8">
        <Form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-right text-sm font-semibold leading-6 text-stone-950"
              >
                نام
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full text-right rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6  text-slate-950 bg-gray-100"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-right text-sm font-semibold leading-6 text-stone-950"
              >
              نام‌خانوادگی
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full text-right rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6  text-slate-950 bg-gray-100"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-right text-sm font-semibold leading-6 text-stone-950"
              >
                نام شرکت
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full text-right rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6  text-slate-950 bg-gray-100"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-right text-sm font-semibold leading-6 text-stone-950"
              >
                ایمیل
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full text-right rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6  text-slate-950 bg-gray-100"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-right text-sm font-semibold leading-6 text-stone-950"
              >
                شماره تماس
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full text-right rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6  text-slate-950 bg-gray-100"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-right text-sm font-semibold leading-6 text-stone-950"
              >
                توضیحات
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full text-right rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6  text-slate-950 bg-gray-100"
                ></textarea>
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
            
              <div className="flex h-6 items-center">
                <button
                  type="button"
                  className="bg-red-600 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-red-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600  text-slate-950 bg-gray-100"
                  role="switch"
                  aria-checked="false"
                  aria-labelledby="switch-1-label"
                  
                >
                  <span className="sr-only text-stone-950">Agree to policies</span>

                  <span
                    aria-hidden="true"
                    className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-red-900/5 transition duration-200 ease-in-out"
                  ></span>
                </button>
              </div>
              <label className="text-sm leading-6 text-stone-950" id="switch-1-label" style={{ paddingLeft: "300px" }}>
              با تمامی شرایط و ضوابط موافق هستم
                {/* <a href="#" className="font-semibold text-blue-500">
                &nbsp;privacy&nbsp;policy
                </a> */}
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md  px-3.5 py-2.5 text-center shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-300  btn border-red-700 bg-red-600 text-white hover:bg-red-400 font-bold btn-wide mt-5"
            >
              ثبت پیشنهاد
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Contact;
