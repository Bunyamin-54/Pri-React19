import { useEffect } from "react"
import useBlogCall from "../hooks/useBlogCall"

const Dashboard = () => {


  const {getBlog} = useBlogCall()

  useEffect(() => {
    getBlog('blogs')
  }, [])
  

  return (
    <div><h1>dashboard</h1></div>
  )
}

export default Dashboard