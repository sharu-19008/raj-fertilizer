import { useNavigate, Navigate } from "react-router-dom"
import {motion} from "framer-motion"
import { CheckoutContext } from "../context/CheckoutContext"
import { useContext } from "react"
export default function CollectInfo() {

    const {getCustomerInfo, checkoutItems} = useContext(CheckoutContext)
    
    if(checkoutItems.length === 0) {
        return <Navigate to="/shop/fertilizers" replace />
    }

    const navigate = useNavigate()
    function gatherCustomerInfoFunction(formData) {

        if(!formData) {
            alert("Please fill all the required fields!!!")
        }
        else{
            const customerDetails = [{
                name: formData.get("name").trim(),
                email: formData.get("email").trim(),
                phno: formData.get("phno").trim(),
                address: {
                    address1:formData.get("address1").trim(),
                    address2:formData.get("address2").trim(),
                    city: formData.get("city").trim(),
                    state: formData.get("state").trim(),
                    country: "India",
                    pincode: formData.get("pincode").trim(),
                },
            }]
            getCustomerInfo(customerDetails);
            navigate("/checkout")
        }
        
    }

    return(
        <section className="h-auto flex flex-col sm:p-5 md:p-10">
            <form 
                action={gatherCustomerInfoFunction}
                className="flex flex-col gap-8 h-auto p-5 text-sm"
            >
            <p className="italic text-sm"><span className="text-sm text-red-600">*</span> Fields are mandatory.</p>
                <div className="flex flex-col gap-8">
                    <fieldset className="border rounded-lg p-4 flex flex-col md:w-full">
                        <legend className="font-semibold text-lg sm:text-xl md:text-2xl"> Contact Information </legend>
                        <label htmlFor="name" className="text-base sm:text-lg">
                            Full Name<span className="text-sm text-red-600">*</span>
                        </label>
                        <input 
                            type="text" id="name" name="name" required
                            className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 sm:text-base focus:border-amber-950 focus:outline-none"
                        />
                        <label htmlFor="email" className="text-base sm:text-lg">
                            Email ID<span className="text-sm text-red-600">*</span>
                        </label>
                        <input 
                            type="email" id="email" name="email" required 
                            className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 sm:text-base focus:border-amber-950 focus:outline-none"
                        />
                        <label htmlFor="phno" className="text-base sm:text-lg">
                            Phone Number<span className="text-sm text-red-600">*</span>
                        </label>
                        <input 
                            type="tel" id="phno" name="phno" minLength={10} maxLength={10} required inputMode="numeric" pattern="[0-9]{10}"
                            className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 sm:text-base focus:border-amber-950 focus:outline-none"
                        />
                    </fieldset>

                    <fieldset className="border rounded-lg p-4 flex flex-col gap-3 md:w-full">
                        <legend className="font-semibold text-lg sm:text-xl md:text-2xl">Deliver To:</legend>
                        <div className="flex flex-col gap-2 lg:grid grid-cols-2 lg:gap-10">
                            <div>
                                <label htmlFor="address1" className="text-base sm:text-lg">
                                    Address Line 1<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="address1" name="address1" required
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="address2" className="text-base sm:text-lg">
                                    Address Line 2<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="address2" name="address2" required
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 lg:grid grid-cols-3 lg:gap-10">
                            <div>
                                <label htmlFor="city" className="text-base sm:text-lg">
                                    City<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="city" name="city" required
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none"    
                                />
                            </div>
                            <div>
                                <label htmlFor="state" className="text-base sm:text-lg">
                                    State<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="state" name="state" required
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none" 
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="text-base sm:text-lg">
                                    Country
                                </label>
                                <input 
                                    type="text" id="country" name="country" defaultValue="India" disabled 
                                    className="border border-gray-400 rounded-xl bg-gray-300 text-gray-700 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 lg:grid grid-cols-3 lg:gap-10">
                            <div className="">
                                <label htmlFor="pincode" className="text-base sm:text-lg">
                                    Pincode<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="pincode" name="pincode" minLength={6} maxLength={6} required inputMode="numeric" pattern="\d*" 
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full lg:w-107 sm:text-base focus:border-amber-950 focus:outline-none"
                                />
                            </div>
                        </div>
                    </fieldset>
                </div>
                <div>
                    <motion.button 
                        whileHover={{
                            scale:1.1,
                            textShadow: "0px 0px 8px rgb(255,255,255)",
                            boxShadow: "0px 0px 8px rgb(0, 128, 0) ",
                        }}
                        className="cursor-pointer bg-amber-300 w-full h-10 text-base font-medium hover:bg-amber-400 md:w-70 md:text-lg"
                    >
                        Continue to Checkout
                    </motion.button>
                </div>
            </form>
        </section>
    )
}