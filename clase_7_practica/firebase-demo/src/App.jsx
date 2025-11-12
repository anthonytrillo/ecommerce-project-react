import { useState } from "react"
import { collection, getFirestore, addDoc } from "firebase/firestore"
import styles from "./App.module.css"
import { app } from "./firebase/config";


function App() {
  // const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: ""
  });

  const db = getFirestore(app);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSaveItem = async (e) => {
    e.preventDefault();

    try {
      const itemsRef = collection(db, "items");
      const docRef = await addDoc(itemsRef, {
        name: formData.name,
        price: formData.price,
        stock: formData.stock,
        createAt: new Date()
      });

      console.log("Documento creado con ID:", docRef.id);
    } catch (err) {
      console.error(err)
    }
  }



  return (
    <div className={styles.container}>
      <h1>Formulario Firebase</h1>
      <div className={styles.formContainer}>
        <h2>Crear producto</h2>
        <form onSubmit={handleSaveItem}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              className={styles.input}
              required
            />
          </div>

          <button
            type="submit"
            className={styles.submitButton}
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  )
}

export default App
