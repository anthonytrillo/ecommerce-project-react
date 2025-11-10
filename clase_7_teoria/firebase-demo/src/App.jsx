import { useEffect, useState } from "react"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { app } from "./firebase/config";


function App() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);

    const fetchItem = async () => {
      try {
        setLoading(true);
        setError(null);

        const docRef = doc(db, "items", "sHZTzlsvZYhXYQMyvBKt");
        const docSnap = await getDoc(docRef);
        setItem(docSnap.data());
      } catch (err) {
        setError(err);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, []);

  return (
    <div>
      <h1>Firebase Demo</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {item && (
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>precio: {item.price}</p>
          <p>stock: {item.stock}</p>
        </div>
      )}
    </div>
  )
}

export default App
