import {type JSX, useContext} from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated, user } = useContext(AuthContext);

    if (!isAuthenticated) return <Navigate to="/login" replace />;

    if (user?.role === 'admin') return <Navigate to="/admin/dashboard" replace />;
    if (user?.role === 'proveedor') return <Navigate to="/proveedor/dashboard" replace />;

    return children; // Cliente por defecto
};

export default ProtectedRoute;
