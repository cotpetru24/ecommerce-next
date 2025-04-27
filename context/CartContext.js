import { createContext, useState, useContext } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product])
    }

    const removeFromCart = (product) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== product.id));

    }

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>

    );
}

export const useCart=()=>useContext(CartContext);

export default CartProvider;