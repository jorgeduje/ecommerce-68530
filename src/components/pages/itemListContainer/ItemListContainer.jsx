import { useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { useParams } from "react-router";
import { Box, CircularProgress, Skeleton, Stack } from "@mui/material";
import { PropagateLoader } from "react-spinners";
import ProductSkeleton from "../../common/productSkeleton/ProductSkeleton";
import { toast } from "sonner";

const ItemListContainer = () => {
  const { name } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
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

    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);

  // if (items.length === 0) {
  //   return  <CircularProgress />

  // }
  // <Box
  //   sx={{
  //     display: "flex",
  //     justifyContent: "center",
  //   }}
  // >
  //   <PropagateLoader size={40} color="red" />
  // </Box>;

  return (
    <div>
      <h1>Bienvenido a mi tienda</h1>

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
