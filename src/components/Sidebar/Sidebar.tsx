import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {useState} from "react";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../hooks/useAuth.tsx";

const Sidebar = () => {
    const [menuHidden, setMenuHidden] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle('dark', !darkMode);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    }

    const options = [
        { title: user?.name, icon: <AccountCircleRoundedIcon className="text-gray-600 cursor-pointer hover:text-gray-800 mr-2" />, action: () => navigate('/private/profile') },
        { title: darkMode ? 'Modo claro' : 'Modo oscuro', icon: <DarkModeRoundedIcon className="text-gray-600 cursor-pointer hover:text-gray-800 mr-2" />, action: toggleDarkMode },
        { title: 'Cerrar sesión', icon: <LogoutRoundedIcon className="text-red-700 cursor-pointer hover:text-red-900 mr-2"/>, action: handleLogout },
    ]

    return (
        <aside className={`p-4 w-1/5 h-screen fixed top-0 left-0 bg-white border-r-[1px] border-gray-200 ${menuHidden ? 'translate-x-[-80%]' : 'translate-x-0'} transition-transform duration-300 ease-in-out z-50`}>
            <div className="flex items-center space-x-4 max-h-80">
                <img
                    src='/src/assets/logo.png'
                    alt="Logo"
                    className="w-20 h-20 object-cover rounded-full"
                />
                <MenuRoundedIcon
                    className={`text-gray-600 cursor-pointer hover:text-gray-800 right-4 absolute w-2/3 ${!menuHidden ? 'transition rotate-90 duration-300 ease-in-out' : 'transition rotate-0 duration-300 ease-in-out'}`}
                    onClick={() => setMenuHidden(!menuHidden)}
                />
            </div>
            <div>
                <ul className="space-y-16 mt-8">
                    <li className=" hover:text-gray-900">
                        <a href="javascript:void(0)" className="block">
                            <span className="inline-block w-4 h-4 mr-2 rounded-full"></span>
                            <span>Inicio</span>
                        </a>
                    </li>
                    <li className="text-gray-300 hover:text-gray-900">
                        <a href="javascript:void(0)" className="block">
                            <span>A cerca de</span>
                            <span className="inline-block w-4 h-4 mr-2 rounded-full"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col items-center justify-center mt-8 space-y-4">
                <ul>
                    {options.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <button
                                    className="cursor-pointer hover:text-gray-800 font-semibold text-gray-700 hover:scale-105"
                                    onClick={item.action}
                                >
                                    {item.title}
                                    {item.icon}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;