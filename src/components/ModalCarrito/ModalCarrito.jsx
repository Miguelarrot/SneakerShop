import { useCart } from "../../context/CartContext";

function ModalCarrito({ show, onClose }) {
  const { 
    cartItems, 
    calcularTotal, 
    aumentarCantidad, 
    disminuirCantidad, 
    eliminarProducto 
  } = useCart();

  if (!show) return null;

  return (
    <>
      <div 
        className={`modal fade ${show ? 'show' : ''}`} 
        style={{ display: show ? 'block' : 'none' }}
        tabIndex="-1"
        onClick={onClose}
      >
        <div 
          className="modal-dialog modal-dialog-scrollable modal-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                🛒 Carrito de Compras
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Cerrar"
              ></button>
            </div>
            <div className="modal-body">
              {cartItems.length === 0 ? (
                <div className="text-center py-5">
                  <p className="text-muted">Tu carrito está vacío</p>
                  <button className="btn btn-primary" onClick={onClose}>
                    Ir a comprar
                  </button>
                </div>
              ) : (
                <div>
                  {cartItems.map((item) => (
                    <div key={item.id} className="card mb-3">
                      <div className="row g-0 align-items-center">
                        <div className="col-md-2">
                          <img 
                            src={item.imagen} 
                            className="img-fluid rounded-start p-2" 
                            alt={item.titulo}
                          />
                        </div>
                        <div className="col-md-4">
                          <div className="card-body">
                            <h6 className="card-title mb-2">{item.titulo}</h6>
                            <small className="text-muted">${item.precio} c/u</small>
                          </div>
                        </div>
                        <div className="col-md-3 text-center">
                          <div className="d-flex align-items-center justify-content-center gap-2">
                            <button 
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => disminuirCantidad(item.id)}
                              disabled={item.cantidad <= 1}
                            >
                              −
                            </button>
                            <span className="fw-bold mx-2" style={{ minWidth: '30px' }}>
                              {item.cantidad}
                            </span>
                            <button 
                              className="btn btn-sm btn-outline-secondary"
                              onClick={() => aumentarCantidad(item.id)}
                              disabled={item.cantidad >= item.stock}
                            >
                              +
                            </button>
                          </div>
                          
                        </div>
                        <div className="col-md-2 text-center">
                          <p className="fw-bold text-primary mb-0">
                            ${(item.precio * item.cantidad).toFixed(2)}
                          </p>
                        </div>
                        <div className="col-md-1 text-center">
                          <button 
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => eliminarProducto(item.id)}
                            title="Eliminar producto"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="border-top pt-3 mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Subtotal:</span>
                      <span>${calcularTotal()}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span>Envío:</span>
                      <span className="text-success">Gratis</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <strong>Total:</strong>
                      <strong className="text-primary fs-4">${calcularTotal()}</strong>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Seguir Comprando
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                disabled={cartItems.length === 0}
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        </div>
      </div>
      {show && <div className="modal-backdrop fade show" onClick={onClose}></div>}
    </>
  );
}

export default ModalCarrito;
