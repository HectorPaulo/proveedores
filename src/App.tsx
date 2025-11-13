import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { useAuth } from './hooks/useAuth';
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import Team from "./pages/Team/Team.tsx";
import Login from "./pages/Login/Login.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Providers from "./pages/Providers/Providers.tsx";
import Favorites from "./pages/Favorites/Favorites.tsx";
import ProductDetail from "./pages/ProductDetail/ProductDetail.tsx";
import RegistroProveedor from "./pages/RegistroProveedor/RegistroProveedor.tsx";
import Profile from "./pages/Profile/Profile.tsx";
import Register from "./pages/Register/Register.tsx";
import Security from "./pages/Security/Security.tsx";
import AdminDashboard from "./pages/SysAdmin/Dashboard/AdminDashboard.tsx";
import ProviderDashboard from "./pages/Provider/Dashboard/ProviderDashboard.tsx";
import ProviderProducts from "./pages/Provider/Products/ProviderProducts.tsx";
import type {JSX} from "react";
import Solicitudes from "./pages/SysAdmin/Solicitudes/Solicitudes.tsx";
import EditProfile from "./pages/Profile/Edit/EditProfile.tsx";

function App() {
  const RoleProtected = ({ children, allowedRoles }: { children: JSX.Element; allowedRoles?: string[] }) => {
    const { isAuthenticated, user } = useAuth();
    if (!isAuthenticated) return <Navigate to="/login" replace />;

    if (allowedRoles && user?.role) {
      if (!allowedRoles.includes(user.role)) {
        if (user.role === 'admin') return <Navigate to="/admin/dashboard" replace />;
        if (user.role === 'proveedor') return <Navigate to="/proveedor/dashboard" replace />;
        return <Navigate to="/private/dashboard" replace />;
      }
    }
    return children;
  };

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/private/dashboard"
            element={
              <RoleProtected allowedRoles={['cliente']}>
                <Dashboard />
              </RoleProtected>
            }
          />
            <Route
                path="/private/proveedores"
                element={
                    <RoleProtected allowedRoles={['cliente', 'admin', 'proveedor']}>
                        <Providers />
                    </RoleProtected>
                }
            />
            <Route
                path="/private/favorites"
                element={
                <RoleProtected allowedRoles={['cliente']}>
                    <Favorites />
                </RoleProtected>
                }
            />
            <Route
                path={`/private/proveedores/:id/:nombre`}
                element={
                <RoleProtected allowedRoles={['cliente', 'admin', 'proveedor']}>
                    <ProductDetail />
                </RoleProtected>
                }
            />
            <Route
                path="/private/registro-proveedor"
                element={
                <RoleProtected allowedRoles={['cliente']}>
                    <RegistroProveedor />
                </RoleProtected>
                }
            />
            <Route
                path="/private/profile"
                element={
                <RoleProtected allowedRoles={['cliente', 'proveedor', 'admin']}>
                    <Profile />
                </RoleProtected>
                }
            />
            <Route
                path="/private/profile/edit"
                element={
                <RoleProtected allowedRoles={['cliente', 'proveedor', 'admin']}>
                    <EditProfile />
                </RoleProtected>
                }
            />
            <Route
                path="/private/profile/security"
                element={
                <RoleProtected allowedRoles={['cliente']}>
                    <Security />
                </RoleProtected>
                }
            />
            <Route
                path="/admin/dashboard"
                element={
                  <RoleProtected allowedRoles={['admin']}>
                      <AdminDashboard />
                  </RoleProtected>
                }
              />
            <Route
                path="/admin/solicitudes"
                element={
                  <RoleProtected allowedRoles={['admin']}>
                      <Solicitudes />
                  </RoleProtected>
                }
              />
              <Route
                path="/proveedor/dashboard"
                element={
                  <RoleProtected allowedRoles={['proveedor']}>
                      <ProviderDashboard />
                  </RoleProtected>
                }
              />
              <Route
                path="/proveedor/productos"
                element={
                  <RoleProtected allowedRoles={['proveedor']}>
                      <ProviderProducts />
                  </RoleProtected>
                }
              />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
