import {Link} from "react-router-dom"
import ImageSlider from "../components/ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {motion} from "framer-motion"


export default function Home() {
    
    return (
        <section className="h-auto w-full flex flex-col items-center md:gap-60">
            <ImageSlider />

            <div className=" h-auto w-full flex flex-col justify-center items-center text-justify sm:items-start px-10 py-15 gap-7 md:w-full md:px-20 lg:w-300">

                <h3 className="text-3xl font-semibold lg:text-4xl">
                    Feed Your Soil, Fuel Your Growth!
                </h3>
                <p className="text-xl lg:text-2xl">
                    Discover premium fertilizers and plant nutrients that help you achieve greener fields, healthier plants, and better harvests—all under one roof.
                </p>
                <h3 className="text-3xl font-semibold lg:text-4xl" >
                    Your Trusted Partner in Farming Success!
                </h3>
                <p className="text-xl lg:text-2xl">
                    We provide the best quality fertilizers, seeds, and soil enhancers to help every farmer grow more with less. Visit us today and give your crops the care they deserve.
                </p>
                <Link 
                    to="shop/fertilizers" >
                    <motion.button
                        animate={{
                            scale:1.1,
                            transition:{
                                repeat:Infinity,
                                repeatType:"reverse",
                                duration: 0.5, 
                            }
                        }}
                        whileHover={{
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(255,0,0)",
                        }}
                        className="bg-amber-500 cursor-pointer text-base sm:text-xl font-bold font-inter max-w-80 text-center px-10 py-3 text-white">
                        Explore our Products
                    </motion.button>
                </Link>

            </div>
        </section>
    )
}