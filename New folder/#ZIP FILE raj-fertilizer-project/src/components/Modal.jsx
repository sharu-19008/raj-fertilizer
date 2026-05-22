export default function Modal({open, children, close}) {
    if(!open) return null;
    
    return (
        <>
            <div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={close}
            >
            </div>

            <div className="fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-100 max-w-[90vw] h-auto bg-white rounded-lg shadow-xl z-50">
                <div className="p-5">
                    {children}
                </div>
                <div className="px-6 py-3 flex justify-end">
                    <button 
                        onClick={close}
                        className="px-4 py-2 w-20 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
                    >
                        OK
                    </button>
                </div>
            </div>
        </>
    )
    
}