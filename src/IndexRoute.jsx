import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/about/About";
import ProductDetail from "./Pages/ProductDetail";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
export default function IndexRoute() {
    return (
        <Router>
        <BarraNavegacion />
        <div style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/">
             <Route index element={<Home />} />
             <Route path = "*" element={<Home />} />
            </Route>
            <Route path="/about" >
             <Route index element={<About />} />
             <Route path = "*" element={<About />} />
            </Route>
            <Route path="/product/:id">
              <Route index element={<ProductDetail />} />
              <Route path = "*" element={<ProductDetail />} />
            </Route>
          </Routes>
        </div>
      </Router>
    )
}