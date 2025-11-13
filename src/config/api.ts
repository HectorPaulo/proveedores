export const API_BASE_URL = import.meta.env.VITE_URL || 'https://ecommerce-k108.onrender.com/api/v1';

export const API_ENDPOINTS = {
    LOGIN: `${API_BASE_URL}/auth/login`,
    REFRESH: `${API_BASE_URL}/auth/refresh`,
    REGISTER: `${API_BASE_URL}/auth/register`,
    PROVIDER_REQUEST: `${API_BASE_URL}/provider-requests`, // Endpoint para solicitudes de proveedor
    // Agrega otros endpoints aquí según los necesites
};