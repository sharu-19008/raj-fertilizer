import { useNavigate, Navigate } from "react-router-dom"
import {motion} from "framer-motion"
import { CheckoutContext } from "../context/CheckoutContext"
import { useContext, useState} from "react"
export default function CollectInfo() {

    const {getCustomerInfo, checkoutItems} = useContext(CheckoutContext)

    const [errors, setErrors] = useState({})
    
    if(checkoutItems.length === 0) {
        return <Navigate to="/shop/fertilizers" replace />
    }

    const navigate = useNavigate()

    function gatherCustomerInfoFunction(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const name = formData.get("name")?.trim()
        const email = formData.get("email")?.trim()
        const phno = formData.get("phno")?.trim()
        const address1 = formData.get("address1")?.trim()
        const address2 = formData.get("address2")?.trim()
        const city = formData.get("city")?.trim()
        const state = formData.get("state")?.trim() // Updated state variable name to stateVal name
        const pincode = formData.get("pincode")?.trim()

        const newErrors = {};

        if(!name || name.length < 3) newErrors.name = "Full Name must be atleast 3 characters and cannot be empty."

        if(!address1) newErrors.address1 = "Address Line 1 cannot be empty."
        if(!address2) newErrors.address2 = "Address Line 2 cannot be empty."
        if(!city) newErrors.city =  "City cannot be empty."
        if(!state) newErrors.state =  "State cannot be empty."

        const phonePattern = /^[0-9]{10}$/;
        if(!phno || !phonePattern.test(phno)) newErrors.phno = "Phone Number must be 10 digits and cannot be empty."

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!email || !emailPattern.test(email)) newErrors.email = "Email is invalid and cannot be empty."

        const pincodePattern = /^[0-9]{6}$/;
        if (!pincode || !pincodePattern.test(pincode)) newErrors.pincode = "Pincode must be 6 digits and cannot be empty."
        
        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
          
        } else {
            const customerDetails = [{
                name: name,
                email: email,
                phno: phno,
                address: {
                    address1:address1,
                    address2:address2,
                    city: city,
                    state: state,
                    country: "India",
                    pincode: pincode,
                },
            }]
            getCustomerInfo(customerDetails);
            navigate("/checkout")
            
        } 
    }

    return(
        <section className="h-auto flex flex-col sm:p-5 md:p-10">
            <form 
                onSubmit={gatherCustomerInfoFunction}
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
                            type="text" id="name" name="name" 
                            className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 sm:text-base focus:border-amber-950 focus:outline-none"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        <label htmlFor="email" className="text-base sm:text-lg">
                            Email ID<span className="text-sm text-red-600">*</span>
                        </label>
                        <input 
                            type="email" id="email" name="email" 
                            className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 sm:text-base focus:border-amber-950 focus:outline-none"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                        <label htmlFor="phno" className="text-base sm:text-lg">
                            Phone Number<span className="text-sm text-red-600">*</span>
                        </label>
                        <input 
                            type="tel" id="phno" name="phno"  inputMode="numeric" minLength={10} maxLength={10}
                            className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 sm:text-base focus:border-amber-950 focus:outline-none"
                        />
                        {errors.phno && <p className="text-red-500 text-sm">{errors.phno}</p>}

                    </fieldset>

                    <fieldset className="border rounded-lg p-4 flex flex-col gap-3 md:w-full">
                        <legend className="font-semibold text-lg sm:text-xl md:text-2xl">Deliver To:</legend>
                        <div className="flex flex-col gap-2 lg:grid grid-cols-2 lg:gap-10">

                            <div>
                                <label htmlFor="address1" className="text-base sm:text-lg">
                                    Address Line 1<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="address1" name="address1" 
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none"
                                />
                                {errors.address1 && <p className="text-red-500 text-sm">{errors.address1}</p>}
                            </div>

                            <div>
                                <label htmlFor="address2" className="text-base sm:text-lg">
                                    Address Line 2<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="address2" name="address2" 
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none"
                                />
                                {errors.address2 && <p className="text-red-500 text-sm">{errors.address2}</p>}
                            </div>

                        </div>

                        <div className="flex flex-col gap-2 lg:grid grid-cols-3 lg:gap-10">
                            <div>
                                <label htmlFor="city" className="text-base sm:text-lg">
                                    City<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="city" name="city" 
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none"    
                                />
                                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                            </div>

                            <div>
                                <label htmlFor="state" className="text-base sm:text-lg">
                                    State<span className="text-sm text-red-600">*</span>
                                </label>
                                <input 
                                    type="text" id="state" name="state" 
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full sm:text-base focus:border-amber-950 focus:outline-none" 
                                />
                                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
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
                                    type="text" id="pincode" name="pincode" inputMode="numeric" minLength={6} maxLength={6}
                                    className="border border-gray-400 rounded-xl bg-gray-50 px-5 py-1 w-full lg:w-107 sm:text-base focus:border-amber-950 focus:outline-none"
                                />
                                {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
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
                        type="submit"
                        className="cursor-pointer bg-amber-300 w-full h-10 text-base font-medium overflow-hidden transition-all duration-200 hover:ring-offset-2 active:ring-2 active:ring-red-800 hover:bg-amber-400 md:w-70 md:text-lg"
                    >
                        Continue to Checkout
                    </motion.button>
                </div>
            </form>
        </section>
    )
}