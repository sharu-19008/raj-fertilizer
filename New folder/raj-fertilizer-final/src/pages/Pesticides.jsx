import {useContext} from "react"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import {ProductsContext} from "../context/ProductsContext" 
import { SortContext } from "../context/SortContext"

export default function Pesticides () {

    const products = useContext(ProductsContext)
    
    const pesticides = products.filter((product)=>product.type === "Pesticides")

    const {sortBy, setSortBy} = useContext(SortContext)

    const activeStyle = {
        backgroundColor: "#c0f2ff",
    }

    let sortedPesticidesList;

    if(sortBy) {
        sortedPesticidesList = [...pesticides].sort((a,b)=>{
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
        sortedPesticidesList = pesticides
    }

    const pesticidesList = sortedPesticidesList.map((pesticide)=>{
        return (
            <motion.div 
                whileHover={{
                    scale:1.1,
                }}
                className="w-60 h-130 flex flex-col border border-gray-300 bg-white shadow-xl/30" key={pesticide.id}>
                <Link to={`./${pesticide.id}`}  >
                    <motion.img 
                        whileHover={{
                            scale:1.5,
                        }}
                        className="w-full h-60 mb-2" 
                        src={pesticide.img} 
                        alt={`Image of ${pesticide.name}`} 
                    />
                </Link>
                <hr />
                <div className="flex flex-col gap-2 px-3 mt-2 flex-1 ">
                    <Link to={`./${pesticide.id}`}>
                        <h1 className="font-bold text-xl hover:text-amber-700">
                            {pesticide.name}
                        </h1>
                    </Link>
                    <p className="font-semibold text-lg">
                        &#8377;{pesticide.price}
                    </p>
                    <p className="font-light">
                        Availability -
                    </p>
                    <p className="bg-black text-white w-32 h-8 flex flex-row justify-center items-center rounded-xl text-center font-semibold text-sm">
                        {pesticide.availability}
                    </p>
                    <Link 
                        to={`./${pesticide.id}`} 
                        className="bg-yellow-300 font-inter font-semibold flex flex-row justify-center items-center w-full h-8 cursor-pointer rounded-2xl mt-auto mb-5 hover:bg-yellow-400">
                            Buy Now
                    </Link>
                </div>
            </motion.div>
        )
    })

    return(
        <section className="py-5 flex flex-col items-center gap-15">
            <h1 className="text-4xl font-semibold text-center">
                Shop for Pesticides
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
                            className="px-3 py-1 border rounded-lg cursor-pointer hover:bg-gray-100"
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

            <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {pesticidesList}
            </div>
        </section>
    )
}

// grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
// flex flex-col justify-center gap-12 items-center md:flex-row md:justify-start md:flex-wrap md:px-15 md:w-full