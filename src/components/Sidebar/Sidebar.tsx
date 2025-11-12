import {type JSX, useState} from "react";
import {useNavigate} from "react-router-dom";
import MenuBottomOptions from "./MenuBottomOptions/MenuBottomOptions.tsx";
import Tooltip from '@mui/material/Tooltip';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import HailIcon from '@mui/icons-material/Hail';
import {useAuth} from "../../hooks/useAuth.tsx";

    type MenuOption = {
        title: string;
        icon: JSX.Element;
        path: string;
        tooltip: string;
    };

const Sidebar = () => {
    const [menuHidden, setMenuHidden] = useState(true);
    const navigate = useNavigate();
    const { user } = useAuth();


    const options: MenuOption[] = user?.role === 'cliente' ? [
        { title: 'Inicio', icon: <HomeRoundedIcon />, path: '/private/dashboard', tooltip: 'Inicio' },
        { title: 'Proveedores', icon: <HailIcon />, path: '/private/proveedores', tooltip: 'Buscar proveedores' },
        { title: 'Favoritos', icon: <FavoriteRoundedIcon />, path: '/private/favorites', tooltip: 'Consultar favoritos' },
    ] : [
        { title: 'Inicio', icon: <HomeRoundedIcon />, path: '/private/dashboard', tooltip: 'Inicio' },
        { title: 'Proveedores', icon: <HailIcon />, path: '/private/proveedores', tooltip: 'Buscar proveedores' },
    ];

    return (
        <aside className={`p-4 w-[200px] h-screen fixed top-0 left-0 bg-[#181818] border-r-[1px] border-gray-700 ${menuHidden ? 'translate-x-[-70%]' : 'translate-x-0'} transition-transform duration-300 ease-in-out z-50 p-0`}>
            <div className="flex items-center space-x-4 max-h-80">
                <img
                    src='/src/assets/logo.png'
                    alt="Logo"
                    className="w-20 h-20 object-cover rounded-full"
                />
                <MenuRoundedIcon
                    className={`cursor-pointer right-4 absolute w-2/3 ${!menuHidden ? 'transition rotate-90 duration-300 ease-in-out' : 'transition rotate-0 duration-300 ease-in-out'}`}
                    onClick={() => setMenuHidden(!menuHidden)}
                />
            </div>
            <div className=" h-2/3 flex flex-col mt-8">
                <ul>
                    {options.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <Tooltip title={item.tooltip} placement="right" arrow>
                                    <button
                                        className="my-8 cursor-pointer hover:text-gray-800 font-semibold hover:scale-105 w-full"
                                        onClick={() => navigate(item.path)}
                                    >
                                        <div className="flex items-center justify-between w-full">
                                            <span className="text-left text-lg">
                                                {item.title}
                                            </span>
                                            <span className="text-right text-lg">
                                                {item.icon}
                                            </span>
                                        </div>
                                    </button>
                                </Tooltip>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <MenuBottomOptions />
        </aside>
    );
};

export default Sidebar;