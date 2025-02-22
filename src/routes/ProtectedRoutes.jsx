import { Navigate, Outlet } from "react-router";

const ProtectedRoutes = () => {
  let rol = "admin";
  return <div>{rol === "admin" ? <Outlet /> : <Navigate to="/" />}</div>;
};

export default ProtectedRoutes;
