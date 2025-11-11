export const API_BASE_URL = import.meta.env.VITE_URL || 'https://ecommerce-k108.onrender.com/api/v1';

export const API_ENDPOINTS = {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REFRESH: `${API_BASE_URL}/auth/refresh`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    // Agrega otros endpoints aquí según los necesites
};