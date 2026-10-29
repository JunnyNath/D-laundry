
import { useState } from "react"

import { FaBars, FaXmark } from "react-icons/fa6"
// importing Link from react-router-dom to use in our navlink bars

// Link is a react routers way of moving between our pages. 
import { Link } from "react-router-dom";
import BrandLogo from "../assets/images/D-Promise Laundry Services Logo.png"


function Navbar() {
  // using the useState hook to change and update our menu bar
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-white-50/95 sticky top-0 z-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:py-5">
        <img src={BrandLogo} alt="D promise Laundry Services" className="h-8 sm:h-10" onClick={() => setMenuOpen(false)} />

        <div className=" hidden flex items-center gap-8 text-sm font-medium md:flex sm:gap-16">

          {/* putting Link instead of <a> tags fro a better navigation */}
          <Link to="/" className="text-blue-400 transition hover:text-blue-900 font-bold font-maven">Home</Link>
          <Link to="/Services" className="text-blue-400 transition hover:text-blue-900 font-bold font-maven">Services</Link>
          <Link to="/Contact" className="text-blue-400 transition hover:text-blue-900 font-bold font-maven">Contact</Link>
        </div>

        {/* MOBILE NAVIGATION */}

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-200 text-blue-900 transition hover:bg-blue-100 md:hidden"
          aria-label="Toggle navigation menu">
          {menuOpen ? (
            <FaXmark className=" text-lg text-blue-500" />
          ) : (
            <FaBars className="text-lg text-blue-500" />
          )
          }
        </button>

      </div>

      {/* MOBILE NAVIGATION */}

      {menuOpen && (
        <div className="border-t border-blue-200 py-5 md:hidden">
            <div className="flex flex-col gap-1">
              <Link to="/"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium transition hover:bg-blue-100
              font-madimi text-blue-400">Home</Link>

              <Link to="/Services"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium transition hover:bg-blue-100 font-madimi text-blue-400">Services</Link>

              <Link to="/Contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 font-medium transition hover:bg-blue-100 font-madimi text-blue-400">Contact</Link>
            </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar