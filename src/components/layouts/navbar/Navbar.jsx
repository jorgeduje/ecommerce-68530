import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  console.log("hola");
  return (
    <div>
      <h3>logo</h3>
      <ul>
        <li>Todas</li>
        <li>Urbanas</li>
        <li>Deportivas</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
