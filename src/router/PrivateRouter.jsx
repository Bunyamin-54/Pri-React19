import { Navigate } from "react-router-dom"
import { Outlet } from "react-router-dom"


const PrivateRouter = () => {

    const token = false

  return  token ? <Outlet/>  : <Navigate  to={'login'}/>
   
  
}

export default PrivateRouter