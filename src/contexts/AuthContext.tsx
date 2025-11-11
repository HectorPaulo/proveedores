    import { createContext, useState, useEffect, type ReactNode } from 'react';

    type User = { token?: string; [key: string]: never } | null;

    interface AuthContextType {
      isAuthenticated: boolean;
      user: User;
      login: (userData: User) => void;
      logout: () => void;
    }

    const AuthContext = createContext<AuthContextType>({
      isAuthenticated: false,
      user: null,
      login: () => {},
      logout: () => {},
    });
    export default AuthContext

    export const AuthProvider = ({ children }: { children: ReactNode }) => {
      const [user, setUser] = useState<User>(() => {
        try {
          const raw = localStorage.getItem('user');
          return raw ? JSON.parse(raw) : null;
        } catch {
          return null;
        }
      });

      const isAuthenticated = Boolean(user);

      const login = (userData: User) => {
        setUser(userData);
        try { localStorage.setItem('user', JSON.stringify(userData)); } catch {}
      };

      const logout = () => {
        setUser(null);
        try { localStorage.removeItem('user'); } catch {}
      };

      useEffect(() => {
        const onStorage = (e: StorageEvent) => {
          if (e.key === 'user') {
            setUser(e.newValue ? JSON.parse(e.newValue) : null);
          }
        };
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
      }, []);

      return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
          {children}
        </AuthContext.Provider>
      );
    };