import Home from "./component/Home"
import Navber from "./component/Navber"
import Footer from "./component/Footer"
import Program from "./component/program"
import Adimission from "./component/adimission"
import { Route, Routes } from "react-router"
import "./App.css"

function App() {

  return (
    <>
      <Navber />
     
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adimisson" element={<Adimission />} />
      <Route path="/program" element={<Program />} />
     </Routes>

      <Footer />
    </>
  )
}

export default App
