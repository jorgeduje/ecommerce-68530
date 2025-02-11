import { Button } from "@mui/material";
import { Link } from "react-router";

const ProductCard = ({ price, title, stock, imageUrl, id }) => {
  // const { price, title, stock } = props;

  return (
    <div style={{ border: "2px solid black", width: "300px" }}>
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <h2>{price}</h2>
      <h2>{stock} </h2>
      <Link to={`/itemDetail/${id}`}>
        <Button variant="outlined">Ver detalle</Button>
      </Link>
    </div>
  );
};

export default ProductCard;
