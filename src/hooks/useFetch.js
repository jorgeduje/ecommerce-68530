import { useEffect, useState } from "react";

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = fetch(endpoint);
    getData
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return { data: data, status: 200, message: "un mensaje" };
};

// useFetch( "https://jsonplaceholder.org/users") --> esos datos
// useFetch( "https://jsonplaceholder.org/posts") --> esos datos
// useFetch( "https://jsonplaceholder.org/comments") --> esos datos

// // hay funciones
// const sumar = ()=>{
//     return 10 + 10
// }

// // hay componentes
// const Home = ()=>{
//     return <h1>Este es el home</h1>
// }

// // hooks
// const useFetch = ()=>{
//  // puedo usar cosas de react
//     return javascript
// }
