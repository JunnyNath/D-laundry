import { FaWhatsapp, FaCheck } from "react-icons/fa";
import foldImg from "../assets/images/sarah-brown-oa7pqZmmhuA-unsplash.jpg"
import ironImg from "../assets/images/pexels-karola-g-5202923.jpg"
import dryImg from "../assets/images/pexels-ron-lach-10565610.jpg"
import pickImg from "../assets/images/volunteer-selecting-organizing-clothes-donations-charity.jpg"



// creating cards for services 
// creating an object in arrays schema data
const services = [
    {
        number: "01",
        title: "Washing & Folding",
        description: "A complete wash and fold service for your everyday clothes. We carefully clean, dry and neatly fold your garments so they are ready to wear.",
        image: foldImg,
        features: [
            "Everyday clothes",
            "Careful washing",
            "Professional drying",
            "Neat folding",
        ],
    },

    {
        number: "02",
        title: "Ironing",
        description: "Get perfectly pressed clothes without spending your valuable time ironing. We give your garments a crisp, clean finish.",
        image: ironImg,
        features: [
            "Shirts & trousers",
            "Dresses",
            "Professional pressing",
            "Neat finishing",
        ],

    },

    {
        number: "03",
        title: "Dry Cleaning",
        description: "Special care for garments that require a more delicate cleaning process. We handle premium and delicate clothing with extra attention.",
        image: dryImg,
        features: [
            "Delicate garments",
            "Suits & jackets",
            "Special fabric care",
            "Premium finishing",
        ],
    },

    {
        number: "04",
        title: "Pickup & Delivery",
        description: "Dont want to leave home? We'll collect your clothes, take care of the laundry and return everything fresh and ready to wear.",
        image: pickImg,
        features: [
            "Convenient pickup",
            "Safe handling",
            "Professional cleaning",
            "Doorstep delivery",
        ],
    },
]


function Services() {
    return (
        <>
            <main>
                {/* PAGE HERO */}
                <section className="bg-blue-100 px-6 py-24 sm:py-32">
                    <div className="mx-auto max-w-6xl">
                        <div className="max-w-2xl">
                            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500 font-madimi">
                                Our Services
                            </p>

                            <h1 className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl font-maven">Laundry care, <br /> <span className="text-blue-400">done properly</span></h1>

                            <p className="mt-7 max-w-2xl text-lg leading-8 text-blue-600 sm:text-xl font-madimi">From everyday washing to delicate garment care, D-Promise gives your clothes the attention they deserve.</p>
                        </div>
                    </div>
                </section>

                {/* SERVICES */}
                <section className="bg-white px-6 py-24 sm:py-32">
                    <div className="mx-auto max-w-6xl">
                        <div className="space-y-24">
                            {/* Maping al our data */}
                            {services.map((service, index) => (
                                <article key={service.number}className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                                    {/* Adding our image data and the style */}

                                    {/* IMAGE */}
                                 <div className={`overflow-hidden rounded-[2rem] ${index % 2 === 1 ? "lg:order-2" : ""}`}>

                                    <img src={service.image} alt={service.title} className="h-[420px] w-full object-cover transition duration-700 hover:scale-105 sm:h-[500px]" />
                                 </div>

                                 {/* CONTENT */}
                                 <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                                    <span className="text-sm font-medium text-blue-400">{service.number}</span>

                                    <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl font-maven">{service.title}</h2>

                                    <p className="mt-6 text-lg leading-8 text-blue-600 font-madimi">{service.description}</p>
                                 

                                 {/* FEATURES */}
                                 <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                    {service.features.map((feature) => (
                                        <div 
                                        key={feature}
                                        className="flex items-center gap-3">
                                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100">
                                                <FaCheck className="text-xs text-blue-700"/>
                                                </span>

                                                <span className="text-sm font-medium text-blue-700 font-maven">{feature}</span>
                                        </div>

                                    ))}
                                 </div>

                                 {/* WHATSAPP BUTTON */}
                                 <a href="https://wa.me/2347012772979" target="_blank"
                                 rel="norefferer"
                                 className="mt-9 inline-flex items-center gap-3
                                 rounded-full bg-blue-900 px-7 py-4 font-medium text-white transition hover:bg-blue-700 "><FaWhatsapp className="text-xl"/>Book this service
                                 </a>

                                 </div>

                                </article>
                            ))}
                        </div>
                    </div>
                </section>


                {/* BOTTOM CTA */}
                <section className="bg-blue-100 px-6 py-24 sm:py-32">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500 font-madimi">Need help choosing</p>

                        <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl font-maven">Not sure which service <br /> is right for you?</h2>

                        <p className="mt-6 mx-auto max-w-xl text-lg leading-8 text-blue-600 font-madimi ">send us a message on WhatsApp and tell us what you need. We'll help choose the right service</p>

                        <a href="https://wa.me/2347012772979?text=Hello%20D-Promise%2C%20I%20need%20help%20choosing%20a%20laundry%20service"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex items-center gap-3 rounded-full bg-blue-900 px-8 py-4 font-medium text-white transition hover:bg-blue-700"><FaWhatsapp className="text-xl"/>
                        Talk to us</a>
                    </div>
                </section>


            </main>
        </>
    )
}

export default Services