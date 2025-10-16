import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
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

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/private/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
            <Route
                path="/private/proveedores"
                element={
                    <ProtectedRoute>
                        <Providers />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/private/favorites"
                element={
                <ProtectedRoute>
                    <Favorites />
                </ProtectedRoute>
                }
            />
            <Route
                path={`/private/proveedores/:id/:nombre`}
                element={
                <ProtectedRoute>
                    <ProductDetail />
                </ProtectedRoute>
                }
            />
            <Route
                path="/private/registro-proveedor"
                element={
                <ProtectedRoute>
                    <RegistroProveedor />
                </ProtectedRoute>
                }
            />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
