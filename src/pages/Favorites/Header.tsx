import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const Header = () => {
    return (
        <>
            <header className="border-b-[1px] border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-start items-end pt-6 space-x-4">
                        <ChevronLeftRoundedIcon className="cursor-pointer hover:scale-110"/>
                        <h1 className="font-semibold text-lg">Proveedores guardados</h1>
                    </div>
                    <div className="flex flex-row justify-between items-center py-6 gap-x-10">
                        <p className="ml-10">6 proveedores en tu lista de favoritos</p>
                    </div>
                </div>

            </header>
        </>
    );
};

export default Header;