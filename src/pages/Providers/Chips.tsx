const Chips = () => {
    return (
        <div className="flex flex-row justify-start items-center py-2 gap-x-10">
            <div className="py-2 px-3 rounded-lg bg-green-300 cursor-pointer hover:scale-105"><label className="cursor-pointer font-semibold text-gray-800">Todos</label></div>
            <div className="py-2 px-3 rounded-lg border-[1px] cursor-pointer hover:scale-105"><label className="cursor-pointer font-medium text-sm text-gray-400">Agrícola</label></div>
            <div className="py-2 px-3 rounded-lg border-[1px] cursor-pointer hover:scale-105"><label className="cursor-pointer font-medium text-sm text-gray-400">Manufacturado</label></div>
            <div className="py-2 px-3 rounded-lg border-[1px] cursor-pointer hover:scale-105"><label className="cursor-pointer font-medium text-sm text-gray-400">Cristalería</label></div>
        </div>
    );
};

export default Chips;