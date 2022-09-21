import React from 'react';
import Sidebar from './components/sidebar';
import { Navbar } from './components/navbar';
import Slider from './components/slider';
import Order from './components/order';



export default function App() {


  return (
    <div className='font-kumbh border-box '>
      <Sidebar />
      <Navbar />
      <div className='grid one md:gap-32 md:px-[7%] md:pb-[8%] md:pt-0'>
        <Slider />
        <Order />
      </div>
      {/* <Cart /> */}
    </div>
  )
};
