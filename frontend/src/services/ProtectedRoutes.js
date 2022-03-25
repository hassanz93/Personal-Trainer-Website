import { Navigate, Outlet } from "react-router-dom";
import { AuthContextProvider } from "./AuthContext"

const ProtectedRoutes = () => {
    let isAuth = AuthContextProvider
  return isAuth ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;