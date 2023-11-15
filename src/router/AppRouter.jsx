import { Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dashboard from "../pages/Dashboard"
import About from "../pages/About"




const AppRouter = () => {
  return (
    <div>


      <Navbar />

      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='about' element={<About />} />



      </Routes>

      <Footer />

    </div>
  )
}

export default AppRouter