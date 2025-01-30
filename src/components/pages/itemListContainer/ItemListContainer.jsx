import { useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useEffect } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      let permiso = true;
      if (permiso) {
        resolve(products);
      } else {
        reject({ status: 400, message: "algo salio mal" });
      }
    });

    // let items = []
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // {}.title
  // undefined
  // console.log(items[0]?.title);
  return (
    <div>
      <h2>Aca van a ir los productos</h2>
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            price={item.price}
            title={item.title}
            stock={item.stock}
            imageUrl={item.imageUrl}
            id={item.id}
            description={item.description}
            category={item.category}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
