import { useEffect, useState } from "react";
import GreetingMessage from "../presentational/GreetingMessage";
import styles from "./ItemListContainer.module.css";
import ItemList from "../presentational/ItemList";

const itemsData = [
  {
    id: 1,
    imageUrl: "https://picsum.photos/200",
    name: 'Product 1',
    price: 10
  },
  {
    id: 2,
    imageUrl: "https://picsum.photos/200",
    name: 'Product 2',
    price: 20
  },
  {
    id: 3,
    imageUrl: "https://picsum.photos/200",
    name: 'Product 3',
    price: 30
  },
  {
    id: 4,
    imageUrl: "https://picsum.photos/200",
    name: 'Product 4',
    price: 40
  },

  {
    id: 5,
    imageUrl: "https://picsum.photos/200",
    name: 'Product 5',
    price: 50
  },
];

const fetchItems = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(itemsData);
    }, 2000);
  });
};

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems().then((items) => setItems(items))
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