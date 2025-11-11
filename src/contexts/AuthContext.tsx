import React, { useState } from 'react';
import type { ReactNode } from 'react';
import { AuthContextTypes } from './AuthContextTypes.tsx';
import type { User } from './AuthContextTypes.tsx';

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
        () => localStorage.getItem('isAuthenticated') === 'true'
    );
    const [user, setUser] = useState<User | null>(
        () => {
            const userData = localStorage.getItem('user');
            return userData ? JSON.parse(userData) : null;
        }
    );

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulación de login - en una aplicación real, aquí harías la petición al backend
        if (email === 'admin@proveedores.com' && password === 'admin123') {
            const userData: User = {
                id: '1',
                name: 'Peblo',
                email: email
            };

            setIsAuthenticated(true);
            setUser(userData);
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const register = async (name: string, email: string, _password: string): Promise<boolean> => {
        // Simulación de registro - en producción harías una petición al backend
        // Aqui aceptamos cualquier email que no esté exactamente como el admin de ejemplo
        if (email === 'admin@proveedores.com') {
            // Simulamos fallo si se intenta registrar con el email del admin
            return false;
        }

        const userData: User = {
            id: String(Date.now()),
            name,
            email
        };

        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
        return true;
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
    };

    const value = {
        isAuthenticated,
        user,
        login,
        logout,
        register
    };

    return <AuthContextTypes.Provider value={value}>{children}</AuthContextTypes.Provider>;
};