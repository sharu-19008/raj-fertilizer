import { FaCartShopping } from "react-icons/fa6"
export default function Toast({show,message}){
    if(!show) return null;

    return(
        <div className="flex flex-row justify-center">
            <div className="fixed top-20 w-80 px-5 py-3 md:w-90 h-auto text-md font-semibold flex flex-row justify-center items-center animate-bounce ease-in-out z-50 rounded-4xl shadow shadow-4xl text-center bg-emerald-900/60 text-white backdrop-blur-md">
                <FaCartShopping />&nbsp;{message}
            </div>
        </div>
    )
}


       
      