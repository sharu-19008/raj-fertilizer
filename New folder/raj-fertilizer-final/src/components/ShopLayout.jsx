import {NavLink, Outlet} from "react-router-dom"
import {motion} from "framer-motion" 
export default function Shop() {

    // console.log("PRODUCTS ++++ = ",products)

    const activeStyle = {
        backgroundColor: "darkgreen",
        color: "white"
    }

    return (
        <>
            <section className="h-auto w-full md:h-auto">
                <div className=" w-full flex flex-col items-center">
                    <div className="flex flex-row gap-5 py-5 px-4 justify-start font-semibold w-full overflow-x-scroll md:justify-center md:overflow-hidden lg:gap-15 lg:text-lg">
                    
                        <NavLink 
                            to="fertilizers" 
                            relative="path" 
                            className="p-2 rounded-xl bg-yellow-800 text-white  text-center min-w-40 hover:bg-yellow-900"
                            style = { ({isActive}) => isActive ? activeStyle : null}>
                                Fertilizers
                        </NavLink>

                        <NavLink 
                            to="pesticides" 
                            className="p-2 rounded-xl bg-yellow-800 text-white text-center min-w-40 hover:bg-yellow-900"
                            style = { ({isActive}) => isActive ? activeStyle : null} >
                                Pesticides
                        </NavLink>

                        <NavLink 
                            to="seeds" 
                            className="p-2 rounded-xl bg-yellow-800 text-white text-center min-w-40 hover:bg-yellow-900"
                            style = { ({isActive}) => isActive ? activeStyle : null } >
                                Seeds
                        </NavLink>
                    </div>
                </div>
                <Outlet />
            </section>
        </>
    )
}