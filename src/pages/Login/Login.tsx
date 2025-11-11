import React, { useEffect, useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import GridShape from '../../components/GridShape/GridShape.tsx';
import ThemeTogglerTwo from '../../components/ThemeTogglerTwo/ThemeTogglerTwo.tsx';
import loginController from '../../controllers/Auth/Login/LoginController';

type LoginValues = {
    email: string;
    password: string;
};

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState<string>('');
    const [loading, setLoading] = useState(false);
    const { isAuthenticated, login } = useAuth();

    const validationSchema = Yup.object({
        email: Yup.string().email('Ingresa un correo electrónico válido.').required('El correo electrónico es obligatorio.'),
        password: Yup.string().min(6, 'La contraseña debe tener al menos 6 caracteres.').required('La contraseña es obligatoria.'),
    });

    const navigate = useNavigate();

    const formik = useFormik<LoginValues>({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values: LoginValues) => {
            setLoading(true);
            setLoginError('');

            try {
                const resp = await loginController.login(values.email, values.password);
                // loginController puede devolver { data: user } o directamente user/token
                const user = (resp && (resp as any).data) ? (resp as any).data : resp;
                // Actualiza el contexto y localStorage vía el método login del AuthProvider
                login(user);
                navigate('/private/dashboard', { replace: true });
            } catch (err: unknown) {
                const msg = err instanceof Error ? err.message : 'Error al iniciar sesión. Por favor intenta nuevamente.';
                setLoginError(msg);
            } finally {
                setLoading(false);
            }
        },
    });

    useEffect(() => {
        if (isAuthenticated) navigate('/private/dashboard', { replace: true });
    }, [isAuthenticated, navigate]);

    if (isAuthenticated) return <Navigate to="/private/dashboard" replace />;

    return (
        <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
            <button className="fixed top-6 left-6 z-50 hidden sm:block" onClick={() => navigate('/')}>
                <ArrowBackIosNewRoundedIcon className="absolute top-6 left-6 cursor-pointer text-gray-300 dark:text-gray-100" />
            </button>
            <div className="relative flex lg:flex-row w-full h-screen flex-col sm:p-0">
                <div className="flex flex-col flex-1 lg:w-1/2 w-full justify-start">
                    <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
                        <div>
                            <div className="mb-5 sm:mb-8">
                                <h1 className="mb-2 font-black text-gray-100 text-6xl flex dark:text-title-md">Iniciar sesión</h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400 flex">
                                    Ingresa tu correo electrónico y contraseña para iniciar sesión
                                </p>
                            </div>
                            <div>
                                <form onSubmit={formik.handleSubmit}>
                                    <div className="space-y-6">
                                        {loginError && (
                                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                                                {loginError}
                                            </div>
                                        )}
                                        <div className="flex flex-col space-y-2">
                                            <label className="flex justify-start font-bold text-white text-lg">
                                                Correo electrónico <span className="ml-2 text-red-500">*</span>{' '}
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="juan.perez@mail.com"
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                required
                                                disabled={loading}
                                            />
                                            {formik.touched.email && formik.errors.email && <p className="text-sm text-red-500">{formik.errors.email}</p>}
                                        </div>
                                        <div className="flex flex-col space-y-2">
                                            <label className="flex justify-start text-white font-bold text-lg">
                                                Contraseña <span className="text-red-500 ml-2">*</span>{' '}
                                            </label>
                                            <div className="flex">
                                                <input
                                                    type={showPassword ? 'text' : 'password'}
                                                    placeholder="Ingresa tu contraseña"
                                                    id="password"
                                                    name="password"
                                                    value={formik.values.password}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    required
                                                    autoComplete="current-password"
                                                    disabled={loading}
                                                />
                                                <span onClick={() => setShowPassword(!showPassword)} className="flex items-center px-3 cursor-pointer">
                                                    {showPassword ? <RemoveRedEyeRoundedIcon className="fill-gray-500 dark:fill-gray-400" /> : <VisibilityOffRoundedIcon className="fill-gray-500 dark:fill-gray-400" />}
                                                </span>
                                            </div>
                                            {formik.touched.password && formik.errors.password && <p className="text-sm text-red-500">{formik.errors.password}</p>}
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="cursor-pointer hover:scale-105 hover:animate-pulse border-gray-300 border-t-2 border-l-2 border-b-4 border-r-4 w-3/4 rounded-lg py-2 mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled={loading}
                                            >
                                                {loading ? 'Iniciando sesión...' : 'Entrar'}
                                            </button>
                                        </div>
                                        <p>O</p>
                                        <a href="/register">
                                            <p className="">Crear una cuenta</p>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 w-full h-full bg-brand-950 dark:bg-white/5 lg:grid items-center hidden">
                    <div className="relative items-center justify-center  flex z-1">
                        <GridShape />
                        <div className="flex flex-col items-center max-w-xs">
                            <a href="/" className="block mb-4">
                                <img width={231} height={48} src="/src/assets/logo/BLANCO-COMPLETO.png" alt="Logo" />
                            </a>
                            <p className="text-center text-gray-400 dark:text-white/60">Equipo de desarrollo | LOS DORPEPUS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-6 right-6 z-50 hidden sm:block">
                <ThemeTogglerTwo />
            </div>
        </div>
    );
};

export default Login;