import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    // Navigation items with actual paths
    const navigation = [
        { title: "Inicio", path: "/" },
        { title: "A cerca de", path: "/about" },
        { title: "Contáctanos", path: "/contact" },
        { title: "Equipo de desarrollo", path: "/team" },
    ];

    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target as HTMLElement;
            if (target && !target.closest(".menu-btn")) setState(false);
        };
    }, []);

    const Brand = () => (
        <div className="flex items-center justify-between py-5 md:block">
            <a href="javascript:void(0)" onClick={() => navigate('/')}>
                <img
                src="/src/assets/logo.png"
                    width={120}
                    height={50}
                    alt="logo"
                />
            </a>
            <div className="md:hidden">
                <button
                    className="menu-btn text-gray-500 hover:text-gray-800"
                    onClick={() => setState(!state)}
                >
                    {state ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );

    return (
        <header>
            <div className={`md:hidden ${state ? "mx-2 pb-5" : "hidden"}`}>
                <Brand />
            </div>
            <nav
                className={`pb-5 w-screen md:text-sm ${state ? "absolute top-0 inset-x-0 bg-white shadow-lg rounded-xl border mx-2 mt-2 md:shadow-none md:border-none md:mx-0 md:mt-0 md:relative md:bg-transparent" : ""}`}
            >
                <div className="gap-x-14 items-center max-w-screen-xl mx-auto px-4 md:flex md:px-8">
                    <Brand />
                    <div
                        className={`flex-1 items-center mt-8 md:mt-0 md:flex ${state ? "block" : "hidden"} `}
                    >
                        <ul className="space-y-6 md:flex md:space-x-6 md:space-y-0 mx-28">
                            {navigation.map((item, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="text-gray-300 hover:text-gray-900 mx-12"
                                    >
                                        <a href={item.path} className="block" onClick={(e) => {
                                            e.preventDefault();
                                            navigate(item.path);
                                        }}>
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <button
                        onClick={() => navigate('/login')} 
                        className="btn-shine inline-flex border-white border-t-2 border-l-2 border-b-4 border-r-4 items-center justify-center w-28 h-12 gap-x-1 py-2 px-4 font-semibold text-md rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-lg shadow-amber-500/60 hover:shadow-orange-600/60">
                            <span className='font-black text-lg'>Login</span>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;