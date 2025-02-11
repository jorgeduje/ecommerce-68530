import CartWidget from "../../common/cartWidget/CartWidget";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "steelblue",
        padding: "8px",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1738194670/68530/images_rrtrpk.png"
          alt=""
          style={{
            width: "100px",
          }}
        />
      </Link>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          listStyle: "none",
        }}
      >
        <li>Todas</li>
        <Link to="/category/urbanas">Urbanas</Link>
        <Link to="/category/deportivas">Deportivas</Link>
      </ul>
      <Link to="/cart" className="">
        <CartWidget />
      </Link>
    </div>
  );
};

export default Navbar;
