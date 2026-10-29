import brandLogo from "../assets/images/D-Promise Laundry Services Logo.png"
import { Link } from "react-router-dom"
import { FaWhatsapp, FaPhone, FaEnvelope, FaClock } from "react-icons/fa"

function Footer() {
    return (
        <>
         <footer className="bg-blue-950 px-6 pb-8 pt-16 text-white">
            <div className="mx-auto max-auto">
                 {/* Top */}
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                    {/* BRAND */}
                    <div className="lg:cols-2">
                        <img src={brandLogo} alt="D-Promise Laundry Services Logo" className="h-10"/>

                        <p className="mt-5 max-w-md leading-7 text-blue-400 font-madimi">
                            Professional laundry care made simple. We clean, care for and return your clothes fresh and ready to wear.
                        </p>

                        <a href="https://wa.me/2347012772979"
                        target="_blank"
                        rel="norefferer"
                        className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 font-medium text-blue-900 transition hover:bg-blue-200 font-maven">
                            <FaWhatsapp className="text-xl"/>
                            chat on WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400 font-maven">
                            Quick Links
                        </h3>

                        <div className="mt-5 flex flex-col gap-4">

                            <Link to="/" className="text-blue-300 transition hover:text-white font-madimi">
                            Home</Link>

                            <Link to="/Services" className="text-blue-300 transition 
                            hover:text-white font-madimi">
                            Services    
                            </Link>

                            <Link to="/Contact" className="text-blue-300 transition hover:text-white font-madimi
                            ">
                            Contact
                            </Link>
                        </div>
                    </div>

                    {/* CONTACT */}

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] font-maven">
                            Contact
                        </h3>

                        <div className="mt-5 space-y-4">
                            <a href="tel:+2347012772979"
                            className="flex items-center gap-3 text-blue-300 transition hover:text-white">
                                <FaPhone/>
                                <span className="font-madimi">+234 701 277 2979</span>
                            </a>

                            <a href="malto:nathbenwhite1@gmail.com"
                            className="flex items-center text-blue-300 transition gap-3 hover:text-white">
                                <FaEnvelope/>
                                <span className="font-madimi">D-Promise24@gmail.com</span>
                            </a>

                            <div className="flex items-center gap-3 text-blue-300">
                                <FaClock/>
                                <span className="font-madimi">Mon - Sat, 8am - 6pm</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DIVIDER */}
                <div className="my-12 border-t border-blue-800">

                    {/* BOTTOM */}
                    <div className="flex flex-col gap-4 text-sm text-stone-500 sm-flex-row sm:items-center sm:justify-between">
                     <p>
                        @copy 2026 D-Promise. All rights reserved
                     </p>

                     <p>
                        Clean clothes, Less stress. 
                     </p>

                    </div>
                </div>
            </div>
         </footer>
        </>

    )
}

export default Footer