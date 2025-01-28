const ProductCard = ({ price, title, stock }) => {
  // const { price, title, stock } = props;

  return (
    <div style={{ border: "2px solid black" }}>
      <h2>{title}</h2>
      <h2>{price}</h2>
      <h2>{stock} </h2>
    </div>
  );
};

export default ProductCard;

// const sumar = (a, b)=>{
//     return a + b
// }

// sumar(5, 6) ---> 11
// sumar(2, 3) ---> 5

// sumar( 2,  4, 6 )
// <Sumar pepe={2} juan={4} hola={6} x={true} /> --->
//  { pepe:2, juan: 4, hola: 6, x:true } ---> props
//  props.pepe 2
//  props.juan 4
