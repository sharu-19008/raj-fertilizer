import { useContext } from "react"
import {Link} from "react-router-dom"
import { CartContext } from "../context/CartContext"
import { CheckoutContext } from "../context/CheckoutContext"
import { FaRegTrashCan } from "react-icons/fa6"
import {motion} from "framer-motion"
import Fertilizers from "../assets/images/fertilizers.png"
import Seeds from "../assets/images/seeds.png"
import Pesticides from "../assets/images/pesticides.png"

export default function CartDetails () {

    const {cartItems,increaseItemQuantity,decreaseItemQuantity, removeFromCart, clearCart} = useContext(CartContext)
    const {checkout} = useContext(CheckoutContext)

    const totalPrice = cartItems.reduce((sum,item)=>{
        return sum + ( item.price*item.quantity )
    },0)

    const itemsList = cartItems.map((item,index)=>{
        return (
            <div key={item.id} className=" flex flex-col p-3 border rounded-2xl gap-3">
                <div className="flex flex-row gap-5 flex-1">
                    <img 
                        src={item.img} 
                        alt={`Image of ${item.name}`} 
                        loading="lazy" 
                        className="w-24 sm:w-30 md:w-40 lg:w-50 xl:w-60" 
                    />
                    <div className="flex flex-col md:gap-3">
                        <p className="font-semibold text-md sm:text-lg md:text-xl lg:text-2xl">
                            {item.name} ({item.type})
                        </p>
                        <p className="text-lg font-bold md:text-2xl xl:text-3xl ">
                            &#8377;{item.price}
                        </p>
                        <p className="line-clamp-3 text-xs sm:text-sm md:text-md md:line-clamp-4 lg:text-lg">
                            {item.desc.brief}
                        </p>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-5">
                    <div className="flex flex-row justify-start border-2 w-24 rounded-2xl text-sm md:text-lg md:w-30 font-light">
                        <motion.button 
                            whileHover={{
                            scale:1.1,
                        }}
                            className="w-8 border-r-2 cursor-pointer hover:font-semibold hover:text-md md:w-10 flex justify-center items-center"
                            onClick={()=>decreaseItemQuantity(item.id)}>
                                { item.quantity === 1 ? <FaRegTrashCan size={16} /> : "-"}
                        </motion.button>
                        <p className="flex flex-row justify-center items-center w-8 border-r-2 font-semibold md:w-10">
                            {item.quantity}
                        </p>
                        <button 
                            onClick={()=>increaseItemQuantity(item.id)}
                            className="w-8 cursor-pointer hover:font-semibold hover:text-md md:w-10">
                                +
                        </button>
                    </div>
                    <button 
                        className="border rounded-2xl text-sm px-2 w-24 h-8 font-semibold cursor-pointer hover:bg-gray-100 hover:text-xs hover:w-24 hover:h-8" 
                        onClick={()=>removeFromCart(item.id)}>
                            Delete
                    </button>
                </div>
            </div>
        )
    })
        
    // FRAMER MOTION VARIANTS
    const containerVariants = {
        initial: {opacity:0},
        animate:{
            opacity:1,
        },
    }

    const itemVariants = {
        initial: { scale: 0.5, opacity: 0, y: 50 },
        animate: { 
            scale: 1, 
            opacity: 1, 
            y: 0,
            transition: { type: "spring", damping: 10, }
        },
        exit: { scale: 0.5, opacity: 0, y: 50 },
        hover: { 
            scale: 1.1,
            transition: { duration: 0.2 }
        }
    };

    
    return(
        <section className="py-5 px-4 flex flex-col gap-2 ">

            {cartItems.length > 0 ?
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex flex-col items-end w-full md:flex-row-reverse md:justify-between md:items-start">
                        <div>
                            <div className="flex flex-row w-full justify-between gap-2">
                                <p className="text-lg font-bold xl:text-xl">Items Price:</p>
                                <p className="text-lg font-bold xl:text-xl">&#8377;{totalPrice}</p>
                            </div>
                            <p className="hidden md:block md:text-base md:italic md:font-semibold" >
                                &#8377;59 Delivery Fee*
                            </p>
                        </div>
                        <p className="text-sm sm:text-base font-semibold">
                            You have {cartItems.length} items in your cart.&nbsp;
                            <a href="#items" className="text-blue-600 font-light md:hidden">View Price Details</a>
                        </p>
                    </div>
                    <motion.button 
                        whileHover={{
                            scale:1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(0, 128, 0) ",
                        }}
                        className="bg-amber-300 w-full h-10 rounded-3xl flex flex-row justify-center items-center font-semibold cursor-pointer sm:w-70 md:w-80 md:h-12 md:text-lg hover:bg-amber-400"
                        onClick={()=>checkout(cartItems)}
                    >
                        Proceed to Buy ({cartItems.length} items)
                    </motion.button>
                    <div className="flex flex-col px-2 md:flex-row gap-10 md:justify-between">
                        <div className=" h-auto w-full flex flex-col justify-center gap-5 sm:grid sm:grid-cols-2 mt-2">
                            {itemsList}
                        </div>
                        <div id="items" className="flex flex-col gap-2 md:hidden">
                            <h1 className="text-lg font-semibold md:text-2xl">Items</h1>
                            <div className="flex flex-row w-full justify-between text-base md:text-lg">
                                <p>Number of Items:</p>
                                <p>{cartItems.length}</p>
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
                    </div>
                    <div className="flex flex-row justify-center mt-5">
                        <motion.button 
                            whileHover={{
                                scale:1.1,
                                boxShadow: "0px 0px 10px rgb(200, 0, 0) ",
                            }}
                            className="font-semibold text-md bg-black text-white w-40 h-10 rounded-xl cursor-pointer p-2 flex justify-center md:w-60 hover:text-gray-200 md:hover:w-62 md:hover:h-11 md:hover:text-lg" 
                            onClick={clearCart}>
                                Clear Cart
                        </motion.button>
                    </div>
                </div>
                :
                <div className="h-auto w-full flex flex-col items-center gap-7 md:gap-20">
                    <p className="text-xl md:text-2xl text-center mt-10 font-bold">Your shopping cart is empty! Continue Shopping for...</p>
                    <motion.div 
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        transition="transition"
                        className="w-full flex flex-col items-center gap-5 text-xl font-semibold sm:grid grid-cols-2 sm:place-items-center lg:grid-cols-3">
    
                        <Link to="/shop/fertilizers">
                            <motion.div 
                                variants={itemVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                whileHover="hover"

                                className="flex flex-col items-center gap-5 shadow-xl p-5 bg-orange-50 rounded-2xl w-75"
                            >
                                <img 
                                    src={Fertilizers} 
                                    alt="Image of Fertilizers" 
                                    loading="lazy" 
                                    className="w-full h-50" 
                                />
                                <p className="bg-lime-800 text-white px-12 py-2 w-full text-center">
                                    Fertilizers
                                </p>
                            </motion.div>
                        </Link>
    
                        <Link to="/shop/pesticides">
                            <motion.div 
                                variants={itemVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                whileHover="hover"

                                className="flex flex-col items-center gap-5 shadow-xl p-5 bg-orange-50 rounded-2xl w-75"
                            >
                                <img 
                                    src={Pesticides} 
                                    alt="Image of Pesticides"
                                    loading="lazy" 
                                    className="w-full h-50" 
                                />
                                <p className="bg-lime-800 text-white px-12 py-2 w-full text-center">
                                    Pesticides
                                </p>
                            </motion.div>
                        </Link>
    
                        <Link to="/shop/seeds">
                            <motion.div 
                                variants={itemVariants}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                whileHover="hover"
                                
                                className="flex flex-col items-center gap-5 shadow-xl p-5 bg-orange-50 rounded-2xl w-75"
                            >
                                <img 
                                    src={Seeds} 
                                    alt="Image of Seeds Packet" 
                                    loading="lazy" 
                                    className="w-full h-50" 
                                />
                                <p className="bg-lime-800 text-white px-12 py-2 w-full text-center">
                                    Seeds
                                </p>
                            </motion.div>
                        </Link>
    
                    </motion.div>
                </div>
            }
        </section>
    )
}