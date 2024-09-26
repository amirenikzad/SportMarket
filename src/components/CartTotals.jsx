import React from 'react'
import { useSelector } from 'react-redux';

const CartTotals = () => {
  const { amount } = useSelector((state) => state.cart);
  const { total } = useSelector((state) => state.cart);
  const tax = total / 5;
  const shipping = 50;
  return (
    <div className='card bg-red-400'>
      <div className='card-body'>
        {/* SUBTOTAL */}
        <p className='font-bold flex justify-between text-xs border-b border-red-200 pb-2 text-stone-950'>
          
          <span className='font-medium'>${ Math.round(total) }</span>
          <span>قیمت کالا</span>
        </p>
        {/* SHIPPING */}
        <p className='font-bold flex justify-between text-xs border-b border-red-200 pb-2 text-stone-950'>
          
          <span className='font-medium'>${ shipping }</span>
          <span>هزینه ارسال</span>
        </p>
        {/* Tax */}
        <p className='font-bold flex justify-between text-xs border-b border-red-200 pb-2 text-stone-950'>
          
          <span className='font-medium'>${Math.round(tax)}</span>
          <span>مالیات بر ارزش افزوده</span>
        </p>
        {/* Order Total */}
        <p className=' font-bold flex justify-between text-sm mt-4 pb-2 text-stone-950'>
          
          <span className='font-medium'>${ Math.round(total + shipping + tax) }</span>
          <span>جمع کل</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals