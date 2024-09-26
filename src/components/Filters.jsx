import React, { useState } from "react";
import FormInput from "./FormInput";
import { Form, Link } from "react-router-dom";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormDatePicker from "./FormDatePicker";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const [selectCategoryList, setSelectCategoryList] = useState([
    "all",
    "کفش",
    "slippers",
    "heels",
    "t-shirts",
    "jackets",
    "caps",
    "shorts",
    "sweaters",
    "sneakers",
    "shirts",
    "boots",
    "overshirts",
    "pants",
    "jeans",
    "socks",
    "belts",
    "trainers",
  ]);
  const [selectBrandList, setSelectBrandList] = useState([
    "all",
    "WALK LONDON",
    "Reebok",
    "Nike",
    "Jack & Jones",
    "Crocs",
    "Vans",
    "Puma",
    "New Balance",
    "Tommy Jeans",
    "Tommy Hilfiger",
    "Bershka",
    "New Look",
    "AllSaints",
    "Columbia",
    "The North Face",
    "Collusion",
    "ASOS DESIGN",
    "Topman",
    "Dr Denim",
    "Polo Ralph Lauren",
    "ASOS Dark Future",
    "Levi's",
    "Threadbare",
    "Calvin Klein",
    "AAPE BY A BATHING APE®",
    "Good For Nothing",
    "Timberland",
    "Pull and Bear",
    "Koi Footwear",
    "adidas performance",
    "Nike Running",
    "Dr Martens",
    "River Island",
  ]);

  return (
    <Form className="bg-red-100 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* SEARCH */}
      <FormInput 
        type="search"
        label="جستجوی محصول"
        name="search"
        size="input-sm"
        defaultValue=""
      />
      {/* CATEGORIES */}
      <FormSelect
        label="انتخاب دسته‌بندی"
        name="category"
        list={selectCategoryList}
        size="select-sm"
        defaultValue="all"
      />
      {/* COMPANIES */}
      <FormSelect
        label="انتخاب برند"
        name="brand"
        list={selectBrandList}
        size="select-sm"
        defaultValue="all"
      />
      {/* ORDER */}
      <FormSelect
        label="مرتب سازی"
        name="order"
        list={["asc", "desc", "price high", "price low"]}
        size="select-sm"
        defaultValue="a-z"
      />
      {/* Producer */}
      <FormSelect
        label="جنسیت"
        name="gender"
        list={["آقا", "خانم"]}
        size="select-sm"
        defaultValue="آقا"
      />
      {/* PRICE */}
      <FormRange
        name="price"
        label="قیمت"
        size="range-sm"
        price={9000000}
      />
      {/* Date Picker */}
      <FormDatePicker label="حداقل تاریخ تولید را انتخاب کنید" name="date" />

      {/* In stock */}
      <FormCheckbox
        label="فقط محصولات موجود در انبار"
        name="stock"
        defaultValue="false"
      />

      {/* BUTTONS */}

      <button
        type="submit"
        className="btn border-red-700 btn-sm bg-red-600 text-white hover:bg-red-400"
      >
        جستجو
      </button>
      <Link to="/shop?page=1" className="btn border-red-700 btn-sm bg-red-600 text-white hover:bg-red-400">
        بازگشت به حالت اولیه
      </Link>
    </Form>
  );
};

export default Filters;
