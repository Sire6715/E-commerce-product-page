import React from 'react'
import plus from "./images/icon-plus.svg"
import minus from "./images/icon-minus.svg"
import { BsCart3 } from "react-icons/bs"
import { useStateContext } from '../context/ContextProvider'


export default function Order() {

    const { count, setCount, handleClick } = useStateContext()

    const negative = () => {
        if (count < 0) {
            setCount(0)
        } else if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div className='p-6 md:p-0 md:w-[80%] md:max-w-full' >
            {/* article */}
            <div>
                <h4 className='text-[12px] tracking-wide my-2 font-black text-orangecol uppercase md:text-[14px]'>sneaker company</h4>
                <h1 className='text-3xl font-black leading-8 mt-3 md:text-5xl'>Fall Limited Edition Sneakers</h1>
                <p className='text-[13px] mt-3 font-semibold text-slate-500 leading-6 md:text-xl md:font-medium md:leading-8 md:pt-6'>These low-profie sneakers are your percect
                    casual wear companjon.Featuring a durable rubber
                    outer sole,they'll withstand everything the weather
                    can offer.
                </p>
            </div>
            {/* order */}
            <div className='mt-4 pt-4'>
                <span className='flex md:block justify-between align-center'>
                    <h1 className='text-2xl font-bold'>
                        ${count * 125}
                        <label className='ml-4 text-[11px] text-orangecol bg-orange-200 p-1 rounded-sm'>50%</label>
                    </h1>
                    <p className='font-bold text-gray-400 line-through'>${ (count * 125) * 2}</p>
                </span>
                {/* cart/button */}
                <div className='md:flex md:justify-between w-full'>
                    <span className='flex md:w-[30%] justify-between mt-4 bg-Lightgrayishblue p-3 border rounded-md'>
                        <button onClick={negative}>
                            <img src={minus} alt={minus} className="hover:opacity-70  duration-100" />
                        </button>
                        <h1 className='font-semibold' >{count}</h1>
                        <button onClick={() => setCount(count + 1)}>
                            <img src={plus} alt={plus}  className="hover:opacity-70  duration-100"  />
                        </button>
                    </span>
                    <div className='flex md:w-[70%] hover:md:w-[74%] hover:opacity-90 transition-all duration-100'>
                        <button value={count} onClick={handleClick} className='bg-orangecol text-white text-[20px] gap-2 font-semibold justify-center mt-3 rounded-lg flex py-3 w-full md:w-60 '>
                            <BsCart3 color='#ffff' size="1.5em" /> Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
