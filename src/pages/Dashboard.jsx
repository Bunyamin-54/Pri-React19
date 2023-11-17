import { useEffect } from "react"
import useBlogCall from "../hooks/useBlogCall"
import { Container } from "@mui/material"
import Header from "../components/Header"

const Dashboard = () => {


  const { getBlog } = useBlogCall()

  useEffect(() => {
    getBlog('blogs')
  }, [])


  return (
    <>

      <Header />

      <Container maxWidth={'xl'}>





      </Container>
    </>
  )
}

export default Dashboard