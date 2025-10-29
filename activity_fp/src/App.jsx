import Home from "./pages/Home";
import ItemListContainer from "./components/containers/ItemListContainer";
import NavBar from "./components/layout/NavBar";
import { Routes, Route } from 'react-router-dom'
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ItemListContainer greeting="Bienvenido a mi tienda online!" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
