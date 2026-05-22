import {NavLink, Outlet} from "react-router-dom"
import Fertilizers from "../assets/images/fertilizers.png"
import Seeds from "../assets/images/seeds.png"
import Pesticides from "../assets/images/pesticides.png"
import {motion} from "framer-motion"
export default function Shop() {

    // console.log("PRODUCTS ++++ = ",products)

  

    return (
        <>
            <section className="h-auto w-full md:h-auto ">
                <div className=" w-full flex flex-col items-center">
                    <div className="flex flex-row gap-5 py-2 px-4  justify-center font-semibold w-full md:justify-center md:overflow-hidden lg:gap-15 lg:text-lg mt-5">
                    
                        <NavLink 
                            to="fertilizers" 
                            relative="path" 
                            className="p-2 text-black w-auto overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800"
                            >
                                <motion.div 
                                    whileHover={{
                                        scale:1.1,
                                    }} 
                                    className=" flex flex-col justify-center items-center gap-3 rounded-full">
                                    <img src={Fertilizers} className="rounded-full object-cover w-15 h-15 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-23 lg:h-23 xl:w-25 xl:h-25 border"/>
                                    <p>Fertilizers</p>
                                </motion.div>
                        </NavLink>

                        <NavLink 
                            to="pesticides" 
                            className="p-2 text-black w-auto overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800"
                            >
                                <motion.div 
                                    whileHover={{
                                        scale:1.1,
                                    }} 
                                    className=" flex flex-col justify-center items-center gap-3 rounded-full">
                                    <img src={Pesticides} className="rounded-full object-cover w-15 h-15 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-23 lg:h-23 xl:w-25 xl:h-25 border"/>
                                    <p>Pesticides</p>
                                </motion.div>
                        </NavLink>

                        <NavLink 
                            to="seeds" 
                            className="p-2 text-black w-auto overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800"
                            >
                                <motion.div 
                                    whileHover={{
                                        scale:1.1,
                                    }} 
                                    className=" flex flex-col justify-center items-center gap-3 rounded-full">
                                    <img src={Seeds} className="rounded-full object-cover w-15 h-15 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-23 lg:h-23 xl:w-25 xl:h-25 border"/>
                                    <p>Seeds</p>
                                </motion.div>
                        </NavLink>
                    </div>
                </div>
                <Outlet />
            </section>
        </>
    )
}