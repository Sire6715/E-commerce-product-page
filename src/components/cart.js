import React from 'react'
import deleteImg from "./images/icon-delete.svg"
import { useStateContext } from '../context/ContextProvider'
import { motion } from 'framer-motion'

export default function Cart() {

  const { cartItems, setCartItems } = useStateContext()


  let cartOrder
  if (cartItems > 1) {
    cartOrder = true
  }

  return (
    <motion.div
      initial={{
        scale: "40%",
        opacity: 0.5,
        y: "2rem"
      }}
      animate={{
        scale: "100%",
        y: "0rem",
        opacity: 1
      }}
      transition={{
        type: "spring",
        stiffness: 300
      }}
      exit={{
        type: "spring",
        stiffness: 300
      }}

      className={cartOrder ? "border-b-black shadow-lg flex items-start top-[5em] rounded-md  p-4 right-0 flex-col w-[22em]  md:w-[23em] absolute bg-white"
        : "border-b-black shadow-lg top-[5em] rounded-md  p-4 right-0 w-[22em]  md:w-[23em] absolute bg-white flex flex-col justify-center items-center"}>
      <h1 className={cartOrder ? ' font-semibold mb-8 border-b-slate-900' : "font-semibold mb-8 border-b-slate-900 self-start"}>Cart</h1>
      {cartOrder ? (
        <div className='flex space-x-4 align-center items-stretch'>
          <img src="images/image-product-1-thumbnail.jpg" alt='product' className=' rounded-md h-16 w-16' />
          <span className=''>
            <h1 className='font-semibold text-slate-500 first-letter:uppercase'>Fall Limited edition Sneakers</h1>
            <p className='font-thin text-slate-500'>$125 x {cartItems} <span className='font-bold text-black'> ${(125 * cartItems)}.00 </span></p>
          </span>
          <img onClick={() => setCartItems(0)} src={deleteImg} alt={deleteImg} className="h-5 w-4 mt-5" />
        </div>
      ) : (<div className='flex items-center justify-center'>
        <p className='font-semibold  text-slate-500 justify-center mt-3 mb-5'>your cart is empty</p>
      </div>)}

      <div className='flex justify-center items-centers' >
        <button className='items-center bg-orangecol w-[18em] md:w-80 m-4 text-white font-semibold rounded-lg py-2 px-4'>Checkout</button>
      </div>
    </motion.div>
  )
}
