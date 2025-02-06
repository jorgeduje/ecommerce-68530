import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1738194670/68530/images_rrtrpk.png"
        alt=""
      />

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
