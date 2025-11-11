import React from 'react';
                            import Header from "../../components/Header/Header.tsx";
                            import Sidebar from "../../components/Sidebar/Sidebar.tsx";
                            import {useNavigate} from "react-router-dom";

                            const Dashboard: React.FC = () => {
                                const navigate = useNavigate();
                                const handleProveedorClick = () => {
                                    alert('La solicitud para registrarse como proveedor ha sido enviada exitosamente a un administrador y está en espera de ser aprobada.');
                                };

                                return (
                                    <div className="min-h-screen">
                                        <Header />
                                        <Sidebar />

                                        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                                {/* Card 1 */}
                                                <div className="rounded-lg shadow p-6">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <div className="rounded-full bg-white p-3">
                                                                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="ml-4">
                                                            <h3 className="text-lg font-semibold text-gray-100">Proveedores</h3>
                                                            <p className="text-3xl font-bold text-blue-600">247</p>
                                                            <p className="text-sm text-gray-500">Activos en el sistema</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card 2 */}
                                                <div className="rounded-lg shadow p-6">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <div className="bg-green-100 rounded-full p-3">
                                                                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="ml-4">
                                                            <h3 className="text-lg font-semibold text-gray-100">Productos</h3>
                                                            <p className="text-3xl font-bold text-green-600">89</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card 3 */}
                                                <div className="rounded-lg shadow p-6">
                                                    <div className="flex items-center">
                                                        <div className="flex-shrink-0">
                                                            <div className="bg-yellow-100 rounded-full p-3">
                                                                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <div className="ml-4">
                                                            <h3 className="text-lg font-semibold text-gray-100">Satisfacción del cliente</h3>
                                                            <p className="text-3xl font-bold text-yellow-600">98%</p>
                                                            <p className="text-sm text-gray-500">de satisfacción</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Actividad reciente */}
                                            <div className="mt-8 rounded-lg shadow">
                                                <div className="px-6 py-4">
                                                    <h3 className="text-2xl font-black text-gray-100">Explora por categoría</h3>
                                                    <p className="text-gray-600">Descubre proveedores especializados en diferentes sectores</p>
                                                </div>
                                                <div>
                                                    <div className="grid grid-cols-3 gap-x-4 ">
                                                        <div className="rounded-lg border-2 border-gray-950 bg-[#101010]">
                                                            <div className="flex flex-col items-center p-4 space-y-6">
                                                                <div className="bg-green-100 rounded-full p-4">
                                                                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                    </svg>
                                                                </div>
                                                                <h1 className="font-bold text-lg">Productos agrícolas</h1>
                                                                <p className="text-gray-400 text-sm font-semibold">Café, azúcar, frutas, maíz y más</p>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-lg border-2 border-gray-950 bg-[#101010]">
                                                            <div className="flex flex-col items-center p-4 space-y-6">
                                                                <div className="bg-blue-100 rounded-full p-4">
                                                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                    </svg>
                                                                </div>
                                                                <h1 className="font-bold text-lg">Productos manufacturados</h1>
                                                                <p className="text-gray-400 text-sm font-semibold">Playeras, zapatos, pantalones</p>
                                                            </div>
                                                        </div>
                                                        <div className="rounded-lg border-2 border-gray-950 bg-[#101010]">
                                                            <div className="flex flex-col items-center p-4 space-y-6">
                                                                <div className="bg-purple-100 rounded-full p-4">
                                                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                                    </svg>
                                                                </div>
                                                                <h1 className="font-bold text-lg">Cristalería</h1>
                                                                <p className="text-gray-400 text-sm font-semibold">Cristalería fina y decorativa</p>
                                                            </div>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </main>
                                                    <div className="mt-8 block w-full h-[300px] bg-[#080808] border-t-2 border-gray-950">
                                                        <div className="flex flex-col justify-center h-full gap-y-4 py-4">
                                                            <label className="text-4xl font-black">¿Eres un proveedor?</label>
                                                            <label>Únete a nuestra plataforma y conecta con miles de compradores potenciales</label>
                                                            <div className="flex flex-row justify-center">
                                                                <button
                                                                    onClick={handleProveedorClick}
                                                                    className="cursor-pointer hover:scale-105 rounded border px-4 py-2 mx-6 bg-amber-600 font-semibold"
                                                                >
                                                                    Registrarme como proveedor
                                                                </button>
                                                                <button onClick={() => navigate('/private/favorites')} className="cursor-pointer hover:scale-105 rounded border px-4 py-2 mx-6 bg-gray-800 font-semibold">Ver mis favoritos</button>
                                                            </div>
                                                        </div>

                                                    </div>
                                    </div>
                                );
                            };

                            export default Dashboard;