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
        { title: user?.name, icon: <AccountCircleRoundedIcon sx={{ fontSize: 32 }} />, action: () => navigate('/private/profile') },
        { title: darkMode ? 'Modo claro' : 'Modo oscuro', icon: <DarkModeRoundedIcon className="ml-2" sx={{ fontSize: 32 }} />, action: toggleDarkMode },
        { title: 'Cerrar sesión', icon: <LogoutRoundedIcon className="ml-4" sx={{ fontSize: 32 }} />, action: handleLogout },
    ]

    return (
        <aside className={`p-4 w-1/6 h-screen fixed top-0 left-0 bg-[#181818] border-r-[1px] border-gray-700 ${menuHidden ? 'translate-x-[-80%]' : 'translate-x-0'} transition-transform duration-300 ease-in-out z-50 p-0`}>
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
            <div className=" h-2/3 flex flex-col mt-8">
                <ul>
                    {options.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <button
                                    className="my-8 cursor-pointer hover:text-gray-800 font-semibold text-gray-700 hover:scale-105"
                                    onClick={item.action}
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-right text-lg">
                                            {item.title}
                                        </span>
                                        <span className="text-right text-lg ml-16">
                                            {item.icon}
                                        </span>
                                    </div>
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