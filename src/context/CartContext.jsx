import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe usarse dentro de un CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
//Guardado de carrito en localStorage automatico
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Calcular cantidad total de productos en el carrito
  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.cantidad, 0);
  };

  // Calcular el total del precio
  const calcularTotal = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0).toFixed(2);
  };

  // Aumentar cantidad de un producto
  const aumentarCantidad = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.cantidad < item.stock
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  };

  // Disminuir cantidad de un producto
  const disminuirCantidad = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.cantidad > 1
          ? { ...item, cantidad: item.cantidad - 1 }
          : item
      )
    );
  };

  // Eliminar producto del carrito
  const eliminarProducto = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Agregar producto al carrito
  const agregarAlCarrito = (producto) => {
    setCartItems(prevItems => {
      const itemExistente = prevItems.find(item => item.id === producto.id);
      
      if (itemExistente) {
        // Si ya existe, aumentar cantidad
        return prevItems.map(item =>
          item.id === producto.id && item.cantidad < item.stock
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        // Si no existe, agregar nuevo item
        return [...prevItems, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Limpiar carrito
  const limpiarCarrito = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    getTotalItems,
    calcularTotal,
    aumentarCantidad,
    disminuirCantidad,
    eliminarProducto,
    agregarAlCarrito,
    limpiarCarrito
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
