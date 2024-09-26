import React from "react";
import SingleReview from "./SingleReview";
import RatingPercentage from "./RatingPercentage";
import { nanoid } from "nanoid";

const SingleProductReviews = ({ rating, productData }) => {
  return (
    <div className="product-reviews max-w-7xl mt-10 mx-auto">
      <RatingPercentage rating={rating} productData={productData} />

      <div className="product-reviews-comments mt-20 px-10">
        <h2 className="text-4xl text-stone-950 text-center mb-5 max-sm:text-2xl">
          دیدگاه‌ها
        </h2>
        {productData.reviews.map((item) => (
          <SingleReview key={nanoid()} reviewObj={item} />
        ))}
        {productData?.totalReviewCount > 3 && (
          <button className="btn bg-red-600 hover:bg-red-500 w-full text-white">
            دیدن تمام دیدگاه‌ها
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProductReviews;
