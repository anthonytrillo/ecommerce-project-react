import { useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { app } from "./firebase/config";
import styles from "./App2.module.css";

function App2() {
  const [loading, setLoading] = useState(false);
  const [lastOrderId, setLastOrderId] = useState(null);

  const db = getFirestore(app);

  const createOrder = async () => {
    setLoading(true);

    // Estructura de la orden
    const order = {
      buyer: {
        name: "Cliente Test",
        phone: "123456789",
        email: "client@coderhouse.com"
      },
      items: [
        { id: "a1", title: "Auto usado", price: 5000, quantity: 1 }
      ],
      date: serverTimestamp(), // Timestamp del servidor de Firebase
      total: 5000
    };

    try {
      // Insertar la orden en la colección "orders"
      const ordersRef = collection(db, "orders");
      const docRef = await addDoc(ordersRef, order);

      // Mostrar el ID generado en consola
      console.log("✅ Orden creada con ID:", docRef.id);

      setLastOrderId(docRef.id);
      alert(`¡Orden creada exitosamente!\nID: ${docRef.id}`);
    } catch (error) {
      console.error("❌ Error al crear la orden:", error);
      alert("Error al crear la orden");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>Firebase - Crear Órdenes</h1>

      <div className={styles.structureContainer}>
        <h2>Estructura de la Orden</h2>
        <pre className={styles.codeBlock}>
          {`{
  buyer: {
    name: "Cliente Test",
    phone: "123456789",
    email: "client@coderhouse.com"
  },
  items: [
    { 
      id: "a1", 
      title: "Auto usado", 
      price: 5000, 
      quantity: 1 
    }
  ],
  date: serverTimestamp(),
  total: 5000
}`}
        </pre>

        <button
          onClick={createOrder}
          disabled={loading}
          className={styles.createButton}
        >
          {loading ? "Creando orden..." : "Crear Orden con addDoc()"}
        </button>
      </div>

      {lastOrderId && (
        <div className={styles.successBox}>
          <h3>✅ Última orden creada</h3>
          <p><strong>ID generado por Firebase:</strong></p>
          <p className={styles.orderId}>
            {lastOrderId}
          </p>
          <p className={styles.note}>
            💡 Revisa la consola del navegador para ver el log completo
          </p>
        </div>
      )}

      {/* <div className={styles.notesBox}>
        <h3>📝 Notas importantes:</h3>
        <ul>
          <li><strong>serverTimestamp()</strong>: Usa la hora del servidor de Firebase, no la hora local del cliente</li>
          <li><strong>addDoc()</strong>: Genera automáticamente un ID único para cada documento</li>
          <li>La colección <strong>"orders"</strong> se crea automáticamente si no existe</li>
          <li>Abre las DevTools (F12) para ver el ID en la consola</li>
        </ul>
      </div>
      */}
    </div>
  );
}

export default App2