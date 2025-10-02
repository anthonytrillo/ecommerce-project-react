import GreetingMessage from "./GreetingMessage";
import styles from "./ItemListContainer.module.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.container}>
      <GreetingMessage text={greeting} />
    </div>
  )
}

export default ItemListContainer;