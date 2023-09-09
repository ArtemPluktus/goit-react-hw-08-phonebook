import authSelectors from "../redux/authSelectors.js";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
    const isLogin = useSelector(authSelectors.getIsLoggedIn);
    const isRefreshing = useSelector(authSelectors.getIsRefreshingUser);
    const shouldRedirects = !isLogin && !isRefreshing;
    return shouldRedirects ? <Navigate to={redirectTo} /> : <Component />;
};