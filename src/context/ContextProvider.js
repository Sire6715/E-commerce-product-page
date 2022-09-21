import React, { createContext, useContext, useState } from "react";


const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeSidebar, setActiveSidebar] = useState(false)
    const [slideIndex, setSlideIndex] = useState(1)
    const [count, setCount] = useState(0)
    const [cartItems, setCartItems] = useState(0)
    const [isClicked, setIsClicked] = useState(false);
    const [screenSize, setScreenSize] = useState(undefined)

    function handleClick(event) {
        setCartItems(event.currentTarget.value);
        setCartItems(prevCartItem => prevCartItem)
    }

    const handleCartClick = (clicked) => setIsClicked(prevIsClicked=>!prevIsClicked);

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
                setScreenSize
            }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)