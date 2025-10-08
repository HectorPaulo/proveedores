import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <section>
            <div className="max-w-screen mx-auto px-4 text-gray-500 overflow-hidden md:px-8 flex items-center">
                <div className="flex-none space-y-5 max-w-xl mx-auto text-center md:text-left">
                    <h1 className="text-4xl text-gray-300 sm:text-5xl font-semibold">
                        Conecta con <label className="text-orange-400 font-extrabold"><strong>proveedores de calidad</strong></label>
                    </h1>
                    <p>
                        Encuentra los mejores proveedores agrícolas, manufacturados y más en un solo lugar
                    </p>
                    <div className="flex justify-center items-center gap-x-3 sm:text-sm">
                        <a
                            href="javascript:void(0)"
                            onClick={() => navigate('/about')}
                            className="flex items-center justify-center gap-x-1 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-full md:inline-flex"
                        >
                            Conócenos
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="flex-1 hidden md:block">
                    <img
                        src="/src/assets/img-inicio-3.svg"
                        className="max-w-2/3 h-auto"
                    />
                </div>
            </div>
        </section>
    );
};

export default LandingPage;