import { useEffect, useState } from "react";

const FetchingData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getProducts = fetch("https://jsonplaceholder.org/users");
    getProducts
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));

    const getProduct = fetch("https://jsonplaceholder.org/users/2");
    getProduct.then((res) => res.json()).then((res) => console.log(res));
  }, []);

  const createUser = () => {
    const user = {
      firstname: "pepito",
    };
    fetch("https://jsonplaceholder.org/users", {
      method: "POST",
      body: JSON.stringify(user),
    });
  };

  const updateUser = (id) => {
    fetch(`https://jsonplaceholder.org/users/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ price: 0 }),
      headers: {
        authorization: "4645a6dsad64d56a4sdasd64asd6as6d",
      },
    });
  };

  const deleteUser = (id) => {
    fetch(`https://jsonplaceholder.org/users/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div>
      <button onClick={createUser}>Crear nuevo usuario</button>

      {users.map((user) => {
        return (
          <div key={user.id} style={{ display: "flex", gap: "20px" }}>
            <h2>
              {user.firstname} - {user.lastname}
            </h2>

            <>
              <button onClick={() => updateUser(user.id)}>
                actualizar usuario
              </button>
              <button onClick={() => deleteUser(user.id)}>
                Eliminar usuario
              </button>
            </>
          </div>
        );
      })}
    </div>
  );
};

export default FetchingData;
