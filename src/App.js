import React, { useEffect } from 'react';
import Sidebar from './components/sidebar';
import { Navbar } from './components/navbar';
import Slider from './components/slider';
import Order from './components/order';
import { useStateContext } from './context/ContextProvider';
import shoeData from "./components/Data"
import next from "./components/images/icon-next.svg"
import prev from "./components/images/icon-previous.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, Library } from '@fortawesome/fontawesome-svg-core';
import { faChevronLeft, faChevronRight, faXmark } from '@fortawesome/free-solid-svg-icons';

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

console.log(imageDisplay)

  return (
    <div className={hoverShoes ? "relative font-kumbh border-box pb-[4em]" : 'font-kumbh border-box  '}>
      {hoverShoes ?
       (<div className=' flex justify-center items-center z-50 background absolute h-screen w-full  transition-all duration-200 '>
        <div className='w-[35%] hover:w-[36%] transition-all duration-300 relative flex flex-col justify-center items-center '>
        <div className=' absolute flex top-[37%] justify-between   w-[110%] '>
            <button onClick={prevSlide} className='p-5 bg-neutral-50 rounded-full'>
              <FontAwesomeIcon icon="fa-solid fa-chevron-left" className='text-3xl  hover:text-4xl  hover:text-orangecol transition-all duration-200 hover:drop-shadow-2xl' />
            </button>
            <button onClick={nextSlide} className='p-5  bg-neutral-50 rounded-full'>
              <FontAwesomeIcon icon="fa-solid fa-chevron-right" className='text-3xl hover:text-4xl hover:text-orangecol transition-all duration-200 hover:drop-shadow-2xl'  />
            </button>
          </div>
          {hoverShoes && <Slider />}
          <button className='absolute -top-6 -right-8  '>
            <FontAwesomeIcon icon="fa-solid fa-xmark" onClick={() => setHoverShoes(false)} className="text-3xl text-white hover:text-orangecol " />
          </button>
        </div>
      </div>
      ) : ( "")}
      <Sidebar />
      <Navbar />
      <div className='grid one md:gap-32  md:px-0 lg:w-[70%] md:pb-[8%] md:mx-auto md:pt-0'>
        <Slider />
        <Order />
      </div>
      {/* <Cart /> */}
    </div>
  )
};
