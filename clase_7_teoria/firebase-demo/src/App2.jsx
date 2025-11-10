import { useEffect, useState } from "react"
import { getFirestore, getDocs, collection } from "firebase/firestore"
import { app } from "./firebase/config";


function App() {
  const [items, setItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);
    const itemRef = collection(db, "items");

    const fetchItem = async () => {
      try {
        setLoading(true);
        setError(null);

        const querySnap = await getDocs(itemRef);
        const items = querySnap.docs.map(doc => doc.data());
        setItems(items);
      } catch (err) {
        setError(err);
        setItems(null);
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
      {items && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App