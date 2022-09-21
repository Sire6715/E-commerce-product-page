import React from 'react'
import cartImg from "./images/icon-cart.svg"
import menu from "./images/icon-menu.svg"
import logo from "./images/logo.svg"
import avatar from "./images/image-avatar.png"
import { useStateContext } from '../context/ContextProvider'
import Cart from './cart'




export const Navbar = () => {
  const { setActiveSidebar, cartItems, cart,handleCartClick, isClicked} = useStateContext()

  return (
    <div className="flex flex-row w-full p-4  bg-[#fff] z-10  relative">
      <nav className='w-full flex  justify-between items-center shadow-2xl md:h-[8em] lg:mx-16 md:shadow-none md:border-b-2 md:px-12'>
        <div className='flex flex-row space-x-2 center md:-gap-[1.5em] xl:gap-14 '>
          <button onClick={() => setActiveSidebar((prevActiveSidebar) => !prevActiveSidebar)} >
            <img src={menu} className="sm:inline-block md:hidden" alt={menu} />
          </button>
          <img src={logo} className="w-[8em] h-5" alt={logo} />
          {/* for medium and large screens */}
          <span className='hidden md:flex pr-4'>
            <ul className='md:flex md:gap-8  font-medium text-gray-500 '>
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </span>
        </div>


        <div className='flex flex-row items-center relative space-x-5 md:ml-32'>
          <img onClick={() => handleCartClick(isClicked)}  src={cartImg} alt={cart} className="w-5 h-5 " />
          <label className='absolute top-0 right-16  text-neutral-50 text-[10px] font-semibold
          bg-orangecol px-[0.5em] rounded-full'>{cartItems}</label>
          <div className='flex  w-full'>{isClicked && (<Cart />)}</div>
               
          <img src={avatar} alt={avatar} className="w-8 h-8 hover:border-2 hover:border-rounded-full hover:border-orange-600" />
        </div>
      </nav>
    </div>

    
  )
}
