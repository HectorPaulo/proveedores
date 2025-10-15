import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth.tsx";
import { useState, useRef, useEffect } from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ArrowRightAltRoundedIcon from '@mui/icons-material/ArrowRightAltRounded';

const MenuBottomOptions = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [darkMode, setDarkMode] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const moreBtnRef = useRef<HTMLDivElement | null>(null);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as Node;
            if (isModalOpen && modalRef.current && !modalRef.current.contains(target) && moreBtnRef.current && !moreBtnRef.current.contains(target)) {
                setIsModalOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isModalOpen]);

    const options = [
        { title: user?.name ?? 'Perfil', icon: <AccountCircleRoundedIcon sx={{ fontSize: 26 }} />, action: () => navigate('/private/profile') },
        { title: darkMode ? 'Modo claro' : 'Modo oscuro', icon: <DarkModeRoundedIcon sx={{ fontSize: 26 }} />, action: toggleDarkMode },
        { title: 'Cerrar sesión', icon: <LogoutRoundedIcon sx={{ fontSize: 26 }} />, action: handleLogout },
    ];

    return (
        <div className="max-w-full max-h-auto grid grid-cols-2 gap-x-4 bottom-4 left-0 absolute ml-6">
            <div className="flex flex-row space-x-5 items-center justify-start cursor-pointer" onClick={() => navigate('/private/profile')}>
                <img
                    src="http://github.com/HectorPaulo.png"
                    alt={user?.name}
                    className="rounded-full w-12 h-12 object-cover"
                />
                <p className="text-sm font-semibold">{user?.name}</p>
            </div>
            <div
                ref={moreBtnRef}
                onClick={() => setIsModalOpen(!isModalOpen)}
                className="rounded-lg p-2 border-[1px] border-gray-700 cursor-pointer hover:shadow-2xl h-[35px] w-[35px] flex items-center justify-center mt-2 right-4 absolute">
                <MoreVertIcon />
            </div>

            {isModalOpen ? (
                <div ref={modalRef} className="absolute bottom-2 left-full translate-x-2 w-56 rounded-lg border border-gray-700 bg-[#1e1e1e] shadow-xl p-2 z-50">
                    {/*<div className="absolute -left-2 top-4 w-3 h-3 bg-gray-800 transform rotate-45 border-t border-l border-gray-700"></div>*/}
                    <ArrowRightAltRoundedIcon className="absolute -left-6 bottom-0" fontSize="large" />
                    <ul className="flex flex-col">
                        {options.map((item, idx) => (
                            <li key={idx} className="w-full">
                                <button
                                    className="flex items-center gap-3 w-full px-3 py-2 rounded hover:bg-gray-950 transition-colors cursor-pointer"
                                    onClick={() => {
                                        item.action();
                                        setIsModalOpen(false);
                                    }}
                                >
                                    <span className="text-gray-100">{item.icon}</span>
                                    <span className="flex-1 text-left text-sm font-medium text-gray-100">{item.title}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}
        </div>
    );
};

export default MenuBottomOptions;