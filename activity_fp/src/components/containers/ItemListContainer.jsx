import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore"
import { app } from "../../firebase/config";
import GreetingMessage from "../presentational/GreetingMessage";
import styles from "./ItemListContainer.module.css";
import ItemList from "../presentational/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore(app);
    const itemRef = collection(db, "items");

    const fetchItem = async () => {
      try {
        const querySnap = await getDocs(itemRef);
        const items = querySnap.docs.map(doc => doc.data());
        setItems(items);
      } catch (err) {
        console.error("Error", err);
        setItems(null);
      } finally {
        console.log("Proceso terminado.");
      }
    };
    fetchItem();
  }, []);

  return (
    <div className={styles.container}>
      <GreetingMessage text={greeting} />
      <h1>Lista de productos</h1>
      {items.length === 0 ?
        (<p>Cargando...</p>) :
        (
          <ItemList items={items} />
        )}
    </div>
  )
}

export default ItemListContainer;