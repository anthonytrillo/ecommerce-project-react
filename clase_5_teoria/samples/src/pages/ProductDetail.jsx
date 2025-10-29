import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Cargando...</p>

  return (
    <>
      <h1>Detalle</h1>
      <button onClick={() => navigate(-1)}>Volver</button>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </>
  );
};

export default ProductDetail;