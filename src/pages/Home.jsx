import ServiceCard from "../components/ServiceCard"
import washMachine from "../assets/images/Fresh Laundry in Blue Tones.png"
import washImage from "../assets/images/Dryclean and Laundry tips _ DrClothes.jfif"
import ironImage from "../assets/images/BLACK+DECKER Easy Steam Compact Iron – Lightweight, Nonstick & Auto Shutoff.jfif"
import dryCleanImage from "../assets/images/Dry cleaning near me.jfif"
import delivery from "../assets/images/download (12).jfif"
import { FaWhatsapp } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"

//  Servicescard data for our Services SECTION 
const services = [
    {
        image: washImage,
        title: "Washing and Folding",
        description: "Professional washing and careful folding for your everyday clothes."
    },

    {
        image: ironImage,
        title: "Ironing",
        description: "Crisp, neatly pressed clothes ready for work, events and everyday life."
    },

    {
        image: dryCleanImage,
        title: "Dry Cleaning",
        description: "Special care for delicate and premium garments that need extra attention."
    },

    {
        image: delivery,
        title: "Pickup & Delivery",
        description: "We collect your clothes and return them fresh, clean and ready to wear."
    }
]


// steps data for HowItWorks SECTION
const steps = [
    {
        number: "01",
        title: "Book",
        description: "Tell us what you need through WhatsApp or our contact Page.",
    },

    {
        number: "02",
        title: "We Care",
        description: "We carefully wash, dry, iron and prepare your clothes."
    },

    {
        number: "03",
        title: "We Deliver",
        description: "Your clothes come back fresh, clean and ready to wear.",
    },
]

// whyChooseUs data for WhyChooseUs SECTION
const benefits = [
    {
        number: "01",
        title: "Professional Care",
        description: "Every garment is handled with attention to its fabric, color and condition."
    },

    {
        number: "02",
        title: "Quality Products",
        description: "We use quality laundry products designed to leave your clothes clean and fresh."
    },

    {
        number: "03",
        title: "Easy & convenient",
        description: "Book through WhatsApp and let us take care of the laundry while you focus on your day."
    },

    {
        number: "04",
        title: "Reliable Service",
        description: " We treat every order with care and aim to return your clothes fresh, neat and ready to wear.",
    },

]


function Home() {
    return (
        <>
            <main className="text-blue-900">
                <div className="relative">
                    <img src={washMachine} alt="Wash Machine" className="hero-image w-full h-115 sm:h-200 brightness-70" />
                </div>
                <section className="px-8 py-3 sm:py-2 absolute top-33 sm:top-55 sm:left-20 ">
                    <div className="mx-auto max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16 ">

                        <p className="mt-5 text-xs sm:text-sm font-semibold  uppercase tracking-[0.2em] text-white font-madimi">Professional Laundry Care</p>
                        <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl font-maven">Fresh Clothes.
                            <br />
                            <span className="text-blue-400 font-semibold">More time for you</span>
                        </h1>
                        <p className="mt-3 sm:mt-8 max-w-xl text-md sm:text-lg leading-6 font-semibold text-white font-maven">Professional laundry care that takes the work off your hands. We wash, care for and return your clothes fresh and ready to wear. </p>

                        <div className="mt-8 sm:mt-12 flex flex-col gap-3 sm:gap-4 sm:flex-row">

                            <a href="/Services" className="rounded-full bg-blue-900 px-7 py-4 text-center font-medium text-white transition
                            text-[15px] sm:text-[17px] hover:bg-blue-700 font-maven">
                                Explore Services
                            </a>

                            <a href="https://wa.me/2347012772979" target="blank" rel="noreferrer" className="rounded-full border border-blue-300 
                            text-[15px] sm:text-[17px] bg-white px-7 py-4 text-center font-medium text-blue-900 transition hover:bg-blue-100 font-maven">
                                Book a service</a>
                        </div>

                    </div>
                </section>
                {/* SERVICES */}
                <section className="bg-white px-6 py-20 sm:py-32">
                    <div className="mx-auto max-w-6xl">
                        {/* Section Heading */}
                        <div className="max-w-2xl">
                            <p className=" text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-blue-500 font-madimi">Our Services</p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl font-maven">
                                Everything your clothes need.
                            </h2>

                            <p className="mt-5 text-md sm:text-lg leading-8 text-blue-600 font-maven">
                                From everyday washing to delicate garment care, we make laundry simple.
                            </p>

                        </div>

                        {/* Service card */}
                        <div className="mt-12 grid gap-6 md:grid-cols-2">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.title}
                                    image={service.image}
                                    title={service.title}
                                    description={service.description}
                                />
                            ))}
                        </div>
                        {/* <div className="mt-12 grid gap-6 md:grid-cols-2">

                          <ServiceCard
                          image={washImage}
                          title="Washing and folding"
                          description="Professional washing and careful folding for your everyday clothes." />

                          <ServiceCard
                          image={ironImage}
                          title="Ironing"
                          description="Crisp, neatly pressed clothes ready for work, events and everyday life."/>

                          <ServiceCard
                          image={dryCleanImage}
                          title="Dry Cleaning"
                          description="Special care for delicate and premium garments that need extra attention"/>

                          <ServiceCard
                          image={delivery}
                          title="Pickup & Delivery"
                          description="We collect your clothes and return them fresh, clean and ready to wear."/>


                        </div> */}


                    </div>
                </section>

                {/* How it works  */}
                <section className="bg-blue-900 px-6 py-24 text-white sm:py-32">
                    <div className="mx-auto max-w-6xl">
                        <div className="max-w-2xl">
                            <p className=" text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-blue-400 font-madimi">
                                How It Works
                            </p>

                            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl font-maven">
                                Laundry day, made simple.
                            </h2>

                            <p className="mt-5 text-md sm:text-lg leading-8 text-blue-400 font-maven">
                                From your first message to the moment your clothes return fresh, we keep everything simple.
                            </p>
                        </div>

                        {/* Using .MAP method for the how it works card array */}
                        {/* This is how we use .Map in an Array */}
                        <div className="mt-16 grid gap-12 md:grid-cols-3">

                            {steps.map((step) => (
                              <div key={step.number}>

                                <span className="text-sm font-medium text-blue-500 font-maven">{step.number}</span>
{/* text-[20px] sm:text-2xl */}
                                <h3 className="mt-5 text-[20px] sm:text-2xl font-semibold font-maven">{step.title}</h3>

                                <p className="mt-4 max-w-sm leading-7 text-blue-400 font-maven">{step.description}</p>

                              </div>
                            ))}

                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE US SECTION */}
                <section className="bg-blue-50 px-6 py-24 sm:py-32">
                    <div className="mx-auto max-w-6xl">
                        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr">
                            {/* Left side */}
                            <div>
                                <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-blue-500 font-madimi">Why choose D-Promise</p>

                                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl font-maven">More than clean.
                                    <br />
                                    <span className="text-blue-400">it's cared for.</span>
                                </h2>

                                <p className="mt-6 max-w-md text-md
                                sm:text-lg leading-8 text-blue-600 font-maven">
                                    Your clothes deserve more than a quick wash. We combine professional care with a convenient experience.  
                                </p>
                                
                            </div>

                            {/* Right side */}

                            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">

                                {benefits.map((benefit) => (
                                    <div key={benefit.number}>

                                        <span className="text-sm font-medium text-blue-400 font-maven">{benefit.number}</span>

                                        <h3 className="mt-4 text-xl font-semibold font-maven">{benefit.title}</h3>

                                        <p className="mt-3 leading-7 text-blue-600 font-maven">{benefit.description}</p>


                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-24 sm:py-32">
                    <div className="mx-auto max-w-6xl">
                        <div className="overflow-hidden rounded-[2rem] bg-blue-900 px-7 py-12 text-white sm:px-12 sm:py-16 lg-px-16">
                            <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
                                {/* TEXT */}
                                <div className="max-w-2xl">
                                    <p className=" text-md sm:text-sm font-medium uppercase tracking-[0.2em] text-blue-400 font-madimi">
                                        Ready when you are
                                    </p>
                                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-3xl sm:text-5xl font-maven">
                                        Ready to take laundry off your hands?
                                    </h2>
                                    <p className="mt-5 max-w-xl text-md sm:text-lg leading-8 text-blue-400">
                                        Book your laundry service directly through WhatsApp and let D-Promise handle the rest.
                                    </p>
                                </div>
                                {/* WHATSAPP BUTTON */}
                                <a href="https://wa.me/2347012772979" 
                                target="_blank"
                                rel="noreferer"
                                className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-blue-900 transition hover:bg-blue-100">
                                    <FaWhatsapp className="text-2xl"/>

                                    chat with us

                                    <span><FaArrowRight/></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>



            </main >
        </>
    )
}

export default Home