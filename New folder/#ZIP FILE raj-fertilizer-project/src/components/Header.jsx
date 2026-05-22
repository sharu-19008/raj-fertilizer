import { useState, useContext } from "react"
import { NavLink, Link, useLocation } from "react-router-dom"
import { FaCartShopping } from "react-icons/fa6"
import logo from "../assets/images/logo.png"
import { CartContext } from "../context/CartContext"
import { BiUnderline } from "react-icons/bi"

export default function Header() {

    const location =useLocation();

    const {cartItems} = useContext(CartContext)

    // Toggle State for Mobile Navigation
    const [toggle, setToggle] = useState(false)

    // Fuctions for toggling/hiding mobile navigation
    function handleToggle() {
        setToggle((prevValue) => !prevValue)
    }
    function handleCloseNav() {
        setToggle(false)
    }

    const activeStyle = {
        border: "0px solid white",
        borderRadius: "5px",
        padding: "5px 10px",
        backgroundColor: "#355E3B"
    }

    return (
        <header className="relative">
            <nav className="navbar fixed top-0 left-0 w-full flex flex-row justify-between items-center bg-lime-950 px-5 py-2 z-50 shadow-md">
                <Link to="/">
                    <img src={logo} alt="logo" width="150px" />
                </Link>
                <div className="h-auto flex flex-col gap-1.5 cursor-pointer md:hidden" onClick={handleToggle} >
                    <div 
                        className={`w-6 h-0.5 bg-white rounded-md transition-all duration-300 ease-in-out ${toggle ? "rotate-45 translate-y-2" : ""}`}>
                    </div>
                    <div 
                        className={`w-6 h-0.5 bg-white rounded-md transition-all duration-300 ease-in-out ${toggle ? "opacity-0" : ""}`}></div>
                    <div 
                        className={`w-6 h-0.5 bg-white rounded-md transition-all duration-300 ease-in-out ${toggle ? "-rotate-45 -translate-y-2" : ""}`}>    
                    </div>
                </div>


                {/* Mobile Nav */}

                {toggle && (
                    <div className="absolute top-full left-0 w-1/2 h-screen bg-green-950 border-gray-700 flex flex-row  md:hidden z-10">
                        <ul 
                            className="nav-links text-white text-md flex flex-col justify-start w-full p-4 font-semibold gap-6" 
                            onClick={handleCloseNav}
                        >
                            <li>
                                <NavLink to="/" style={({ isActive }) => isActive ? activeStyle : null}>
                                    Home
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="about" style={({ isActive }) => isActive ? activeStyle : null}>
                                    About
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="shop/fertilizers" style={({ isActive }) => isActive || location.pathname.startsWith("/shop") ? activeStyle : null} >
                                    Shop
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="contact" style={({ isActive }) => isActive ? activeStyle : null}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="cart" style={({ isActive }) => isActive ? activeStyle : null}>
                                    Shopping Cart <span className="bg-red-500 rounded-4xl px-1 text-sm">{cartItems.length}</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}

                {/* Desktop Nav */}

                <ul className="nav-links hidden md:flex gap-6 md:text-white text-xl font-semibold">
                    <li>
                        <NavLink to="/" 
                            style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline hover:underline-offset-1">
                                Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="about" 
                            style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline hover:underline-offset-1">
                                About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="shop/fertilizers" 
                            style={({ isActive }) => isActive || location.pathname.startsWith("/shop")  ? activeStyle : null} 
                            className="hover:underline hover:underline-offset-1">
                                Shop
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="contact"
                            style={({ isActive }) => isActive ? activeStyle : null} className="hover:underline hover:underline-offset-1">
                                Contact
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="cart"
                            style={({ isActive }) => isActive ? activeStyle : null}>
                                <FaCartShopping size={30} className="inline-block" />
                                <span className="relative right-2 bg-red-500 rounded-4xl px-1 text-sm">{cartItems.length}</span>
                        </NavLink>
                    </li>
                </ul>

            </nav>
        </header>
    )
}