import { Link } from "react-router-dom";
import { useState } from "react";
import ModalCarrito from "../ModalCarrito/ModalCarrito";
import { useCart } from "../../context/CartContext";
import ModalSignIn from "../ModalSignIn/modalSignIn";

function BarraNavegacion() {
  const [showCart, setShowCart] = useState(false);
  const { getTotalItems } = useCart();
  const [showSignIn, SetShowSignIn] = useState(false)
  
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleSignInClick = (e)=>{
    e.preventDefault();
    SetShowSignIn(true);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            SneakerShop
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <button 
                  className="nav-link btn btn-link position-relative" 
                  onClick={handleCartClick}
                  style={{ border: 'none', background: 'none' }}
                >
                  🛒 Carrito
                  {getTotalItems() > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {getTotalItems()}
                      <span className="visually-hidden">items en el carrito</span>
                    </span>
                  )}
                </button>
              </li>
            </ul>
            <div>
              <button
              className="nav-link bt bt-link position-center"
              onClick={handleSignInClick}
              style={{border:"none", marginTop:"2px"}}>
                🔐Iniciar Sesión
              </button>
            </div>
          </div>
        </div>
      </nav>

      <ModalCarrito
        show={showCart}
        onClose={() => setShowCart(false)}
      />
      <ModalSignIn
      show={showSignIn}
      onClose={()=> SetShowSignIn(false)}
      />
    </>
  );
}

export default BarraNavegacion;
