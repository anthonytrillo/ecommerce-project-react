import Navbar from "./components/Navbar"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Products from "./pages/Products"
import Checkout from "./pages/Checkout"
import Cart from "./pages/Cart"
import NotFound from "./pages/NotFound"
import ProductDetail from "./pages/ProductDetail"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
