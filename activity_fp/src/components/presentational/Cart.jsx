import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ cart, removeItem, clearCart, totalPrice }) => {
  if (cart.length === 0) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>El carrito está vacío</h2>
        <Link to="/products">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Tu Carrito</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {cart.map(item => (
          <li key={item.id} style={{ borderBottom: '1px solid #ccc', padding: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              {item.imageUrl && <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />}
              <div>
                <h3 style={{ margin: '0 0 5px 0' }}>{item.name}</h3>
                <p style={{ margin: 0 }}>Cantidad: {item.quantity} x ${item.price}</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontWeight: 'bold' }}>${item.quantity * item.price}</p>
              <button
                onClick={() => removeItem(item.id)}
                style={{ backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <h3>Total: ${totalPrice()}</h3>
        <button
          onClick={clearCart}
          style={{ padding: '10px 20px', backgroundColor: '#333', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}
        >
          Vaciar Carrito
        </button>
      </div>
    </div>
  );
}

export default Cart;

