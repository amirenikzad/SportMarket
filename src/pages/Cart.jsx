import React from 'react'
import { CartItemsList, CartTotals, SectionTitle } from '../components'
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Cart = () => {
  
  const navigate = useNavigate();
  const loginState = useSelector((state) => state.auth.isLoggedIn);
  const { cartItems } = useSelector((state) => state.cart);

  const isCartEmpty = () => {
    if(cartItems.length === 0){
      toast.error("سبد شما خالی است");
    }else{
      navigate("/thank-you");
    }
  }

  return (
    <>
    <SectionTitle title="سبدخرید" path="" />
    <div className='mt-8 grid gap-8 lg:grid-cols-12 max-w-7xl mx-auto px-10'>
        
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {loginState ? (
            <button onClick={isCartEmpty} className='btn bg-red-600 hover:bg-red-500 text-white btn-block mt-8'>
              سفارش بدهید
            </button>
          ) : (
            <Link to='/login' className='btn bg-red-600 hover:bg-red-500 btn-block text-white mt-8'>
              به اکانت خود وارد شوید
            </Link>
          )}
        </div>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
      </div>
    </>
  )
}

export default Cart