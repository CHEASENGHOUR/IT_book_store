import About from "./page/About"
import Contect from "./page/Contect"
import Home from "./page/Home"
import Shop from "./page/Shop"
import Navigations from "./ui/Navigations"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
function Layout() {
  return (
    <div>
        <Router>
          <Navigations/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contect" element={<Contect/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default Layout