import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Simular datos de productos
  useEffect(() => {
    const products = {
      1: {
        id: 1,
        titulo: "Nike Air Max",
        descripcion: "Las zapatillas Nike Air Max ofrecen comodidad excepcional con su tecnología de amortiguación de aire visible.",
        precio: 129.99,
        imagen: "../public/productos/zapatosNike.png",
        detalles: [
          "Material exterior: Sintético y malla transpirable",
          "Suela: Goma resistente al desgaste",
          "Tecnología Air-Sole visible para mayor comodidad",
          "Ajuste: Regular",
          "Color: Azul/Blanco"
        ],
        disponible: true,
        stock: 15
      },
      2: {
        id: 2,
        titulo: "Adidas Ultraboost",
        descripcion: "Zapatillas de running con tecnología Boost para máxima respuesta de energía.",
        precio: 149.99,
        imagen: "src/assets/productos/zapatosNike.png",
        detalles: [
          "Tecnología Boost para máxima amortiguación",
          "Upper de Primeknit adaptable",
          "Suela Continental para agarre superior",
          "Diseño sin costuras",
          "Color: Negro/Verde"
        ],
        disponible: true,
        stock: 8
      }
    };

    setProduct(products[id] || {
      id: id,
      titulo: "Producto No Encontrado",
      descripcion: "Este producto no está disponible actualmente.",
      precio: 0,
      imagen: "src/assets/productos/zapatosNike.png",
      detalles: [],
      disponible: false,
      stock: 0
    });
  }, [id]);
//arreglar--no añade añ carrito de compra
  const handleAddToCart = () => {
    alert(`Añadido al carrito: ${quantity} x ${product.titulo}`);
  };

  const handleBuyNow = () => {
    alert(`Comprando ahora: ${quantity} x ${product.titulo} - Total: $${(product.precio * quantity).toFixed(2)}`);
  };

  if (!product) {
    return <div className="container mt-5"><h3>Cargando...</h3></div>;
  }

  return (
    <div className="container mt-4">
      <button 
        className="btn btn-outline-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ← Volver
      </button>

      <div className="row">
        <div className="col-md-6">
          <img 
            src={product.imagen} 
            alt={product.titulo}
            className="img-fluid rounded shadow"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="col-md-6">
          <h1 className="mb-3">{product.titulo}</h1>
          
          <div className="mb-3">
            <span className="badge bg-success me-2">
              {product.disponible ? "En Stock" : "Agotado"}
            </span>
            <span className="text-muted">
              {product.stock} unidades disponibles
            </span>
          </div>

          <h2 className="text-primary mb-4">${product.precio}</h2>

          <p className="lead mb-4">{product.descripcion}</p>

          <div className="mb-4">
            <h5>Detalles del Producto:</h5>
            <ul className="list-unstyled">
              {product.detalles.map((detalle, index) => (
                <li key={index} className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  {detalle}
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <label htmlFor="quantity" className="form-label">Cantidad:</label>
            <div className="input-group" style={{ maxWidth: "150px" }}>
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={!product.disponible}
              >
                -
              </button>
              <input 
                type="number" 
                className="form-control text-center" 
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                min="1"
                max={product.stock}
                disabled={!product.disponible}
              />
              <button 
                className="btn btn-outline-secondary"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                disabled={!product.disponible}
              >
                +
              </button>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button 
              className="btn btn-primary btn-lg"
              onClick={handleBuyNow}
              disabled={!product.disponible}
            >
              Comprar Ahora - ${(product.precio * quantity).toFixed(2)}
            </button>
            <button 
              className="btn btn-outline-primary btn-lg"
              onClick={handleAddToCart}
              disabled={!product.disponible}
            >
              Añadir al Carrito
            </button>
          </div>

          <div className="mt-4 p-3 bg-light rounded">
            <h6>Información de Envío:</h6>
            <p className="mb-1"><small>✓ Envío gratis en pedidos superiores a $100</small></p>
            <p className="mb-1"><small>✓ Entrega en 3-5 días hábiles</small></p>
            <p className="mb-0"><small>✓ Devoluciones gratuitas en 30 días</small></p>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <h3>Productos Relacionados</h3>
          <p className="text-muted">Descubre más zapatillas que te pueden gustar</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
