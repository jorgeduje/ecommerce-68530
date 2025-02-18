import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]); // [{} {} {}]

  const addToCart = (product) => {
    // setCart( product ) //  {}
    // setCart( [ product ] ) // [ {puma}  ] - [ {nike} ]
    // VERIFICAR SI YA EXISTE O NO EN EL CART
    setCart([...cart, product]);
  };
  const resetCart = () => {
    setCart([]);
  };

  const removeById = (id) => {
    console.log(id);
    // nuevo array ---> que tenga todos los elementos excepto el de este id
    // el filter siempre siempre siempre devuelve un array
    const newArray = cart.filter((elemento) => elemento.id !== id);
    setCart(newArray);
  };

  const getTotalAmount = () => {
    // reduce ---> reducir un array a una minima expresion
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity * elemento.price;
    }, 0);
    return total;
  };
  const getTotalQuantity = () => {
    let total = cart.reduce((acc, elemento) => {
      return acc + elemento.quantity;
    }, 0);
    return total;
  };

  let data = {
    cart,
    addToCart,
    removeById,
    resetCart,
    getTotalAmount,
    getTotalQuantity,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

// let name = "pepe";
// let obj = {
//   edad: 12,
//   name,
//   apellido: "perez",
// };
