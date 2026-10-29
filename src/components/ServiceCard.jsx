// ServiceCard means our component can recieve information.
import { FaArrowRight } from "react-icons/fa6"

function ServiceCard({ image, title, description}) {
 return (
    <>
      <article className="group overflow-hidden rounded-[2rem] border border-blue-200 bg-white transition duration-500 hover:translate-y-1 hover:shadow-xl">
        {/* image */}
        <div className="overflow-hidden">
              <img
                 src={image}
                 alt={title} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"/>
        </div>
        {/* content */}
        <div className="p-7 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight font-maven">{title}</h3>
               <p className="mt-3 leading-7 text-blue-600 font-maven">{description}</p>

               <a href="/Contact" className="mt-7 inline-flex items-center font-medium text-blue-900 transition font-maven">
               Learn more
               <span className="ml-2 transition-transfom duration-300 group-hover:translate-x-2"><FaArrowRight/></span></a>
        </div>
      </article>
    </>
 )
}

export default ServiceCard