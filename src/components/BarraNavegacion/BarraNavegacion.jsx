import { Link } from "react-router-dom";
import { useState } from "react";
import ModalCarrito from "../ModalCarrito/ModalCarrito";

function BarraNavegacion() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);
  
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log("Buscando:", searchTerm);
      // Aquí puedes implementar la lógica de búsqueda
    }
  };

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
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    5
                    <span className="visually-hidden">items en el carrito</span>
                  </span>
                </button>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <ModalCarrito
        show={showCart}
        onClose={() => setShowCart(false)}
      />
    </>
  );
}

export default BarraNavegacion;
