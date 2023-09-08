import authSelectors from '../../redux/authSelectors.js';
import { Navigate } from 'react-router-dom';


export default function PrivateRoute({
    component: Component,
    redirectTo = '/',
}) {
    const shouldRedirect = !authSelectors.getIsLoggedIn && !authSelectors.getIsRefreshingUser;
    return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}