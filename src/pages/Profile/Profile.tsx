import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

interface User {
    id?: string;
    name: string;
    email: string;
    phone?: string;
    address?: string;
    avatarUrl?: string;
    orders?: { id: string; amount: number; date: string }[];
}

const Profile: React.FC = () => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        try {
            const raw = localStorage.getItem('user');
            if (raw) {
                setUser(JSON.parse(raw));
                return;
            }
        } catch {
            console.warn('No user in localStorage or invalid JSON');
        }

        setUser({
            name: 'Nombre Apellido',
            email: 'usuario@ejemplo.com',
            phone: '',
            address: '',
            avatarUrl: '',
            orders: []
        });
    }, []);

    const initials = (name?: string) => {
        if (!name) return 'U';
        return name
            .split(' ')
            .map(n => n[0] || '')
            .slice(0, 2)
            .join('')
            .toUpperCase();
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    const orders = user?.orders || [];

    return (
        <>
            <header className="bg-gradient-to-r from-amber-500 to-amber-700">
                <div className="max-w-7xl mx-auto ">
                    <div className="flex justify-start items-end py-6 space-x-6">
                        <button onClick={() => navigate(-1)} className="flex flex-row space-x-6 cursor-pointer hover:scale-105 hover:animate-pulse">
                            <ArrowBackIosNewRoundedIcon />
                        <h1 className="font-semibold text-lg">Volver</h1>
                        </button>
                    </div>
                </div>
            </header>
            <div className="min-h-screen">
                {/* Cover */}
                <div className="w-full h-40 bg-gradient-to-r from-amber-500 to-amber-700 flex items-end">
                    <div className="container mx-auto px-4 pb-4">
                        <h2 className="text-white text-9xl font-black">{user?.name}</h2>
                    </div>
                </div>

                <main className="container mx-auto px-4 -mt-4">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                        {/* Left panel - profile card */}
                        <aside className="col-span-1 bg-white rounded-lg shadow p-6">
                            <div className="flex items-center gap-4">
                                <div
                                    className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center text-2xl text-gray-700 overflow-hidden"
                                    aria-hidden={!user?.avatarUrl}
                                >
                                    {user?.avatarUrl ? (
                                        <img
                                            src={user.avatarUrl}
                                            alt={`Avatar de ${user.name}`}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <span className="font-black">{initials(user?.name)}</span>
                                    )}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-800">{user?.name || 'Usuario'}</h3>
                                    <p className="text-sm text-gray-600">{user?.email}</p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-2 text-sm">
                                <div>
                                    <span className="font-semibold">Teléfono: </span>
                                    <span className="text-gray-600">{user?.phone || 'No especificado'}</span>
                                </div>
                                <div>
                                    <span className="font-semibold">Dirección: </span>
                                    <span className="text-gray-600">{user?.address || 'No especificada'}</span>
                                </div>
                            </div>

                            <div className="mt-20 flex flex-col gap-2">
                                <Link
                                    to="/profile/edit"
                                    className="w-full text-center py-2 px-3 bg-amber-500 text-white rounded hover:bg-blue-700"
                                >
                                    Editar perfil
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-center py-2 px-3 border border-gray-600 rounded text-gray-800 hover:bg-red-700 hover:text-white cursor-pointer"
                                >
                                    Cerrar sesión
                                </button>
                            </div>
                        </aside>

                        {/* Right panel - main content */}
                        <section className="col-span-1 lg:col-span-3 space-y-6">

                            {/* Recent activity */}
                            <div className="bg-white rounded-lg shadow p-4">
                                <h4 className="text-lg font-medium mb-3 text-gray-700">Actividad reciente</h4>
                                {orders.length === 0 ? (
                                    <p className="text-sm text-gray-500">No hay actividad reciente.</p>
                                ) : (
                                    <ul className="space-y-2">
                                        {orders.slice(0, 6).map(order => (
                                            <li key={order.id} className="flex justify-between items-center">
                                                <div>
                                                    <div className="text-sm font-medium">Orden #{order.id}</div>
                                                    <div className="text-xs text-gray-500">{new Date(order.date).toLocaleString()}</div>
                                                </div>
                                                <div className="text-sm font-semibold">${order.amount.toFixed(2)}</div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            {/* Account settings */}
                            <div className="bg-white rounded-lg shadow p-4">
                                <h4 className="text-lg font-medium mb-3 text-gray-700">Configuración de la cuenta</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Link to="/private/profile/security" className="block p-3 border rounded hover:text-gray-800 text-gray-600 border-gray-600">
                                        Cambiar contraseña
                                    </Link>
                                    <Link to="/profile/delete" className="block p-3 border rounded hover:bg-gray-50 text-red-600">
                                        Eliminar cuenta
                                    </Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Profile;