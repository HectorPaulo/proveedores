import React, { useState, useMemo } from 'react';
import { AuthContextTypes, type User } from './AuthContextTypes';
import loginController from '../controllers/Auth/Login/LoginController';

interface Props {
    children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(() => {
        try {
            const raw = localStorage.getItem('user');
            return raw ? (JSON.parse(raw) as User) : null;
        } catch {
            return null;
        }
    });

    const isAuthenticated = !!user;

    const login = async (email: string, password: string): Promise<boolean> => {
        try {
            const loggedUser = await loginController.login<User>(email, password);
            setUser(loggedUser);
            return true;
        } catch {
            return false;
        }
    };

    const logout = () => {
        loginController.logout();
        setUser(null);
    };

    const value = useMemo(
        () => ({
            isAuthenticated,
            user,
            login,
            logout,
        }),
        [isAuthenticated, user]
    );

    return <AuthContextTypes.Provider value={value}>{children}</AuthContextTypes.Provider>;
};

export default AuthProvider;