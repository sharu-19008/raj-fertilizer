export default function Toast({show,message}){
    if(!show) return null;

    return(
        <div className="flex flex-row justify-center">
            <div className=" fixed w-full md:w-90 h-12 text-white bg-lime-950 text-md font-semibold flex flex-row justify-center items-center animate-bounce z-50 rounded-4xl shadow shadow-4xl p-5 text-center">
                {message}
            </div>
        </div>
    )
}