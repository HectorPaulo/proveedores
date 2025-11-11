import axios from 'axios';

interface AuthResponse<T = any> {
    access_token: string;
    refresh_token: string;
    user: T;
}

class LoginController {
    private accessKey = 'access_token';
    private refreshKey = 'refresh_token';
    private userKey = 'user';
    private baseUrl = import.meta.env.VITE_URL ?? '';

    constructor() {
        const token = this.getAccessToken();
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
        if (this.baseUrl) {
            axios.defaults.baseURL = this.baseUrl;
        }
    }

    private setSession<T>(data: AuthResponse<T>) {
        localStorage.setItem(this.accessKey, data.access_token);
        localStorage.setItem(this.refreshKey, data.refresh_token);
        localStorage.setItem(this.userKey, JSON.stringify(data.user));
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.access_token}`;
    }

    private clearSession() {
        localStorage.removeItem(this.accessKey);
        localStorage.removeItem(this.refreshKey);
        localStorage.removeItem(this.userKey);
        delete axios.defaults.headers.common['Authorization'];
    }

    public getAccessToken(): string | null {
        return localStorage.getItem(this.accessKey);
    }

    public getRefreshToken(): string | null {
        return localStorage.getItem(this.refreshKey);
    }

    public getUser<T = any>(): T | null {
        const raw = localStorage.getItem(this.userKey);
        if (!raw) return null;
        try {
            return JSON.parse(raw) as T;
        } catch {
            return null;
        }
    }

    public async login<T = any>(email: string, password: string): Promise<T> {
        try {
            const res = await axios.post<AuthResponse<T>>('/auth/login', { email, password });
            if (!res || !res.data) {
                throw new Error('Respuesta inválida del servidor');
            }
            this.setSession(res.data);
            return res.data.user;
        } catch (err: any) {
            const msg =
                err?.response?.data?.message ||
                err?.response?.data?.error ||
                err?.message ||
                'Error al iniciar sesión';
            throw new Error(msg);
        }
    }

    public logout() {
        this.clearSession();
    }
}

export default new LoginController();