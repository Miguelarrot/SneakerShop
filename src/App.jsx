import IndexRoute from "./IndexRoute"
import { CartProvider } from "./context/CartContext";

function App() {
  
  return (
    <CartProvider>
      <IndexRoute />
    </CartProvider>
  );
}

export default App;
