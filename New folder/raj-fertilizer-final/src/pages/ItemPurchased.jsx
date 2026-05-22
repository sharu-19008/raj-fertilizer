import { useEffect } from "react"
import {Link, Navigate} from "react-router-dom"
import {motion} from "framer-motion"
import Fertilizers from "../assets/images/fertilizers.png"
import Seeds from "../assets/images/seeds.png"
import Pesticides from "../assets/images/pesticides.png"
export default function ItemPurchased() {

    const orderPlaced = sessionStorage.getItem('orderJustCompleted')

    if(!orderPlaced) {
        return <Navigate to="/shop/fertilizers" replace />
    }

    useEffect(()=>{
        return ()=>sessionStorage.removeItem
    },[])


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

    return (
        <section className="flex flex-col gap-25 ">
            
            <div className="h-auto w-full flex flex-col items-center gap-7 md:gap-20">
                <h1 className="text-xl md:text-2xl text-center mt-10 font-bold">Your package is on the way!! Continue Shopping for...</h1>
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
                            className="flex flex-col items-center gap-5 shadow-xl p-5 bg-orange-50 rounded-2xl w-75 "
                        >
                            <img 
                                src={Fertilizers} 
                                alt="Image of Fertilizers" 
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
                            className="flex flex-col w-75 items-center gap-5 shadow-xl p-5 bg-orange-50 rounded-2xl "
                        >
                            <img 
                                src={Pesticides} 
                                alt="Image of Seeds Packet" 
                                className="w-fit h-50" 
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
                            className="flex flex-col items-center w-75 gap-5 shadow-xl p-5 bg-orange-50 rounded-2xl "
                        >
                            <img 
                                src={Seeds} 
                                alt="Image of Seeds Packet" 
                                className="w-fit h-50" 
                            />
                            <p className="bg-lime-800 text-white px-12 py-2 w-full text-center">
                                Seeds
                            </p>
                        </motion.div>
                    </Link>

                </motion.div>
            </div>
        </section>
    )
}