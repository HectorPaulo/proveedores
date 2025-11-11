import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

const Security: React.FC = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errors, setErrors] = useState<{ old?: string; new?: string; submit?: string }>({});
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const validate = () => {
        const e: typeof errors = {};
        if (!oldPassword) e.old = 'Introduce la contraseña anterior.';
        if (!newPassword) e.new = 'Introduce la nueva contraseña.';
        else if (newPassword.length < 6) e.new = 'La contraseña debe tener al menos 6 caracteres.';
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const handleSubmit = async (ev: React.FormEvent) => {
        ev.preventDefault();
        setErrors({});
        if (!validate()) return;
        setSubmitting(true);
        try {
            // Reemplazar con llamada real al backend
            await new Promise((res) => setTimeout(res, 900));
            // ejemplo de uso de fetch:
            // const res = await fetch('/api/change-password', { method: 'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ oldPassword, newPassword }) });
            // if (!res.ok) throw new Error('Error del servidor');
            setSuccess(true);
            setOldPassword('');
            setNewPassword('');
        } catch (err) {
            console.error(err);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <header className="">
                <div className="max-w-7xl mx-auto ">
                    <div className="flex justify-start items-end py-6 space-x-6">
                        <button onClick={() => navigate(-1)} className="flex flex-row space-x-6 cursor-pointer hover:scale-105 hover:animate-pulse">
                            <ArrowBackIosNewRoundedIcon />
                            <h1 className="font-semibold text-lg">Volver</h1>
                        </button>
                    </div>
                </div>
            </header>
            <div className="min-h-screen flex items-center justify-center p-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-lg max-h-lg h-full bg-gradient-to-r from-gray-800 to-gray-950  rounded-lg  p-6 md:p-8"
                    aria-label="Formulario cambiar contraseña"
                >
                    <h2 className="text-2xl font-semibold mb-2">Cambiar contraseña</h2>
                    <p className="text-sm text-gray-500 mb-6">Introduce tu contraseña anterior y la nueva contraseña.</p>

                    <label className="block mb-4">
                        <span className="text-sm font-medium text-gray-400">Contraseña anterior</span>
                        <input
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            className="mt-1 block w-full rounded border-gray-300 shadow-sm border-[1px] h-10 focus:border-[2px] focus:ring-blue-500 focus:border-blue-500"
                            required
                            autoComplete="current-password"
                        />
                        {errors.old && <p className="mt-1 text-sm text-red-600">{errors.old}</p>}
                    </label>

                    <label className="block mb-4">
                        <span className="text-sm font-medium text-gray-400">Nueva contraseña</span>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="mt-1 block w-full rounded border-white border-[1px] h-10 focus:border-[2px] shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                            minLength={6}
                            autoComplete="new-password"
                        />
                        {errors.new && <p className="mt-1 text-sm text-red-600">{errors.new}</p>}
                    </label>

                    {errors.submit && <p className="text-sm text-red-600 mb-4">{errors.submit}</p>}
                    {success && <p className="text-sm text-green-600 mb-4">Contraseña cambiada con éxito.</p>}

                    <div className="flex items-center gap-3">
                        <button
                            type="submit"
                            disabled={submitting}
                            className="flex-1 py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                        >
                            {submitting ? 'Guardando...' : 'Guardar nueva contraseña'}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="py-2 px-4 border rounded text-gray-700 hover:bg-gray-50"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Security;