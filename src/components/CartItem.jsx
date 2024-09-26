import { useDispatch } from "react-redux";
import { removeItem, updateCartAmount } from "../features/cart/cartSlice";


const CartItem = ({ cartItem }) => {
  const { id, title, price, image, amount, brandName, selectedSize } =
    cartItem;

    const dispatch = useDispatch();

  return (
    <article
      key={id}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-red-200 pb-6 last:border-b-0"
    >
      {/* PRICE */}
      <p className="font-medium sm:ml-auto text-stone-950">${ (price * amount).toFixed(2) }</p>
      
      <div className="sm:ml-12">
        {/* AMOUNT */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="text-right p-0">
            <span className="label-text text-stone-950">مقدار</span>
          </label>
          <input
            name="number"
            id="amount"
            className="mt-2 input input-bordered input-sm w-full max-w-xs text-stone-950 bg-red-300"
            value={amount}
           onChange={(event) => dispatch(updateCartAmount({id: id, amount: event.target.value}))}
            />
        </div>
        {/* REMOVE */}
        <button
          className="mt-2  link link-warning link-hover text-sm text-stone-950"
          onClick={()=> dispatch(removeItem(id))}
        >
          حذف از لیست خرید
        </button>
      </div>

      {/* INFO */}
      <div className="sm:ml-16 sm:w-48">
        {/* TITLE */}
        <h3 className="capitalize font-medium text-stone-950">{title}</h3>
        {/* COMPANY */}
        <h4 className="mt-2 text-right capitalize  text-sm text-stone-950 px-1.5" > 
        { brandName }:برند 
        </h4>
        <h4 className="mt-2 text-right capitalize text-sm text-stone-950 px-1.5">
          اندازه: { selectedSize }
        </h4>
      </div>
      {/* IMAGE */}
      <img
        src={`https://${image}`}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      </article>
  );
};

export default CartItem;
