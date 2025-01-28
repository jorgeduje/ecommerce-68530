import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greeting }) => {
  // { gretting: "hola como estas"}
  //   console.log(props.gretting);
  //   console.log(props.otroSaludo);
  console.log("otro log");
  return (
    <div>
      <h2>{greeting}</h2>
      <ProductCard title="nike" price={200} stock={1} />
      <ProductCard title="puma" price={300} stock={31} />
      <ProductCard title="wilson" price={500} stock={2} />
      <ProductCard title="jaguar" price={100} stock={14} />
    </div>
  );
};

export default ItemListContainer;
