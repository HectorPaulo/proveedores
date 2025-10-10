import {useAuth} from "../../hooks/useAuth.tsx";

const Header = () => {
    const { user} = useAuth();

    return (
        <header className="border-b-2 border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-6">

                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700">Bienvenido, {user?.name}</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;