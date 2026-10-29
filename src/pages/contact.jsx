import { FaWhatsapp, FaPhone, FaEnvelope, FaClock, FaArrowRight } from "react-icons/fa"



function Contact() {
    return (
        <>
            {/* Hero Page */}
            <section className="bg-blue-50 px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500 font-madimi">Contact D-Promise</p>

                        <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl font-gabarito">Let's take care <br /> <span className="text-blue-400">of your laundry.</span></h1>

                        <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-600 sm:text-xl font-madimi">
                            Have a question, need a pickup or want to book a service? We're just a message away.
                        </p>
                    </div>
                </div>
            </section>

            {/* contact options */}
            <section className="bg-white px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-6 md:grid-cols-2">
                        {/* WhatsApp */}
                        <a href="https://wa.me/2347012772979?text=Hello%20D-Promise%2C%20I%20like%20to%20make%20a%20an%20enquiry."
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-[2rem]
                    bg-blue-900 p-8 text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-800 sm:p-10"><FaWhatsapp className="text-4xl" />
                            <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em]
                    text-blue-400 font-madimi">Fastest Option</p>

                            <h2 className="mt-3 text-3xl font-semibold font-gabarito">Chat on WhatsApp</h2>

                            <p className="mt-4 max-w-md leading-7 text-blue-400 font-madimi">Message us directly to book a service, ask a question or arrange a pickup.</p>

                            <span className="mt-8 inline-flex items-center gap-2 font-medium font-gabarito">Start a conversation <span className="transition group-hover:translate-x-1"><FaArrowRight /></span></span>
                        </a>


                        {/* Phone */}

                        <a href="tel:+2347012772979" className="group rounded-[2rem] border border-blue-200 bg-blue-50 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-300 sm:p-10">

                            <FaPhone className="text-3xl text-blue-700" />

                            <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-blue-500 font-madimi">Give us a call</p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight font-gabarito">+234 701 277 2979</h2>

                            <p className="mt-4 max-w-md leading-7 text-blue-600 font-madimi">Prefer speaking with someone directly? Give us a call during our business hours.</p>

                            <span className="mt-8 inline-flex items-center gap-2 font-medium text-blue-900 font-gabarito">Call D-Promise <span className="transition group-hover:translate-x-1"><FaArrowRight /></span></span>

                        </a>
                    </div>
                </div>
            </section>
               
               {/* contact infomation */}
            <section className="bg-blue-50 px-6 py-24 sm:py-32">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-16 lg:grid-cols-2">
                        {/* left */}
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500 font-madimi">Get in touch</p>

                            <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl font-gabarito">We're here to help.</h2>

                            <p className="mt-6 max-w-lg text-lg leading-8 text-blue-600 font-madimi">Whether you need laundry services, pickup and delivery, or simply have a question, our team is ready to help.</p>

                        </div>

                        {/* right */}
                        <div className="space-y-8">
                            {/* EMAIL */}

                            <a href="mailto:d-promise24@gmail.com"
                            className="flex gap-5 border-t border-blue-300 pt-6">

                                <FaEnvelope className="mt-1 text-xl text-blue-500"/>

                                <div>
                                    <p className="text-sm font-medium  text-blue-500 font-madimi">Email</p>

                                    <p className="mt-2 text-lg font-medium font-gabarito">
                                        D-Promise24@gmail.com
                                    </p>
                                </div>

                            </a>

                               {/* PHONE */}

                            <a href="tel:+2347012772979" className="flex gap-5 border-t border-blue-300 pt-6">

                                <FaPhone className="mt-1 text-xl text-blue-500" />

                                <div>
                                    <p className="text-sm font-medium text-blue-500 font-madimi">Phone</p>

                                    <p className="mt-2 text-lg font-medium font-gabarito">+2347012772979</p>
                                </div>
                            </a>

                            {/* HOURS */}
                            <div className="flex gap-5 border-t border-blue-300 pt-6">

                                <FaClock className="mt-1 text-xl text-blue-500"/>
                              <div>
                                <p className="text-sm font-medium text-blue-500 font-madimi">
                                    Opening Hours
                                </p>

                                <p className="mt-2 text-lg font-medium font-gabarito">
                                    Monday - Saturday
                                </p>

                                <p className="mt-1 test-blue-600 font-madimi">8:00 AM - 6:00 PM</p>
                              </div>
                                
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="bg-blue-900 px-6 py-24 sm:py-32 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <FaWhatsapp className="mx-auto text-5xl"/>

                    <h2 className="mt-7 text-4xl font-semibold tracking-tight sm:text-5xl font-gabarito">Your laundry is<br />one message away</h2>

                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-400 font-madimi">
                        Tell us what you need and we'll help you get started. No complicated forms. just a simple conversation.
                    </p>

                    <a href="https://wa.me/2347012772979?text=Hello%20D-Promise%2C%20I%20like%20to%20book%20a%20a%20laundry" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-blue-900 transition hover:bg-blue-100" target="_blank"
                    rel="norefferer">
                    <FaWhatsapp className="text-xl"/>
                    Book on WhatsApp
                    </a>
                </div>
            </section>
        </>
    )
}

export default Contact