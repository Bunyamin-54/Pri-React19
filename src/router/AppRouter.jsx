import { Routes, Route } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Dashboard from "../pages/Dashboard"
import About from "../pages/About"
import PrivateRouter from "./PrivateRouter"
import NewBlog from "../pages/NewBlog"
import MyBlogs from "../pages/MyBlogs"
import Profile from "../pages/Profile"
import LoginModal from "../components/LoginModal"
import { useState } from "react"





const AppRouter = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>


      <Navbar handleOpen={handleOpen}/>

      <Routes>

        <Route path='/' element={<Dashboard />} />
        <Route path='about' element={<About />} />

        <Route path="" element={<PrivateRouter />} >

          <Route path='newblog' element={<NewBlog />} />
          <Route path='myblogs' element={<MyBlogs />} />
          <Route path='profile' element={<Profile />} />

        </Route>

      </Routes>

      <LoginModal open={open} handleClose={handleClose}/>

      <Footer />

    </div>
  )
}

export default AppRouter