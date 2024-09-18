import { Outlet } from "react-router-dom"
import Navbar from "./components/Nav/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

function App() {


  return (
    <>
      <Navbar/>
      <Sidebar/>
      
      <Outlet/>
    </>
  )
}

export default App
