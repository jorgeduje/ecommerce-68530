import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(user);
    // la logica que hacemos para enviar al backend
    // fetch con el metodo post para crear un a orden compra
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="nombre"
          name="nombre"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="telefono"
          name="telefono"
          onChange={handleChange}
        />

        <button>comprar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;
