import { Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dashboard from "../pages/Dashboard"
import About from "../pages/About"
import PrivateRouter from "./PrivateRouter"
import NewBlog from "../pages/NewBlog"
import MyBlogs from "../pages/MyBlogs"
import Profile from "../pages/Profile"
import Login from "../pages/Login"




const AppRouter = () => {
  return (
    <div>


      <Navbar />

      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='about' element={<About />} />

        <Route path="" element={<PrivateRouter />} >

          <Route path='newblog' element={<NewBlog />} />
          <Route path='myblogs' element={<MyBlogs />} />
          <Route path='profile' element={<Profile />} />

        </Route>

        <Route path='login' element={<Login />} />



      </Routes>

      <Footer />

    </div>
  )
}

export default AppRouter