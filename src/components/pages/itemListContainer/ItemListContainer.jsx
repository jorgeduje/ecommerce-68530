import { useState } from "react";
import { products } from "../../../products";
import ProductCard from "../../common/productCard/ProductCard";
import { useEffect } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2>Aca van a ir los productos</h2>
      <TextField label="Contraseña" variant="outlined" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
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
      {/* <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        sx={{
          backdropFilter: "blur(6px)",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <Typography variant="h6">Text in a modal</Typography>
          <Typography sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal> */}
    </div>
  );
};

export default ItemListContainer;
