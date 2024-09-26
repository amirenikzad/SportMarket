import axios from "axios";
import React, { useState } from "react";
import {
  QuantityInput,
  SectionTitle,
  SelectSize,
  SingleProductRating,
  SingleProductReviews,
} from "../components";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";

import { Link, useLoaderData } from "react-router-dom";
import parse from "html-react-parser";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import {
  updateWishlist,
  removeFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { toast } from "react-toastify";
import { store } from "../store";

export const singleProductLoader = async ({ params }) => {
  const { id } = params;

  const response = await axios(`http://localhost:8080/products/${id}`);

  return { productData: response.data };
};

const SingleProduct = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(0);
  const { wishItems } = useSelector((state) => state.wishlist);
  const { userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const [rating, setRating] = useState([
    "empty star",
    "empty star",
    "empty star",
    "empty star",
    "empty star",
  ]);

  const { productData } = useLoaderData();

  const product = {
    id: productData?.id + size,
    title: productData?.name,
    image: productData?.imageUrl,
    rating: productData?.rating,
    price: productData?.price?.current?.value,
    brandName: productData?.brandName,
    amount: quantity,
    selectedSize: size || productData?.availableSizes[0],
    isInWishList:
      wishItems.find((item) => item.id === productData?.id + size) !==
      undefined,
  };

  for (let i = 0; i < productData?.rating; i++) {
    rating[i] = "full star";
  }

  const addToWishlistHandler = async (product) => {
    try {
      const getResponse = await axios.get(
        `http://localhost:8080/user/${localStorage.getItem("id")}`
      );
      const userObj = getResponse.data;

      
      userObj.userWishlist = userObj.userWishlist || [];

      userObj.userWishlist.push(product);

      const postResponse = await axios.put(
        `http://localhost:8080/user/${localStorage.getItem("id")}`,
        userObj
      );

      
      store.dispatch(updateWishlist({ userObj }));
      toast.success("Product added to the wishlist!");
    } catch (error) {
      console.error(error);
    }
  };

  const removeFromWishlistHandler = async (product) => {
    const getResponse = await axios.get(
      `http://localhost:8080/user/${localStorage.getItem("id")}`
    );
    const userObj = getResponse.data;

    userObj.userWishlist = userObj.userWishlist || [];

    const newWishlist = userObj.userWishlist.filter(
      (item) => product.id !== item.id
    );

    userObj.userWishlist = newWishlist;

    const postResponse = await axios.put(
      `http://localhost:8080/user/${localStorage.getItem("id")}`,
      userObj
    );

    
    store.dispatch(removeFromWishlist({ userObj }));
    toast.success("Product removed from the wishlist!");
  };

  return (
    <>
      <SectionTitle title="صفحه محصولات" path="" />
      <div className="grid grid-cols-2 max-w-7xl mx-auto mt-5 max-lg:grid-cols-1 max-lg:mx-5">
        


        <div className="single-product-content flex flex-col gap-y-5 max-lg:mt-2 text-right">
          <h2 className="text-5xl max-sm:text-3xl text-stone-950">
            {productData?.name}
          </h2>
          <div class="text-right !important">
          <SingleProductRating rating={rating} productData={productData} />
          </div>
          <p className="text-3xl text-error">
            ${productData?.price?.current?.value}
          </p>
          <div className="text-xl max-sm:text-lg text-stone-950 " >
            {parse(productData?.description)}
          </div>
          <div className="text-2xl ">
            <SelectSize
              sizeList={productData?.availableSizes}
              size={size}
              setSize={setSize}
            />
          </div>
          {/* <div class="text-right !important"> */}
            {/* <label htmlFor="Quantity" className="sr-only">
              {" "}
              Quantity{" "}
            </label> */}

            <div className="flex  " style={{paddingLeft: "450px" }}>
              <QuantityInput quantity={quantity} setQuantity={setQuantity} />
            </div>
          {/* </div> */}
          <div className="flex flex-row gap-x-2 max-sm:flex-col max-sm:gap-x"class="text-right !important">
            <button
              className="btn bg-red-600 hover:bg-red-500 text-white"
              onClick={() => {
                if (loginState) {
                  dispatch(addToCart(product));
                } else {
                  toast.error(
                    "ابتدا به حساب کاربری خود وارد شوید"
                  );
                }
              }}
            >
              <FaCartShopping className="text-xl mr-1" />
              اضافه کردن به سبد خرید
            </button>

            {product?.isInWishList ? (
              <button
                className="btn bg-red-600 hover:bg-red-500 text-white"
                onClick={() => {
                  if (loginState) {
                    removeFromWishlistHandler(product);
                  } else {
                    toast.error(
                      "ابتدا به حساب کاربری خود وارد شوید"
                    );
                  }
                }}
              >
                <FaHeart className="text-xl mr-1" />
                حذف از علاقه‌مندی‌ها
              </button>
            ) : (
              <button
                className="btn bg-red-600 hover:bg-red-500 text-white"
                onClick={() => {
                  if (loginState) {
                    addToWishlistHandler(product);
                  } else {
                    toast.error(
                      "ابتدا به حساب کاربری خود وارد شوید"
                    );
                  }
                }}
              >
                <FaHeart className="text-xl mr-1" />
                اضافه کردن به علاقه‌مندی‌ها
              </button>
            )}
          </div>
          <div className=" flex flex-col gap-x-2 py-1.5 "class="text-right !important">
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2 ">
            {productData?.brandName}: برند
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              جنسیت: {productData?.gender}
            </div>
            <div
              className={
                productData?.isInStock
                  ? "badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2"
                  : "badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2"
              }
            >
              {productData?.isInStock ? "Yes" : "No"}:موجود در انبار
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              شماره کالا: {productData?.productCode}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              دسته‌بندی: {productData?.category}
            </div>
            <div className="badge bg-gray-700 badge-lg font-bold text-white p-5 mt-2">
              تاریخ تولید:{" "}
              {productData?.productionDate?.substring(0, 10)}
            </div>
          </div>
        </div>

        <div className="product-images flex flex-col justify-center max-lg:justify-start">
          <img
            src={`https://${productData?.additionalImageUrls[currentImage]}`}
            className="w-96 text-center border border-gray-600 cursor-pointer"
            alt={productData.name}
          />
          <div className="other-product-images mt-1 grid grid-cols-3 w-96 gap-y-1 gap-x-2 max-sm:grid-cols-2 max-sm:w-64">
            {productData?.additionalImageUrls.map((imageObj, index) => (
              <img
                src={`https://${imageObj}`}
                key={nanoid()}
                onClick={() => setCurrentImage(index)}
                alt={productData.name}
                className="w-32 border border-gray-600 cursor-pointer"
              />
            ))}
          </div>
        </div>

      </div>

      <SingleProductReviews rating={rating} productData={productData} />
    </>
  );
};

export default SingleProduct;
