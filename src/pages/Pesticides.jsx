import {useContext,useState} from "react"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import {ProductsContext} from "../context/ProductsContext" 
import { SortContext } from "../context/SortContext"
import { CartContext } from "../context/CartContext"
import { FaCartShopping } from "react-icons/fa6"
import Toast from "../components/Toast";
export default function Pesticides () {

    const products = useContext(ProductsContext)
    
    const pesticides = products.filter((product)=>product.type === "Pesticides")

    const {sortBy, setSortBy} = useContext(SortContext)
    const { addToCart } = useContext(CartContext)
        
    // State Variable for TOAST
    const [show, setShow] = useState(false)

    function handleAddToCart(product){
        addToCart(product)
        setShow(true)

        setTimeout(()=>setShow(false),1000)
    }

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
                key={pesticide.id}
                className="h-80 flex flex-col justify-between gap-5 px-5 sm:px-0 border border-gray-300 bg-white shadow-xl/30 sm:w-60 sm:h-140" >
                <div className="flex flex-row sm:flex-col sm:justify-normal">
                    
                    <Link to={`./${pesticide.id}`}>
                        <img 
                            className="w-full pt-3 h-50 sm:h-70 sm:p-4 " 
                            src={pesticide.img} 
                            alt={`Image of ${pesticide.name}`} 
                            loading="lazy" 
                        />
                    </Link>
                    <hr className="sm:w-full" />
                    <div className="flex flex-col justify-start items-start gap-2 px-3 mt-5 sm:mt-2 flex-1">
                        <Link to={`./${pesticide.id}`}>
                            <h1 className="font-semibold text-xl hover:text-amber-700">
                                {pesticide.name}
                            </h1>
                        </Link>
                        <p className="font-semibold text-lg">
                            &#8377;{pesticide.price}
                        </p>
                        <p className="font-light">
                            Availability -
                        </p>
                        <p className="bg-black text-white w-26 h-auto flex justify-center items-center sm:w-32  p-1 rounded-xl text-center font-semibold text-xs sm:text-sm">
                            {pesticide.availability}
                        </p>
                    </div>
                </div>
                <div className=" flex flex-col gap-3 sm:px-5">
                    <Link 
                        to={`./${pesticide.id}`} >
                        <button className="bg-yellow-300 font-inter font-semibold flex flex-row justify-center items-center w-full h-8 cursor-pointer rounded-2xl mt-auto hover:bg-yellow-400 overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800">
                        Buy Now

                        </button>
                       
                    </Link>
                    <button 
                        onClick={()=>handleAddToCart(pesticide)}
                        className="bg-btn text-white font-inter font-semibold flex flex-row justify-center items-center w-full h-8 cursor-pointer rounded-2xl mt-auto mb-5 hover:bg-orange-500 overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800">
                            <FaCartShopping />&nbsp;Add to Cart
                    </button>
                </div>
            </motion.div>
        )
    })

    return(
        <section className="py-5 flex flex-col items-center gap-15">
            <h1 className="text-4xl font-semibold text-center">
                Shop for Pesticides
            </h1>
            <Toast show={show} message={`Added to Cart`} />
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

            <div className= "grid grid-cols-1 px-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
                {pesticidesList}
            </div>
        </section>
    )
}