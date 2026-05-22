import {useContext, useEffect} from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { CheckoutContext } from "../context/CheckoutContext"
import { CartContext } from "../context/CartContext"
import {motion} from "framer-motion"

export default function CheckoutPage() {

    
    const {checkoutItems,loadCheckoutItems,clearCheckoutItems,customerInfo, clearCustomerInfo} = useContext(CheckoutContext)

    // const {cartItems} = useContext(CartContext)
    
    

    const navigate = useNavigate()
    
    const {clearCart} = useContext(CartContext)

    useEffect(()=>{
        loadCheckoutItems()
    },[])

    if(checkoutItems.length === 0) {
        return <Navigate to="/shop/fertilizers" replace />
    }

    const totalPrice = checkoutItems.length && checkoutItems.reduce((sum,item)=>{
                            if(item.quantity) {
                                return sum + (item.price * item.quantity)
                            }
                            else {
                                return sum + ( item.price) 
                            }
                         },0) 

    const checkoutItemsList = checkoutItems.map((item)=>{
        return (
            <div key={item.id} className=" flex flex-col p-3 border rounded-2xl h-auto w-full">
                <div className="flex flex-row justify-between gap-2 w-full">
                    <img 
                        src={item.img} 
                        alt={`Image of ${item.name}`} 
                        loading="lazy" 
                        className="w-15" 
                    />
                    <div className="flex flex-col flex-1 md:gap-3">
                        <p className="font-semibold text-sm sm:text-sm md:text-sm">
                            {item.name} ({item.type})
                        </p>
                        <p className="text-sm font-bold md:text-sm ">
                            &#8377;{item.price}
                        </p>
                        {item.quantity && <p className="text-xs">
                           Quantity: {item.quantity}
                        </p>}
                    </div>
                </div>
            </div>
        )
    })

    const customerDetails = customerInfo.map((customer,index)=>{
        return(
            <div key={index}>
                 <p className="font-semibold">{customer.name}</p>
                 <p>+91-{customer.phno}</p>
                 <p>{customer.email}</p>
                 <p><strong>Deliver To:</strong> {customer.address.address1}, {customer.address.address2}, {customer.address.city}, {customer.address.state}, {customer.address.country}, {customer.address.pincode}</p>
            </div>
        )
    })

    function cancellingOrder() {
        clearCheckoutItems()
        clearCustomerInfo()
        // clearCart()
        navigate("/shop/fertilizers")
    }

    return(
        <section className="h-auto flex flex-col p-5">
            {checkoutItems && customerInfo ? 
                <div className="flex flex-col gap-4">
                    <div className="flex justify-end text-sm md:text-base">
                        <button className="cursor-pointer font-light hover:border-b hover:font-medium justify-right" 
                            onClick={cancellingOrder}
                        >
                                Cancel Order
                        </button>     
                    </div>
                    <div className="flex flex-col gap-8 md:gap-15">
                        <div className="flex flex-col sm:items-center">
                            <motion.button 
                                whileHover={{
                                    scale:1.1,
                                    textShadow: "0px 0px 8px rgb(255,255,255)",
                                    boxShadow: "0px 0px 8px rgb(0, 128, 0) ",
                                }}
                                className="cursor-pointer bg-amber-300 text-sm w-full h-8 font-medium rounded-4xl hover:bg-amber-400 overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800 sm:w-1/2 sm:text-base sm:h-10 md:w-1/4"
                                onClick={()=>{
                                    clearCart()
                                    sessionStorage.setItem('orderJustCompleted','true')
                                    navigate("/item-purchased")
                                }}
                            >
                                Continue for Payment
                            </motion.button>
                        </div>
                        <div className="flex flex-col gap-7 w-full sm:px-5 md:flex-row md:justify-center md:px-10 lg:gap-15">
                            <div className="flex flex-col gap-7 w-full md:min-w-1/2 md:max-w-1/2 md:border-2 md:border-gray-300 md:shadow-xl/25 md:rounded-2xl md:px-10 md:py-5">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold md:text-2xl">Items</h1>
                                    <div className="flex flex-row w-full justify-between text-base md:text-lg">
                                        <p>Number of Items:</p>
                                        <p>{checkoutItems.length}</p>
                                    </div>
                                    <div className="flex flex-row w-full justify-between text-base md:text-lg">
                                        <p>Price:</p>
                                        <p>&#8377;{totalPrice}</p>
                                    </div>
                                    <div className="flex flex-row w-full justify-between text-base md:text-lg">
                                        <p>Delivery Fee:</p>
                                        <p>&#8377;59</p>
                                    </div>
                                    <hr />
                                    <div className="flex flex-row w-full justify-between text-base md:text-lg">
                                        <p>Total Price:</p>
                                        <p>&#8377;{totalPrice+59}</p>
                                    </div>
                                    <hr />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-lg font-semibold md:text-2xl">Billing Address</h1>
                                    <div className="text-base md:text-lg">
                                        {customerDetails}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 w-full md:min-w-90 lg:min-w-120 xl:min-w-160 md:border-2 md:border-gray-300 md:shadow-xl/25 md:rounded-2xl md:px-10 md:py-5">
                                <h1 className="text-lg font-semibold md:text-2xl">Ordered Items</h1>
                                <div className=" h-auto w-full flex flex-col gap-3 md:grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:justify-start ">
                                    {checkoutItemsList}
                                </div>
                            </div>

                        </div>
                        <div className="flex flex-col sm:items-center md:hidden">
                            <motion.button 
                                whileHover={{
                                    scale:1.1,
                                    textShadow: "0px 0px 8px rgb(255,255,255)",
                                    boxShadow: "0px 0px 8px rgb(0, 128, 0) ",
                                }}
                                className="cursor-pointer bg-amber-300 text-sm w-full h-8 font-medium rounded-4xl hover:bg-amber-400 overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800 sm:w-1/2 sm:text-base sm:h-10 md:w-1/4"
                                onClick={()=>{
                                    clearCart()
                                    sessionStorage.setItem('orderJustCompleted','true')
                                    navigate("/item-purchased")
                                }}
                            >
                                Continue for Payment
                            </motion.button>
                        </div>
                    </div>
                </div>
                : null
            }
        </section>
    )
} 