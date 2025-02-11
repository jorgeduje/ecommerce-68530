import { useEffect, useState } from "react";
import { products } from "../../../products";
import Counter from "../../common/counter/Counter";
import { useParams } from "react-router";

export const ItemDetail = () => {
  const { id } = useParams();

  // id de useParams
  const [item, setItem] = useState({});

  useEffect(() => {
    let producto = products.find((product) => product.id === id);
    setItem(producto);
  }, [id]);

  return (
    <div>
      <h2>{item.title}</h2>
      <h4>{item.description}</h4>
      <Counter item={item} />
    </div>
  );
};
