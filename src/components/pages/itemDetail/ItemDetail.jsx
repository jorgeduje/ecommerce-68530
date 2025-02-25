import { useEffect, useState } from "react";
// import { products } from "../../../products";
import Counter from "../../common/counter/Counter";
import { useParams } from "react-router";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
export const ItemDetail = () => {
  const { id } = useParams();
  // const [cart, setCart] = useState([]);

  // id de useParams
  const [item, setItem] = useState({});

  useEffect(() => {
    let productCollection = collection(db, "products");
    let refDoc = doc(productCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setItem({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <div>
      <h2>{item.title}</h2>
      <img src={item.imageUrl} alt="" />
      <h4>{item.description}</h4>
      <Counter item={item} />
    </div>
  );
};
