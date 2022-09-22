import React, { useState, useEffect } from 'react'
import shoeData from "./Data"
import next from "./images/icon-next.svg"
import prev from "./images/icon-previous.svg"
import { useStateContext } from '../context/ContextProvider'




export default function Slider() {
    const { setActiveSidebar, slideIndex, setSlideIndex, screenSize, setScreenSize, hoverShoes, setHoverShoes, screen, setScreen, imageDisplay, setImageDisplay } = useStateContext();




    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 700) {
            setImageDisplay(false);
        } else {
            setImageDisplay(0)
        }
    }, [screenSize]);



    function nextSlide() {
        if (slideIndex !== shoeData.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === shoeData.length) {
            setSlideIndex(1)
        }
    }

    function prevSlide() {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(shoeData.length)
        }
    }

    useEffect(() => {
        if (screenSize <= 700) {
            setHoverShoes(false);
        } else {
            setHoverShoes(true)
        }
    }, [screenSize]);


    useEffect(() => {
        if (screenSize <= 700) {
            setScreen(false);
        } else {
            setScreen(true)
        }
    }, [screenSize]);

    const handleImgClick = () => setHoverShoes(!hoverShoes)





    return (
        <div onClick={() => setActiveSidebar(false)} className='shoe--grid gap-2  '>
            {shoeData.map((shoes, index) => (

                <div className = 'grid--one'  onClick = { screen?() =>handleImgClick(): undefined} key={shoes.id}>
            <div>
                {/* image slider */}
                {imageDisplay ?
                    (<div className={imageDisplay === index ? "flex  " : "hidden"}>
                        <img src={shoes.img} alt="shoe" className='relative  -z-10 mt-0 md:mt-4 md:rounded-lg h-auto min-w-[100%] ' />
                    </div>) :
                    (
                        <div className={slideIndex === index + 1 ? "flex " : "hidden"}>
                            <img src={shoes.img} alt="shoe" className='relative -z-10 mt-0 md:mt-4 md:rounded-lg h-auto min-w-[100%] ' />
                        </div>)}
                {console.log(handleImgClick)}
                <div className=" absolute flex top-40 justify-between w-full p-4 md:hidden">
                    <button onClick={nextSlide} className='p-3 bg-neutral-50 rounded-full'>
                        <img src={prev} alt={prev} className="w-2 h-2" />
                    </button>
                    <button onClick={prevSlide} className='p-3  bg-neutral-50 rounded-full'>
                        <img src={next} alt={next} className="w-2 h-2" />
                    </button>
                </div>
            </div>
        </div>
    ))
}
{/* // thumbnail grid */ }
<div className='hidden grid--two gap-9'>
    {shoeData.map((shoes, index) => (
        <div key={shoes.id}>
            <div className='grid-span' onClick={() => (index === imageDisplay)} >
                <img onClick={() => (setImageDisplay(index, shoes))} src={shoes.thumbnail} alt={shoes.thumbnail} className=" rounded-lg hover:w-[110%] hover:cursor-pointer hover:border-4 border-orangecol transition-all duration-75 hover:opacity-75" />
            </div>
        </div>
    ))}
</div>
        </div >
    )
}
