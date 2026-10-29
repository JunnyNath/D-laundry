// importing react-router-dom so we can use the routing functionality in our app

import { BrowserRouter, Routes, Route } from "react-router-dom";
// ReUsable Components if we want them to appear in every page
import Footer from "./components/Footer.jsx"
import Navbar from "./components/Navbar.jsx";

// Routes to pages
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/contact.jsx";


function App() {
  return (
    <>
      <BrowserRouter>

        <Navbar />



        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>


        <Footer />

      </BrowserRouter>
    </>

  )
}
export default App