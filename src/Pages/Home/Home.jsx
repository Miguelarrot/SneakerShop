import { useState } from 'react';
import Card from "../../components/Card/Card";
import Filtros from "../../components/Filtros/Filtros";
import "./Home.css";

function Home() {
  const [filtrosActivos, setFiltrosActivos] = useState({
    busqueda: '',
    marca: 'todas',
    precioMin: 0,
    precioMax: 500000
  });

  const productos = [
    {
      id: 1,
      titulo: "Nike Air Max",
      marca: "Nike",
      descripcion:
        "Zapatillas con tecnología de amortiguación de aire visible para comodidad excepcional.",
      precio: 129999,
      imagen:
        "public/productos/zapatosNike.png",
      stock: 15,
    },
    {
      id: 2,
      titulo: "Adidas Ultraboost",
      marca: "Adidas",
      descripcion:
        "Zapatillas de running con tecnología Boost para máxima respuesta de energía.",
      precio: 149999,
      imagen:
        "https://via.placeholder.com/300x200/28a745/ffffff?text=Adidas+Ultraboost",
      stock: 8,
    },
    {
      id: 3,
      titulo: "Puma RS-X",
      marca: "Puma",
      descripcion:
        "Zapatillas retro con diseño audaz y tecnología de amortiguación moderna.",
      precio: 490999,
      imagen:
        "https://via.placeholder.com/300x200/dc3545/ffffff?text=Puma+RS-X",
      stock: 12,
    },
    {
      id: 4,
      titulo: "Nike React Infinity",
      marca: "Nike",
      descripcion:
        "Zapatillas de running diseñadas para reducir lesiones con amortiguación React.",
      precio: 159999,
      imagen:
        "https://via.placeholder.com/300x200/6f42c1/ffffff?text=Nike+React",
      stock: 20,
    },
    {
      id: 5,
      titulo: "Reebok Classic",
      marca: "Reebok",
      descripcion:
        "Zapatillas clásicas con estilo atemporal y comodidad todo el día.",
      precio: 379999,
      imagen:
        "https://via.placeholder.com/300x200/fd7e14/ffffff?text=Reebok+Classic",
      stock: 25,
    },
    {
      id: 6,
      titulo: "New Balance 990",
      marca: "New Balance",
      descripcion:
        "Zapatillas premium hechas en USA con calidad excepcional y comodidad superior.",
      precio: 189999,
      imagen:
        "https://via.placeholder.com/300x200/20c997/ffffff?text=NB+990",
      stock: 10,
    },
    {
      id: 7,
      titulo: "New Balance 290",
      marca: "New Balance",
      descripcion:
        "Zapatillas premium hechas en USA con calidad excepcional y comodidad superior.",
      precio: 189999,
      imagen:
        "https://via.placeholder.com/300x200/20c997/ffffff?text=NB+990",
      stock: 10,
    },
  ];

  // Función para filtrar productos
  const filtrarProductos = () => {
    return productos.filter(producto => {
      // Filtro por búsqueda
      const coincideBusqueda = producto.titulo.toLowerCase().includes(filtrosActivos.busqueda.toLowerCase()) 
      
      // Filtro por marca
      const coincideMarca = filtrosActivos.marca === 'todas' || producto.marca === filtrosActivos.marca;
      
      // Filtro por precio
      const coincidePrecio = producto.precio >= filtrosActivos.precioMin && 
                             producto.precio <= filtrosActivos.precioMax;
      
      return coincideBusqueda && coincideMarca && coincidePrecio;
    });
  };

  const productosFiltrados = filtrarProductos();

  return (
    <div className="home-container">
      <div className="row">
        {/* Left Container - Filtros */}
        <div className="col-md-3 p-3">
          <Filtros onFiltrosChange={setFiltrosActivos} />
        </div>
        
        {/* Right Container - Productos */}
        <div className="col-md-9 p-3 container">
          <h2 className="home-title">Nuestros Productos</h2>
          <p className="text-muted text-center mb-3">
            {productosFiltrados.length} producto(s) encontrado(s)
          </p>
          <div className="row align-items-stretch">
            {productosFiltrados.length > 0 ? (
              productosFiltrados.filter(producto => producto.stock > 0).map((producto) => (
                <div
                  key={producto.id}
                  className="col-md-4 mb-4 product-card-wrapper"
                >
                  <Card
                    id={producto.id}
                    titulo={producto.titulo}
                    descripcion={producto.descripcion}
                    precio={producto.precio.toLocaleString("es-CO")}
                    imagen={producto.imagen}
                    stock={producto.stock}
                  />
                </div>             
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No se encontraron productos con los filtros seleccionados</h4>
                <p className="text-secondary">Intenta ajustar los filtros para ver más resultados</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
