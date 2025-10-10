import {useAuth} from "../../hooks/useAuth.tsx";

const Header = () => {
    const { user} = useAuth();

    return (
        <header className="border-b-[1px] border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-end items-end py-6">
                    <h1 className="font-bold text-lg">¡Hola, {user?.name}!</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;