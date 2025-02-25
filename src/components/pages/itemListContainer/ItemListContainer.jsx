import { useState } from "react";

import ProductCard from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Box } from "@mui/material";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";
import { db } from "../../../firebaseConfig";
import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
// import { products } from "../../../products";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]); // {id, title ....}

  useEffect(() => {
    const coleccionDeProductos = collection(db, "products");
    let consulta = coleccionDeProductos;

    if (name) {
      const coleccionFiltrada = query(
        coleccionDeProductos,
        where("category", "==", name)
      );
      consulta = coleccionFiltrada;
    }

    const getProducts = getDocs(consulta);

    getProducts.then((res) => {
      let newArray = res.docs.map((elemento) => {
        return { id: elemento.id, ...elemento.data() };
      });
      setItems(newArray);
    });
  }, [name]);

  // const rellenar = () => {
  //   let productsCollecion = collection(db, "products");

  //   products.forEach((product) => {
  //     addDoc(productsCollecion, product);
  //   });
  // };

  return (
    <div>
      <h1>Bienvenido a mi tienda</h1>
      {/* <button onClick={rellenar}>Rellenar db</button> */}

      {items.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <ProductSkeleton />
          <ProductSkeleton />
          <ProductSkeleton />
        </Box>
      ) : (
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
      )}

      {/* {false ? <h2>hola</h2> : <h2>chau</h2>} */}
    </div>
  );
};

export default ItemListContainer;
// if con return temprano
// ternario
// el and

// const persona = {
//   name: "pepe",
//   apellido: "perez"
// }

// persona.apellido = "perez"
