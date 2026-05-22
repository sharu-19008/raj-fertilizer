import { createContext, useState, useEffect } from "react";
export const CartContext = createContext(null)

export function CartProvider({children}) {
    const [cartItems,setCartItems] = useState(()=>{
        const saved = localStorage.getItem('cartItems')

        if(saved){
            try {
                const {data,expiry}= JSON.parse(saved);
                if(Date.now() > expiry){
                    console.log("Cart Data Expired.. Clearing Cart Items...")
                    localStorage.removeItem('cartItems')
                    return [];
                }
                return data || [];
            }
            catch(error){
                console.error("Error in fetching data!",error)
                return [];
            }
        }
        return [];
    })

    useEffect(()=>{
            if(cartItems.length > 0) {
                const expiryTime = Date.now() + (24 * 60 * 60 * 1000);

                const dataToSave = {
                    data:cartItems,
                    expiry: expiryTime
                }
                localStorage.setItem('cartItems', JSON.stringify(dataToSave))
            }
            else {
                localStorage.removeItem('cartItems')
            }
        },[cartItems])
    
    function addToCart(product){
        setCartItems(prev => {
            if(prev.some((item)=>item.id===product.id)) {
                return prev.map((item)=>{
                    return item.id===product.id ? 
                    {...item,quantity:item.quantity+1} : item
                })
            }
            else {
                return [...prev,{...product,quantity:1}]
            }
        });
    }
    
    function increaseItemQuantity(productId){
        setCartItems((prev)=>{
            return prev.map((item)=>{
                return item.id===productId ? 
                {...item,quantity:item.quantity+1} : item
            })
        })
    }
    
    function decreaseItemQuantity(productId) {
        setCartItems((prev)=>{
            return prev.map((item)=>{
                return item.id===productId && item.quantity > 0 ? 
                {...item,quantity:item.quantity-1} : item
            }).filter((item)=>item.quantity>0)
        })
    }
    
    function removeFromCart(productId) {
        setCartItems((prev)=>{
            return prev.filter((item)=>item.id!==productId)
        })
    }

    function clearCart() {
        setCartItems([])
    }

    return (
        <CartContext.Provider 
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                increaseItemQuantity,
                decreaseItemQuantity,
                clearCart
                }} >
            {children}
        </CartContext.Provider>
    )
}