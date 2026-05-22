export default function Contact() {
    return(
        <section className="flex flex-col gap-10 p-5 md:p-10">
            <div id="contact" className="flex flex-col gap-2 ">
                <p className="w-full h-8 bg-red-400 text-white font-bold flex justify-center items-center">RAJ FERTILIZER</p>
                <div id="address" className="">
                    <p>📍Address: </p>
                    <p>XXXXXX</p>
                    <p>XXXXXXXXXXXXX</p>
                    <p>XXXXXXXXX</p>
                </div>
                <p>📞Call: <span className="flex flex-col">+91-XXXXXXXXXX,</span> +91-XXXXXXXXXX</p>
                <p>✉️Email: demohelp@rajfertilizer.com</p>

            </div>
            <p>📍 Find us here! Open Mon-Sat: 8AM-8PM </p>
            <div className="flex flex-col gap-5 md:items-center">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.2256423229514!2d82.8758216!3d20.2079425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a25ab005c0f91ef%3A0x405c4113e0328ad1!2sRAJ%20FERTILIZER!5e0!3m2!1sen!2sin!4v1766466029529!5m2!1sen!2sin" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Raj Fertilizer Shop Location"
                    className=" w-full h-100 md:w-190 md:h-100 lg:w-250 xl:w-300 xl:h-120"
                >
                </iframe>
            </div>

        </section>
    )
}