import { useEffect, useState } from "react";
import styles from "./App.module.css";


function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        setCars([
          { id: 1, model: "Toyota Corolla", price: 15000 },
          { id: 2, model: "Fiat Mobi", price: 10000 }
        ]);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, 2000);
  }, []);

  if (loading) return <p>Cargando autos...</p>;
  if (error) return <p>Error al cargar datos.</p>;
  if (cars.length === 0) return <p>No hay autos disponibles en este momento.</p>;

  return (
    <div className={styles.list}>
      {cars.map((car) => (
        <div key={car.id} className={styles.card}>
          <h3>{car.model}</h3>
          <p>{car.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App
