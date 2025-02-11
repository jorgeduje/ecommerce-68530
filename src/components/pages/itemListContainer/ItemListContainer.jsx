import { useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useParams } from "react-router";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    // let arrayFiltrado;
    // if (name) {
    //   arrayFiltrado = products.filter((elemento) => elemento.category === name);
    // }

    let arrayFiltrado = products.filter(
      (elemento) => elemento.category === name
    );

    const getProducts = new Promise((resolve, reject) => {
      let permiso = true;
      if (permiso) {
        resolve(name ? arrayFiltrado : products);
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
  }, [name]);

  // {}.title
  // undefined
  // console.log(items[0]?.title);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "16px",
      }}
    >
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
