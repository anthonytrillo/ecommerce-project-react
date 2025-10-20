import useFetch from "../hooks/useFetch"

const url = "https://fakestoreapi.com/products";

function Products() {
  const { data, loading, error } = useFetch(url);

  return (
    <>
      <h1>Productos:</h1>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul>
          {data.map(prod => (
            <li key={prod.id}>{prod.title}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default Products