import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../../firebase/config";
import ItemDetail from "../presentational/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore(app);
    const itemRef = doc(db, "items", id);

    const fetchItem = async () => {
      try {
        setLoading(true);
        const docSnap = await getDoc(itemRef);
        if (docSnap.exists()) {
          setItem({ ...docSnap.data(), id: docSnap.id });
        } else {
          console.log("No such document!");
          setItem(null);
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  if (loading) {
    return <p>Cargando detalle...</p>;
  }

  return <ItemDetail item={item} />;
};

export default ItemDetailContainer;

