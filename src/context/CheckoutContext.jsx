import { createContext, useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
export const CheckoutContext = createContext(null);

export function CheckoutProvider({children}) {

    const navigate = useNavigate()

    // CHECKOUT STATE VARIABLE
    const [checkoutItems,setCheckoutItems] = useState(()=>{
        const saved = sessionStorage.getItem('checkoutItems')

        if(saved){
            try {
                const parsed = JSON.parse(saved);
                return parsed === null ? [] : parsed;
            }
            catch(error){
                console.error("Error in fetching data!",error)
                return [];
            }
        }
        return [];
    });

    useEffect(()=>{
        if(checkoutItems.length > 0) {
            sessionStorage.setItem('checkoutItems', JSON.stringify(checkoutItems))
        }
        else {
            sessionStorage.removeItem('checkoutItems')
        }
    },[checkoutItems])

    // CUSTOMER DETAILS STATE VARIABLE
    const [customerInfo, setCustomerInfo] = useState(()=>{
        const saved = sessionStorage.getItem('customerInfo')
        if(saved) {
            try {
                const parsed = JSON.parse(saved);
                return parsed === null ? [] : parsed;
            }
            catch(error) {
                console.log("Couldn't fetch customer details!", error)
                return [];
            }
        }
        else {
            return [];
        }
    })

    useEffect(()=>{
        if (customerInfo.length > 0) {
            sessionStorage.setItem('customerInfo', JSON.stringify(customerInfo));
        } else {
            sessionStorage.removeItem('customerInfo'); // Clear when empty
        }
    },[customerInfo])

    // CHECKOUT ITEMS FUNCTIONS
    function checkout(items) {
    
        const checkoutItemsArray = Array.isArray(items) ? items : [items]
        setCheckoutItems(checkoutItemsArray)
        navigate('/details')
    }

    const loadCheckoutItems = useCallback(() => {
    if(checkoutItems.length > 0) return checkoutItems;
    else {
        const itemsSaved = sessionStorage.getItem('checkoutItems');
        if(itemsSaved){
            const itemsForCheckout = JSON.parse(itemsSaved);
            return itemsForCheckout || [];
        }
        return [];
    }
}, [checkoutItems]); 

    function clearCheckoutItems() {
        setCheckoutItems([])
        navigate("/shop/fertilizers")
    }

    // CUSTOMER INFO FUNCTIONS
    function getCustomerInfo(info) {
        setCustomerInfo(info)
    }

    function clearCustomerInfo() {
        setCustomerInfo([])
    }

    return (
        <CheckoutContext.Provider value=
            {{
                checkoutItems, 
                customerInfo,
                setCheckoutItems,
                setCustomerInfo,
                checkout,
                loadCheckoutItems,
                clearCheckoutItems,
                getCustomerInfo,
                clearCustomerInfo
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}


