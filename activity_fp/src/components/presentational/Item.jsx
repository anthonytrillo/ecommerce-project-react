import styles from './Item.module.css';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
  const { addItem } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    addItem(item, 1);
  };

  return (
    <div className={styles.itemCard}>
      <img src={item.imageUrl} alt={item.name} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <h3 className={styles.itemName}>{item.name}</h3>
        <p className={styles.itemPrice}>Precio: ${item.price}</p>
        <button className={styles.itemButton} onClick={() => navigate(`/item/${item.id}`)}>Ver detalle</button>
        <button className={styles.itemButton} style={{ marginTop: '10px' }} onClick={handleAddToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default Item;