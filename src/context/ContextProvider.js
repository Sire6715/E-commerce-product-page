import React, { createContext, useContext, useState,useEffect } from "react";


const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeSidebar, setActiveSidebar] = useState(false)
    const [slideIndex, setSlideIndex] = useState(1)
    const [count, setCount] = useState(0)
    const [cartItems, setCartItems] = useState(0)
    const [isClicked, setIsClicked] = useState(false);
    const [screenSize, setScreenSize] = useState(undefined)
    const [hoverShoes,setHoverShoes] = useState(false)
    const [hoverSlideIndex,setHoverSlideIndex] = useState(0)
    const [imageDisplay, setImageDisplay] = useState(undefined)
    const [screen,setScreen] = useState(undefined)

    function handleClick(event) {
        setCartItems(event.currentTarget.value);
        setCartItems(prevCartItem => prevCartItem)
    }
  

    
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
  
        window.addEventListener('resize', handleResize);
  
        handleResize();
  
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

   

    const handleCartClick = (clicked) => setIsClicked(prevIsClicked=>!prevIsClicked);
    const handleImgClick = (clicked) => setHoverShoes(prevHoverState=>true);
   
    
    return (
        <StateContext.Provider
            value={{
                activeSidebar,
                setActiveSidebar,
                slideIndex,
                setSlideIndex,
                count,
                setCount,
                handleClick,
                cartItems,
                handleCartClick,
                isClicked,
                setIsClicked,
                setCartItems,
                screenSize, 
                setScreenSize,
                handleImgClick,
                setHoverShoes,
                hoverShoes,
                hoverSlideIndex,
                setHoverSlideIndex,
                imageDisplay, 
                setImageDisplay,
                screen,
                setScreen
            }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)