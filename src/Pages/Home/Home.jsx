import Card from "../../components/Card/Card";
import "./Home.css";

function Home() {
  const productos = [
    {
      id: 1,
      titulo: "Nike Air Max",
      descripcion:
        "Zapatillas con tecnología de amortiguación de aire visible para comodidad excepcional.",
      precio: 129.99,
      imagen:
        "https://via.placeholder.com/300x200/007bff/ffffff?text=Nike+Air+Max",
    },
    {
      id: 2,
      titulo: "Adidas Ultraboost",
      descripcion:
        "Zapatillas de running con tecnología Boost para máxima respuesta de energía.",
      precio: 149.99,
      imagen:
        "https://via.placeholder.com/300x200/28a745/ffffff?text=Adidas+Ultraboost",
    },
  ];

  return (
    <div className="home-container">
      <div className="row">
      <div className="col-md-9 p-3 container">
        <h2 className="home-title">Nuestros Productos</h2>
        <div className="row">
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="col-md-4 mb-4 product-card-wrapper"
            >
              <Card
                id={producto.id}
                titulo={producto.titulo}
                descripcion={producto.descripcion}
                precio={producto.precio}
                imagen={producto.imagen}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="col-md-3 bg-light p-3 ">
        <p>Left Container</p>
      </div>
      </div>
    </div>
  );
}
export default Home;
