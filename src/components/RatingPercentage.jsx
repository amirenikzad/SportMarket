import React from 'react'
import { Link } from 'react-router-dom'
import SingleProductRating from './SingleProductRating'

const RatingPercentage = ({ rating, productData }) => {
  
  return (
    <>
    <div className="flex items-center mb-2 justify-center">
          <SingleProductRating rating={rating} productData={productData} />
        </div>
        { productData?.rating === 5 ? (
          <>
          <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            پنج ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "90%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">90%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            چهار ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">5%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            سه ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "2%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">2%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            دو ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "1%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">1%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            یک ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "1%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">1%</span>
        </div>
          </>
        ) : productData?.rating === 4 ? (
          <>
          <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            پنج ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "60%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">60%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            چهار ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "20%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">20%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            سه ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "10%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">10%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            دو ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">5%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            یک ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">5%</span>
        </div>
          </>
        ) : productData?.rating === 3 ? (
          <>
          <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            پنج ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "20%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">20%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            چهار ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "30%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">30%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            سه ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "40%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">40%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            دو ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">5%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            یک ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">5%</span>
        </div>
          </>
        ) : productData?.rating === 2 ? (
          <>
          <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            پنج ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">5%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            چهار ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "15%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">15%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            سه ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "30%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">30%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            دو ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "40%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">40%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            یک ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "10%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">10%</span>
        </div>
          </>
        ) : (
          <>
          <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            پنج ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "5%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">5%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            چهار ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "10%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">10%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            سه ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "15%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">15%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            دو ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "10%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">10%</span>
        </div>
        <div className="flex items-center justify-center mt-4">
          <Link
            to="#"
            className="text-lg font-medium text-blue-500 hover:underline"
          >
            یک ستاره
          </Link>
          <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
            <div
              className="h-5 bg-orange-400 rounded"
              style={{ width: "60%" }}
            ></div>
          </div>
          <span className="text-lg font-medium text-stone-950">60%</span>
        </div>
          </>
        )}
        
        </>
  )
}

export default RatingPercentage