import { useContext } from 'react';
import { AuthContextTypes } from '../contexts/AuthContextTypes.tsx';

export const useAuth = () => {
    const context = useContext(AuthContextTypes);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};