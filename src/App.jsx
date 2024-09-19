import { Outlet } from "react-router-dom"
import Navbar from "./components/Nav/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Footer from "./components/Footer/Footer"

function App() {


  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
