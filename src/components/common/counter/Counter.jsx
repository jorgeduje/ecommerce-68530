import { useState, useEffect } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);
  const [nombre, setNombre] = useState("pepe");
  const [variable, setVariable] = useState(null);

  const cambiarNombre = () => {
    if (nombre === "pepe") {
      setNombre("juan");
    } else {
      setNombre("pepe");
    }
  };

  useEffect(() => {
    console.log("una peticion a un servidor en la india");
    // setVariable([]);
  }, [nombre, contador]); // array de dependencias

  console.log("una peticion fuera del effect");

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      {/* {variable.map()} */}
      <button onClick={sumar}>sumar</button>
      <button onClick={cambiarNombre}>Cambiar nombre</button>
      <h2>{nombre}</h2>
    </div>
  );
};

export default Counter;
