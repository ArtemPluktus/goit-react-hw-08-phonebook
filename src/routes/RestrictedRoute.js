import authSelectors from "../redux/authSelectors.js";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
    const isLogin = useSelector(authSelectors.getIsLoggedIn);
    return isLogin ? <Navigate to={redirectTo} /> : <Component />;
};