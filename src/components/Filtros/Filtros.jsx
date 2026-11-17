import { useState } from 'react';
import './Filtros.css';

function Filtros({ onFiltrosChange }) {
  const [filtros, setFiltros] = useState({
    busqueda: '',
    marca: 'todas',
    precioMin: 0,
    precioMax: 500000
  });

  const handleChange = (campo, valor) => {
    const nuevosFiltros = {
      ...filtros,
      [campo]: valor
    };
    setFiltros(nuevosFiltros);
    onFiltrosChange(nuevosFiltros);
  };

  const limpiarFiltros = () => {
    const filtrosIniciales = {
      busqueda: '',
      marca: 'todas',
      precioMin: 0,
      precioMax: 500000
    };
    setFiltros(filtrosIniciales);
    onFiltrosChange(filtrosIniciales);
  };

  return (
    <div className="filtros-container">
      <h3 className="filtros-titulo">Filtros</h3>
      
      {/* Búsqueda */}
      <div className="filtro-grupo">
        <label className="filtro-label">Buscar</label>
        <input
          type="text"
          className="form-control filtro-input"
          placeholder="Buscar producto..."
          value={filtros.busqueda}
          onChange={(e) => handleChange('busqueda', e.target.value)}
        />
      </div>

      {/* Marca */}
      <div className="filtro-grupo">
        <label className="filtro-label">Tipo de producto</label>
        <select
          className="form-select filtro-select"
          value={filtros.marca}
          onChange={(e) => handleChange('marca', e.target.value)}
        >
          <option value="todas">Todas las marcas</option>
          <option value="Nike">Nike</option>
          <option value="Adidas">Adidas</option>
          <option value="Puma">Puma</option>
          <option value="Reebok">Reebok</option>
          <option value="New Balance">New Balance</option>
        </select>
      </div>

      {/* Rango de Precio */}
      <div className="filtro-grupo">
        <label className="filtro-label">
          Precio: ${filtros.precioMin.toLocaleString("es-CO")} - ${filtros.precioMax.toLocaleString("es-CO")}
        </label>
        <div className="rango-precio">
          <input
            type="range"
            className="form-range"
            min="0"
            max="500000"
            step="10000"
            value={filtros.precioMin}
            onChange={(e) => handleChange('precioMin', Number(e.target.value))}
          />
          <small className="text-muted">Mínimo: ${filtros.precioMin.toLocaleString("es-CO")}</small>
        </div>
        <div className="rango-precio">
          <input
            type="range"
            className="form-range"
            min="0"
            max="500000"
            step="10000"
            value={filtros.precioMax}
            onChange={(e) => handleChange('precioMax', Number(e.target.value))}
          />
          <small className="text-muted">Máximo: ${filtros.precioMax}</small>
        </div>
      </div>

      {/* Botón Limpiar */}
      <button 
        className="btn btn-outline-secondary btn-sm w-100 mt-3"
        onClick={limpiarFiltros}
      >
        Limpiar Filtros
      </button>
    </div>
  );
}

export default Filtros;