import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

const productsData = [
  { id: 1, title: "Ford Focus", price: 20000 },
  { id: 2, title: "Peugeot 208", price: 23000 },
  { id: 3, title: "Fiat Cronos", price: 21000 },
];

const Catalog = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData)
      }, 2000)
    });

    fetchProducts.then((productsData) => setProducts(productsData));
  }, []);

  const filtered = products.filter((prod) => prod.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {filtered.length === 0 ?
        (<p>Cargando...</p>) : (
          <ul>
            {filtered.map(car => (
              <li key={car.id}>{car.title}</li>
            ))}
          </ul>
        )}
    </>

  )
};

export default Catalog;