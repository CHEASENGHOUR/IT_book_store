import About from "./page/About"
import Contect from "./page/Contect"
import Home from "./page/Home"
import Shop from "./page/Shop"
import Navigations from "./ui/Navigations"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PageContext } from "./context/PageContext"
function Layout() {
  const pagesRoute = [
        { id: 1, name: "", text: "ទំព័រដើម" },
        { id: 2, name: "shop", text: "សៀវភៅទាំងអស់" },
        { id: 3, name: "about", text: "អំពីយើង" },
        { id: 4, name: "contect", text: "ទំនាក់ទំនង" }
    ]
  return (
    <PageContext.Provider value={pagesRoute}>
        <Router>
          <Navigations/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contect" element={<Contect/>}/>
          </Routes>
        </Router>
    </PageContext.Provider>
  )
}

export default Layout