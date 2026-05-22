import Fertilizers from "../assets/images/fertilizers.png"
import Seeds from "../assets/images/seeds.png"
import Pesticides from "../assets/images/pesticides.png"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
export default function About() {

    return (
        <section className="h-auto w-full flex flex-col px-7 py-5 gap-10 md:h-auto md:px-20 md:w-full">
            <div>
                <h1 className="font-semibold text-2xl lg:text-3xl lg:mt-5">
                    About Us
                </h1>
                <hr />
            </div>

            <div className="company-description flex flex-col gap-10 text-lg text-justify lg:text-2xl">
                <p>
                    Welcome to Raj Fertilizer, your trusted destination for high-quality agricultural and gardening solutions. We are dedicated to helping farmers, gardeners, and growers achieve healthier soil, stronger plants, and higher yields through reliable and sustainable fertilizer products.
                </p>
                
                <p>
                    At Raj Fertilizer, we offer a complete range of organic, bio, and chemical fertilizers, along with soil conditioners and crop nutrients that meet the unique needs of every type of cultivation. Our mission is to make farming more productive, eco-friendly, and profitable by providing the right products and expert guidance.
                </p>
                
                <p>
                    With years of experience in the agricultural field, we’ve earned the trust of countless customers who rely on us for consistent quality, competitive prices, and personalized service. Whether you manage a small garden or large farmland, our team is here to support you with the right advice and products to help your crops thrive.
                </p>

                <p>
                    Together, let’s build a greener, more sustainable future — one healthy harvest at a time.
                </p>
            </div>

            <hr />

            <h3 className="font-semibold text-2xl lg:text-3xl">
                What do We Sell?
            </h3>

            <div className="h-auto w-full flex flex-col items-center gap-7">
                <div className="w-full flex flex-col items-center gap-5 text-xl font-semibold sm:grid grid-cols-2 sm:place-items-center lg:grid-cols-3">

                    <Link to="/shop/fertilizers">
                        <motion.div 
                            whileHover={{
                                scale:1.1,
                            }}
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
                            whileHover={{
                                scale:1.1,
                            }}
                            className="flex flex-col items-center gap-5 shadow-xl p-5 bg-orange-50 rounded-2xl w-75 "
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
                            whileHover={{
                                scale:1.1,
                            }}
                            className="flex flex-col items-center gap-5 shadow-xl p-5 bg-orange-50 rounded-2xl w-75 "
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

                </div>
            </div>
            
        </section>
    )
}