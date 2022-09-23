import React, { useEffect } from 'react';
import Sidebar from './components/sidebar';
import { Navbar } from './components/navbar';
import Slider from './components/slider';
import Order from './components/order';
import { useStateContext } from './context/ContextProvider';
import shoeData from "./components/Data"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion"

library.add(faXmark, faChevronLeft,faChevronRight)

export default function App() {

  const { hoverShoes, setHoverShoes, slideIndex, setSlideIndex, screenSize, setScreenSize, imageDisplay, setImageDisplay } = useStateContext()


  
    useEffect(() => {
      if (hoverShoes === true) {
        setImageDisplay(0);
      } else {
        setImageDisplay(false)
      }
    }, [hoverShoes]);

    
  
    useEffect(() => {
      if (screenSize <= 700) {
        setHoverShoes(false);
      } else {
        setHoverShoes(false)
      }
    }, [screenSize]);

  
 

  function nextSlide() {
    if (imageDisplay !== shoeData.length - 1) {
      setImageDisplay(imageDisplay + 1)
    } else if (imageDisplay === shoeData.length - 1) {
      setImageDisplay(0)
    }
  }

  function prevSlide() {
    if (imageDisplay !== 0) {
      setImageDisplay(imageDisplay - 1)
    } else if (imageDisplay === 0) {
      setImageDisplay(shoeData.length - 1)
    }
  }



  return (
    <div className={hoverShoes ? "relative font-kumbh border-box pb-[4em]" : 'font-kumbh border-box  '}>
      {hoverShoes ?
       (<div className=' flex justify-center items-center z-50 background absolute h-screen w-full  transition-all duration-200 '>
        <div
        className='w-[35%] hover:w-[36%] transition-all duration-300 relative flex flex-col justify-center items-center '>
        <div className=' absolute flex top-[37%] justify-between  z-10  w-[110%] '>
            <motion.button 
            whileTap={{
              x:"-2em"
            }}
            onClick={prevSlide} className='p-5 bg-neutral-50 rounded-full '>
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" className='text-3xl  hover:text-4xl  hover:text-orangecol transition-all duration-200 hover:drop-shadow-2xl' />
            </motion.button>
            <motion.button 
              whileTap={{
                x:"2em"
              }}
            onClick={nextSlide} className='p-5  bg-neutral-50 rounded-full'>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='text-3xl hover:text-4xl hover:text-orangecol transition-all duration-200 hover:drop-shadow-2xl'  />
            </motion.button>
          </div>
          {hoverShoes && <Slider />}
          <motion.button
          whileHover={{
            rotate:"360deg"
          }}
           className='absolute -top-6 -right-8  '>
            <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={() => setHoverShoes(false)} className="text-3xl text-white hover:text-orangecol " />
          </motion.button>
        </div>
      </div>
      ) : ( "")}
      <Sidebar />
      <Navbar />
      <div className='grid one md:gap-32  md:px-0 lg:w-[70%] md:pb-[8%] md:mx-auto md:pt-0'>
        <Slider />
        <Order />
      </div>
      <p className=" text-black text-[16px] text-center">Challenge by <span className="text-blue-600">Frontend Mentor</span>. Coded by <span className="text-blue-600">sire</span>.</p>
      {/* <Cart /> */}
    </div>
  )
};
