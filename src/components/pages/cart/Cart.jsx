import { Link } from "react-router";

const Cart = () => {
  return (
    <div>
      <h1>Aca va ir el carrito la clase que viene</h1>

      {/* Aca va todo lo relacionado al carrito  */}

      <Link to="/checkout">finalizar compra</Link>
    </div>
  );
};

export default Cart;
