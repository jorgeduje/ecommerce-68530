const ProductCard = ({ price, title, stock, imageUrl, id }) => {
  // const { price, title, stock } = props;

  return (
    <div style={{ border: "2px solid black" }}>
      <img src={imageUrl} alt="" />
      <h2>{title}</h2>
      <h2>{price}</h2>
      <h2>{stock} </h2>
    </div>
  );
};

export default ProductCard;
