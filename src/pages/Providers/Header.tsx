import FilterAltRoundedIcon from "@mui/icons-material/FilterAltRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Header = () => {
    return (
        <header className="border-b-[1px] border-gray-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-start items-end pt-6 space-x-4">
                    <ChevronLeftRoundedIcon className="cursor-pointer hover:scale-110"/>
                    <h1 className="font-semibold text-lg">Proveedores disponibles</h1>
                </div>
                <div className="flex flex-row justify-between items-center py-6 gap-x-10">
                    <div >
                        <SearchRoundedIcon className="text-gray-200 absolute left-24 top-26 transform -translate-y-1/2" fontSize="medium"/>
                        <input
                            type="text"
                            placeholder="Buscar proveedores, productos"
                            className="border border-gray-600 rounded-lg gap-4 px-4 py-3 w-6xl items-start justify-start flex"
                        />
                        {/*<label className="text-gray-500">Buscar proveedores, productos</label>*/}
                    </div>
                    <button className="rounded flex flex-row justify-center bg-amber-500 px-6 py-2 text-gray-700 font-semibold">
                        <FilterAltRoundedIcon />
                        <label>Filtros</label>
                    </button>
                </div>
            </div>

        </header>
    );
};

export default Header;