import React, { useEffect } from "react";
import close from "./images/icon-close.svg"
import { useStateContext } from '../context/ContextProvider'
import { motion } from "framer-motion";

export default function Sidebar() {
  const { activeSidebar, setActiveSidebar, screenSize, setScreenSize } = useStateContext()


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 700) {
      setActiveSidebar(false);
    } else {
      setActiveSidebar(false);
    }
  }, [screenSize]);

  return (
    // open/close button
    <motion.div
      initial={{
        scale: "40%",
      }}
      animate={{
        scale: "100%",
      }}
      transition={{
        type: "spring",
        stiffness: 30,
        duration: 2000
      }}

      className={`${activeSidebar ? "sidebar absolute flex flex-col z-30 h-screen transition-all duration-200 ease-in" : "hidden"}`}>
      <div className="w-64 h-screen p-4 flex flex-col  bg-neutral-50" >
        <button onClick={() => setActiveSidebar((prevActiveSidebar) => !prevActiveSidebar)}>
          <img src={close} alt={close} />
        </button>
        <div>
          {/* list */}
          <ul className='mt-10 flex flex-col font-bold gap-4 text-slate-900'>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </motion.div>
  )
}
