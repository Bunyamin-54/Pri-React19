import { useDispatch, useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import { modal } from "../features/authSlice"


const PrivateRouter = () => {

  const { token } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  

  if (!token) {
    dispatch(modal(true))  
    return null; 
  }


  return <Outlet />


}

export default PrivateRouter