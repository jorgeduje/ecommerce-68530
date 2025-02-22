import Navbar from "./components/layouts/navbar/Navbar";
import Cart from "./components/pages/cart/Cart";
import Checkout from "./components/pages/checkout/Checkout";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

import { BrowserRouter, Routes, Route } from "react-router";
import CartContextProvider from "./context/CartContext";
import DarkModeContextProvider from "./context/DarkModeContext";
import { Toaster } from "sonner";
import Estadisticas from "./components/pages/estadisticas/Estadisticas";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Formulario from "./components/pages/formulario/Formulario";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Toaster duration={2000} richColors />
        {/* <DarkModeContextProvider> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/formulario" element={<Formulario />} />

          <Route path="*" element={<h2>404 not found</h2>} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/estadisticas" element={<Estadisticas />} />
            <Route path="/otra" element={<h3>Otra ruta protegida</h3>} />
          </Route>
        </Routes>
        {/* </DarkModeContextProvider> */}
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
