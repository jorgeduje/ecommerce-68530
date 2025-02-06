import { useFetch } from "../hooks/useFetch";

const Users = () => {
  const { data: users } = useFetch("https://jsonplaceholder.org/users");
  return (
    <div>
      <h1>Usuarios</h1>
      {users.map((user) => {
        return <h2 key={user.id}>{user.firstname}</h2>;
      })}
    </div>
  );
};

export default Users;

// const useState = ( valor)=>{

//     return [ , ]
// }
