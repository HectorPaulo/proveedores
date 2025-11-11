import { createContext } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    refreshToken: () => Promise<boolean>;
}

interface User {
    id: string;
    email: string;
    fullName: string;
    role: string;
    isActive: boolean;
}

interface AuthTokens {
    access_token: string;
    refresh_token: string;
    token_type: string;
    expires_in: string;
    refresh_expires_in: string;
}

export const AuthContextTypes = createContext<AuthContextType | undefined>(undefined);
export type { AuthContextType, User, AuthTokens };