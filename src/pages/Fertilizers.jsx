import {useContext} from "react"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import {ProductsContext} from "../context/ProductsContext" 
import { SortContext } from "../context/SortContext"
import { FaCartShopping } from "react-icons/fa6"
export default function Fertilizers () {
    
    const products = useContext(ProductsContext)

    const fertilizers = products.filter((product)=>product.type === "Fertilizers")

    const {sortBy, setSortBy} = useContext(SortContext)

    const activeStyle = {
        backgroundColor: "#c0f2ff",
    }

    let sortedFertilizersList;

    if(sortBy) {
        sortedFertilizersList = [...fertilizers].sort((a,b)=>{
            switch(sortBy){
                case "name-asc": 
                    return a.name.localeCompare(b.name);
                case "name-desc": 
                    return b.name.localeCompare(a.name);
                case "price-asc": 
                    return a.price - b.price;
                case "price-desc": 
                    return b.price - a.price;
                default: 
                    return 0;
            }              
        })
    }
    else {
        sortedFertilizersList = fertilizers
    }

    const fertilizersList = sortedFertilizersList.map((fertilizer)=>{
        return (
            <motion.div 
                key={fertilizer.id} 
                whileHover={{
                    scale:1.1,
                }}
                className=" h-70 flex flex-col justify-between px-5 sm:px-0 border border-gray-300 bg-white shadow-xl/30 sm:w-60 sm:h-130">

                <div className="flex flex-row gap-3 sm:flex-col sm:justify-normal">
                    
                    <Link to={`./${fertilizer.id}`}>
                        <img 
                            className="w-full h-50 sm:h-60 sm:mb-2 " 
                            src={fertilizer.img} 
                            alt={`Image of ${fertilizer.name}`} 
                            loading="lazy" 
                        />
                    </Link>
                    <hr className="sm:w-full" />
                    <div className="flex flex-col justify-start items-end sm:items-start gap-2 px-3 mt-5 sm:mt-2 flex-1">
                        <Link to={`./${fertilizer.id}`}>
                            <h1 className="font-semibold text-xl hover:text-amber-700">
                                {fertilizer.name}
                            </h1>
                        </Link>
                        <p className="font-semibold text-lg">
                            &#8377;{fertilizer.price}
                        </p>
                        <p className="font-light">
                            Availability -
                        </p>
                        <p className="bg-black text-white w-26 h-auto flex justify-center items-center sm:w-32  p-1 rounded-xl text-center font-semibold text-xs sm:text-sm">
                            {fertilizer.availability}
                        </p>
                    </div>
                </div>
                <div className="sm:px-5">
                    <Link 
                        to={`./${fertilizer.id}`} 
                        className="bg-yellow-300 font-inter font-medium flex flex-row justify-center items-center w-full  h-8 cursor-pointer mt-auto mb-5 hover:bg-yellow-400 overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800 active:rounded">
                            Learn More
                    </Link>
                </div>
            </motion.div>
        )
    })

    return(
        <section className="py-5 flex flex-col items-center gap-15">
            <h1 className="text-4xl font-semibold text-center">
                Shop for Fertilizers
            </h1>

            <div className="flex flex-col w-full px-5 md:px-20">
                <div className="flex flex-row justify-end">
                    <button 
                        onClick={()=>setSortBy(null)}
                        className="px-3 py-1 rounded-lg cursor-pointer font-light hover:underline hover:underline-offset-2 hover:font-medium"
                    > 
                        Clear all Filters
                    </button>
                </div>
                <div className="flex flex-row flex-wrap md:justify-between">
                    <div className="flex flex-row flex-wrap md:items-center gap-3">
                        <p>Sort By:</p> 
                        <button 
                            style={sortBy === "price-asc" ? activeStyle : null}
                            onClick={()=>setSortBy("price-asc")}
                            className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-gray-100 "
                        >
                            Price: Lowest to Highest
                        </button>
                        <button 
                            style={sortBy === "price-desc" ? activeStyle : null}
                            onClick={()=>setSortBy("price-desc")}
                            className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-gray-100"
                        >
                            Price: Highest to Lowest
                        </button>
                        <button 
                            style={sortBy === "name-asc" ? activeStyle : null}
                            onClick={()=>setSortBy("name-asc")}
                            className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-gray-100"
                        >
                            Name: A → Z
                        </button>
                        <button 
                            style={sortBy === "name-desc" ? activeStyle : null}
                            onClick={()=>setSortBy("name-desc")}
                            className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-gray-100"
                        >
                            Name: Z → A
                        </button>
                    </div>
                    
                </div>
            </div>

            <div 
                className= "grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {fertilizersList}
            </div>
        </section>
    )
}