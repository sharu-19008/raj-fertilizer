import Header from "./Header"
import Footer from "./Footer"
import {Outlet, useLocation} from "react-router-dom"
import { useEffect } from "react"

export default function Layout () {
    const location = useLocation()

     useEffect(()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // or 'auto'
    } );
  },[location.pathname])

    return(
    <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-16 bg-white">
            <Outlet />
        </main>
        <Footer />
    </div>
    )
}