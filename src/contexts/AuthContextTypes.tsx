import { createContext } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

interface User {
    id: string;
    name: string;
    email: string;
}

export const AuthContextTypes = createContext<AuthContextType | undefined>(undefined);
export type { AuthContextType, User };