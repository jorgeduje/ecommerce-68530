import CartIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Badge } from "@mui/material";

const CartWidget = () => {
  return (
    <div>
      <Badge badgeContent={100} color="secondary" showZero={true} max={120}>
        <CartIcon />
      </Badge>
    </div>
  );
};

export default CartWidget;

// const Badge =({x , a  , b, y })=>{
//   return <h2>

//   </h2>
// }
// <Badge />
