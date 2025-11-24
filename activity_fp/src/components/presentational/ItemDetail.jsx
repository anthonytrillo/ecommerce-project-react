import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import styles from './ItemDetail.module.css';

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addItem(item, quantity);
  };

  if (!item) {
    return <div className={styles.container}>Cargando producto...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={item.imageUrl} alt={item.name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{item.name}</h2>
        <p className={styles.description}>{item.description || "Descripción del producto no disponible."}</p>
        <p className={styles.price}>${item.price}</p>

        <div className={styles.controls}>
          <div className={styles.quantityControl}>
            <span>Cantidad:</span>
            <button className={styles.qtyButton} onClick={handleDecrement}>-</button>
            <span className={styles.quantity}>{quantity}</span>
            <button className={styles.qtyButton} onClick={handleIncrement}>+</button>
          </div>

          <button className={styles.addButton} onClick={handleAddToCart}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;

