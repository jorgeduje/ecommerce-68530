import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    telefono: "",
    talle: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(user);
    console.log(extras);
    // la logica que hacemos para enviar al backend
    // fetch con el metodo post para crear un a orden compra
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target; // "nombre" - "email" - "telefono"
    setUser({ ...user, [name]: value });
  };

  const arrayTalles = [
    { label: "talle 1", value: "1" },
    { label: "talle 2", value: "2" },
    { label: "talle 3", value: "3" },
    { label: "talle 12", value: "4" },
  ];
  const [extras, setExtras] = useState([]);

  const handleCheck = (evento) => {
    const { value, checked } = evento.target;
    if (checked) {
      setExtras([...extras, value]); // ["cordones"] --> ["cordones", "plantillas", "protectores"]
    } else {
      // cambiar mi estado con todo lo que tenga
      //  previamente pero sin lo que di click
      const extrasFiltered = extras.filter((extra) => extra !== value);
      setExtras(extrasFiltered);
    }
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
        <select name="talle" onChange={handleChange}>
          {arrayTalles.map((talle) => {
            return (
              <option
                key={talle.value}
                value={talle.value}
                label={talle.label}
              />
            );
          })}
        </select>
        <div style={{ margin: "50px" }}>
          <div style={{ display: "flex", gap: "10px" }}>
            <input type="checkbox" value="cordones" onChange={handleCheck} />
            <label>extra cordones</label>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input type="checkbox" value="plantillas" onChange={handleCheck} />
            <label>extra plantillas</label>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            <input type="checkbox" value="protectores" onChange={handleCheck} />
            <label>extra protectores</label>
          </div>
        </div>

        <button>comprar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Checkout;

{
  /* <button onClick={sumar}>Sumar</button>
      <button onClick={() => sumar(1, 5, 2)}>Sumar</button> */
}
// const handleChange = (evento) => {
//     // const { target } = evento;
//     // const { value, name } = target;
//     const { value, name } = evento.target;

//     if (name === "nombre") {
//       setUser({ ...user, nombre: value });
//     } else if (name === "email") {
//       setUser({ ...user, email: value });
//     } else if (name === "telefono") {
//       setUser({ ...user, telefono: value }); //
//     }
//   };

// dot notation
//   console.log(perro."nombre");
// bracket notation
//   console.log(perro["nombre"]);
//   const capturarNombre = (evento) => {
//     setUser({ ...user, nombre: evento.target.value }); //
//   };
//   const capturarEmail = (evento) => {
//     setUser({ ...user, email: evento.target.value }); //
//   };
//   const capturarTelefono = (evento) => {
//     setUser({ ...user, telefono: evento.target.value }); //
//   };
// const perro = {
//   raza: "callejero",
//   color: "blanco",
//   nombre: "jack",
// };
// perro.color = "marron";
// perro.edad = 15;

// console.log(perro);
