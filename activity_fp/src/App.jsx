import Home from "./pages/Home";
import ItemListContainer from "./components/containers/ItemListContainer";
import NavBar from "./components/layout/NavBar";
import { Routes, Route } from 'react-router-dom'
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import CartContainer from "./components/containers/CartContainer";
import ItemDetailContainer from "./components/containers/ItemDetailContainer";

function App() {

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainer greeting="Bienvenido a mi tienda online!" />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  )
}

export default App
