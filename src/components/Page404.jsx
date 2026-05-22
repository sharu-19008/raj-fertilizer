import {Link} from "react-router-dom"

export default function Page404() {
    return(
        <div className="fixed inset-0 top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
            <div className=" w-full h-auto p-8 flex flex-col gap-8 sm:w-100 md:w-150 lg:w-200 lg:gap-20 ">
                <h1 className="text-2xl font-bold text-justify sm:text-3xl md:text-4xl lg:text-5xl">Sorry. The page you are looking for doesn't exist!</h1>
                <Link to="/" className="w-full font-semibold text-xl bg-black text-white text-center rounded-md h-15 flex justify-center items-center hover:text-gray-200">Return to Home</Link>
            </div>
        </div>
    )
}