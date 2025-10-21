import { useNavigate } from "react-router-dom";

function Card({id, titulo, descripcion, precio, imagen}) {
    const navigate = useNavigate();

    const handleViewDetails = () => {
        navigate(`/product/${id}`);
    };

    return (
    <div className="card" style={{ width: "18rem" }}>
    <img 
        className="card-img-top" 
        src={imagen || "https://via.placeholder.com/300x200?text=Producto"} 
        alt={titulo}
        style={{ height: "200px", objectFit: "cover" }}
    />
    <div className="card-body">
      <h5 className="card-title">{titulo}</h5>
      <p className="card-text">{descripcion}</p>
      {precio && <p className="text-primary fw-bold">${precio}</p>}
      <button 
        onClick={handleViewDetails} 
        className="btn btn-primary w-100"
      >
        Ver Detalle
      </button>
    </div>
  </div>);
}
export default Card;