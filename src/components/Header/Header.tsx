import {useAuth} from "../../hooks/useAuth.tsx";

const Header = () => {
    const { user} = useAuth();
    const calcularMensaje = () => {
        const now = new Date();
        let message = '';
        if (now.getHours() < 12) {
            message = `¡Buenos días, ${user?.name}!`
        } else if (now.getHours() < 18) {
            message = `¡Buenas tardes ${user?.name}!`
        } else {
            message = `¡Buenas noches ${user?.name}, es hora de descansar!`
        }

        return message;
    }

    return (
        <header className="border-b-[1px] border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-start items-end py-6">
                    <h1 className="font-semibold text-lg">{calcularMensaje()}</h1>
                </div>
            </div>
        </header>
    );
};

export default Header;