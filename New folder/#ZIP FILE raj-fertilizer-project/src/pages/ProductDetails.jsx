import { useContext,useState } from "react"
import { useParams, useLocation } from "react-router-dom"
import { ProductsContext } from "../context/ProductsContext"
import { CartContext } from "../context/CartContext"
import { CheckoutContext } from "../context/CheckoutContext"
import Toast from "../components/Toast";
import Modal from "../components/Modal";
import {motion} from "framer-motion"
export default function ProductDetails() {

    const products = useContext(ProductsContext)
    const { checkout } = useContext(CheckoutContext)
    const { id } = useParams()
    const location = useLocation()

    const product = products.find((product) => product.id === Number(id))

    const { addToCart } = useContext(CartContext)

    // State Variable for TOAST
    const [show, setShow] = useState(false)

    // State Variable for MODAL
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleAddToCart(){
        addToCart(product)
        setShow(true)

        setTimeout(()=>setShow(false),3000)
    }
    
    
    if (!product) return <h1>Sorry, the Product you are looking for is not available!!</h1>
    
    return (
        <section id="product-details">
            <Modal open={isModalOpen} close={()=>setIsModalOpen(false)}>
            <div className="flex flex-col gap-3 text-base sm:text-xl">
                    <p>Please contact <strong>XYZ Fertilizers</strong> to buy this product.</p>
                    <div>
                    <p className="font-semibold">Contact No:</p>
                        <div>
                            <p>+91-XXXXXXXXXX</p>
                            <p>+91-XXXXXXXXXX</p>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Address:</p>
                        <div>
                            <p>XXXXXX</p>
                            <p>XXXXXXXXXXXXX</p>
                            <p>XXXXXXXXX</p>
                        </div>
                    </div>
                    <p className="italic text-sm"><strong>Note:</strong> If you choose to preorder, please collect the product within 5 hours. If not, then your order will be cancelled!</p>
                </div>
            </Modal>
        <Toast show={show} message={`${product.name} Added to Cart`} />
            
            <div className="flex flex-col p-7 gap-10 md:flex-row md:gap-10 lg:gap-25 lg:px-20">
                <div className=" flex flex-col items-center gap-5 ">
                    <div className="w-full sm:w-full md:w-90 md:h-90 lg:w-120 lg:h-120">
                        <img 
                            src={product.img} 
                            alt={`Image of ${product.name}`} 
                            className="w-auto h-auto bg-white md:h-90 md:w-90 lg:w-120 lg:h-120 border-b md:border-b-0" 
                        />
                    </div>
                    <motion.button 
                        whileHover={{
                            scale:1.1,
                        }}
                        className="bg-yellow-300 w-full h-10 font-bold cursor-pointer hover:bg-yellow-400 hover:shadow-xl/20"
                        onClick={()=>setIsModalOpen(true)}
                    >
                            Call to Preorder
                    </motion.button>
                    <div className="w-full flex flex-row justify-around gap-5 ">
                        {!location.pathname.includes('fertilizers') && 
                            <>
                            <motion.button 
                                whileHover={{
                                    scale:1.1,
                                }}
                                className="bg-yellow-300 w-full h-10 font-bold cursor-pointer hover:bg-yellow-400 hover:shadow-xl/20"
                                onClick={()=>{
                                        addToCart(product)
                                        checkout(product)
                                    }}>
                                    Buy Now
                            </motion.button>
                            <motion.button 
                                whileHover={{
                                    scale:1.1,
                                }}
                                className="bg-yellow-300 w-full h-10 font-bold cursor-pointer hover:bg-yellow-400 hover:shadow-xl/20" 
                                onClick={handleAddToCart}>
                                    Add to Cart
                            </motion.button>
                            </>
                        }  
                    </div>
                </div>
                <div className="text-xl flex flex-col gap-5">
                    <h1 className="font-extrabold text-3xl">
                        {product.name} ({product.type.slice(0, -1)})
                    </h1>
                    <p className="font-semibold text-2xl md:text-4xl">
                        &#8377;{product.price}/-
                    </p>
                    <p 
                        className="bg-black text-white w-32 h-8 flex flex-row justify-center items-center rounded-xl text-center font-semibold text-sm md:w-38 md:h-10 md:text-lg">
                        {product.availability}
                    </p>
                    <hr className="border border-gray-500" />
                    <p className="font-bold text-lg sm:text-2xl">
                        About this item
                    </p>
                    <p className="text-base md:text-lg">
                        {product.desc.brief}
                    </p>
                    <hr className="border border-gray-500" />
                    <p className="font-bold text-lg sm:text-2xl">
                        {location.pathname.includes('seeds') ? "How to Grow:" : "How to Use:"}
                    </p>
                    <ol className="list-decimal pl-5 text-base md:text-lg">
                        {product.desc.how_to_use.map((instruction, index) => <li key={index}>{instruction}</li>)}
                    </ol>
                    {location.pathname.includes('fertilizers') ?
                        <p className="italic text-base md:text-lg">
                            <strong>Note:</strong> This product is available to buy only offline due to govertment restrictions. Contact our shop to preorder and collect within 5 hours. If not collected, then your order will be cancelled. Bring <strong>Aadhar Card</strong> for verification before purchase.
                        </p>
                        : <p className="italic text-base md:text-lg">
                            <strong>Note:</strong> This product is available to buy both online and offline. Contact our shop if you want to preorder and collect within 5 hours. If not collected, then your order will be cancelled.
                        </p>
                    }
                </div>
            </div>
        </section>
    )
}