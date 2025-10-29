import styles from './Item.module.css';

const Item = ({ item }) => {
  return (
    <div className={styles.itemCard}>
      <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemPrice}>Precio: ${item.price}</p>
        <button className={styles.itemButton}>Ver detalle</button>
      </div>
    </div>
  );
};

export default Item;