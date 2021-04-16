import { useState, createContext } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const totalItems = cart.reduce((prevValue, cartItem) => prevValue + cartItem.quantity, 0)

    const totalPrice = cart.reduce((prevValue, cartItem) => prevValue + (cartItem.cost * cartItem.quantity), 0)

    return (
        <CartContext.Provider value={[cart, setCart, totalItems, totalPrice]}>
            {children}
        </CartContext.Provider>
    )
}

