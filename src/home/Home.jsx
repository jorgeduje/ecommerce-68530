import CajaIcono from "../CajaIcono";
import "./home.css";
const Home = () => {
  const nombre = "pepe";
  const edad = 15;

  const sumar = () => {
    console.log("estoy sumando");
  };

  return (
    <section className="container">
      <h2 className="mi-clase">hola {nombre}</h2>

      <h2>Aca van a ir los productos</h2>
      <CajaIcono />
      <CajaIcono />
      <CajaIcono />
      <CajaIcono />

      <button onClick={sumar}>Hola Soy el boton que suma</button>
    </section>
  );
};

export default Home;
