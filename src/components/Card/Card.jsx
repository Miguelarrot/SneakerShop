import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

function Card({id, titulo, descripcion, precio, imagen, stock = 10}) {
    const navigate = useNavigate();
    const { agregarAlCarrito } = useCart();
    const [added, setAdded] = useState(false);

    const handleViewDetails = () => {
        navigate(`/product/${id}`);
    };

    const handleAddToCart = (e) => {
        e.stopPropagation();
        agregarAlCarrito({ 
            id, 
            titulo, 
            precio, 
            imagen, 
            stock 
        });
        setAdded(true);
        setTimeout(() => setAdded(false), 2000);
    };

    return (
    <div className="card" style={{ height: "200px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    <img 
        className="card-img-top" 
        src={imagen || "https://via.placeholder.com/300x200?text=Producto"} 
        alt={titulo}
        style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text" style={{ height: "4.5em", overflow: "hidden" }}>{descripcion}</p>
      {precio && <p className="text-primary fw-bold">${precio}</p>}
      <div className="d-flex gap-2">
        <button 
          onClick={handleViewDetails} 
          className="btn btn-outline-primary flex-grow-1"
        >
          Ver Detalle
        </button>
        <button 
          onClick={handleAddToCart} 
          className={`btn ${added ? 'btn-success' : 'btn-primary'} flex-grow-1`}
          disabled={added}
        >
          {added ? '✓ Agregado' : '🛒 Agregar'}
        </button>
      </div>
    </div>
  </div>);
}
export default Card;