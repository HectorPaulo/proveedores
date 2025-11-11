import React, { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { AuthContextTypes } from './AuthContextTypes.tsx';
import type { User, AuthTokens } from './AuthContextTypes.tsx';
import { API_ENDPOINTS } from '../config/api';

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
        try {
            const response = await fetch(API_ENDPOINTS.LOGIN, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error('Credenciales inválidas');
            }

            const data = await response.json();
            
            // Guardar información del usuario
            const userData: User = {
                id: data.user.id,
                email: data.user.email,
                fullName: data.user.fullName,
                role: data.user.role,
                isActive: data.user.isActive
            };

            // Guardar tokens
            const tokens: AuthTokens = {
                access_token: data.access_token,
                refresh_token: data.refresh_token,
                token_type: data.token_type,
                expires_in: data.expires_in,
                refresh_expires_in: data.refresh_expires_in
            };

            setIsAuthenticated(true);
            setUser(userData);
            
            // Guardar en localStorage
            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem('user', JSON.stringify(userData));
            localStorage.setItem('access_token', tokens.access_token);
            localStorage.setItem('refresh_token', tokens.refresh_token);
            localStorage.setItem('token_type', tokens.token_type);
            localStorage.setItem('expires_in', tokens.expires_in);
            localStorage.setItem('refresh_expires_in', tokens.refresh_expires_in);
            
            // Guardar timestamp para calcular expiración
            const expirationTime = Date.now() + (15 * 60 * 1000); // 15 minutos
            localStorage.setItem('token_expiration', expirationTime.toString());
            
            return true;
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            return false;
        }
    };

    const refreshToken = async (): Promise<boolean> => {
        try {
            const refresh_token = localStorage.getItem('refresh_token');
            
            if (!refresh_token) {
                throw new Error('No refresh token available');
            }

            const response = await fetch(API_ENDPOINTS.REFRESH, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refresh_token }),
            });

            if (!response.ok) {
                throw new Error('Failed to refresh token');
            }

            const data = await response.json();
            
            // Actualizar información del usuario
            const userData: User = {
                id: data.user.id,
                email: data.user.email,
                fullName: data.user.fullName,
                role: data.user.role,
                isActive: data.user.isActive
            };

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            
            // Actualizar access token
            localStorage.setItem('access_token', data.access_token);
            localStorage.setItem('token_type', data.token_type);
            localStorage.setItem('expires_in', data.expires_in);
            
            // Actualizar timestamp de expiración
            const expirationTime = Date.now() + (15 * 60 * 1000); // 15 minutos
            localStorage.setItem('token_expiration', expirationTime.toString());
            
            console.log('Token refreshed successfully');
            return true;
        } catch (error) {
            console.error('Error al refrescar el token:', error);
            // Si falla el refresh, cerrar sesión
            logout();
            return false;
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        
        // Limpiar todo el localStorage
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('token_type');
        localStorage.removeItem('expires_in');
        localStorage.removeItem('refresh_expires_in');
        localStorage.removeItem('token_expiration');
    };

    // Auto-refresh del token antes de que expire
    useEffect(() => {
        if (!isAuthenticated) return;

        const checkTokenExpiration = () => {
            const expirationTime = localStorage.getItem('token_expiration');
            
            if (!expirationTime) return;

            const timeUntilExpiration = parseInt(expirationTime) - Date.now();
            
            // Refrescar el token 2 minutos antes de que expire
            if (timeUntilExpiration < 2 * 60 * 1000 && timeUntilExpiration > 0) {
                console.log('Refrescando token automáticamente...');
                refreshToken();
            }
        };

        // Verificar cada minuto
        const interval = setInterval(checkTokenExpiration, 60 * 1000);
        
        // Verificar inmediatamente al montar
        checkTokenExpiration();

        return () => clearInterval(interval);
    }, [isAuthenticated]);

    const value = {
        isAuthenticated,
        user,
        login,
        logout,
        refreshToken
    };

    return <AuthContextTypes.Provider value={value}>{children}</AuthContextTypes.Provider>;
};