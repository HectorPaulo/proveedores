import React from 'react';
import Box from "@mui/material/Box";
import Header from "../../../components/Header/Header.tsx";
import Sidebar from "../../../components/Sidebar/Sidebar.tsx";
import UsersTable from "./UsersTable.tsx";

const AdminDashboard: React.FC = () => {

    return (
        <div className="min-h-screen">
            <Header />
            <Sidebar />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                        <h3 className="text-2xl font-black text-gray-100">Solicitudes de conversión a proveedor</h3>
                        <p className="text-gray-600">Aquí se muestra un listado de usuarios con rol de cliente que han solicitado convertirse en proveedor.</p>
                    </div>
                    <Box sx={{ mt: 2 }}>
                        <UsersTable />
                    </Box>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;