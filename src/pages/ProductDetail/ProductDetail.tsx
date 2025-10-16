import {useLocation, useParams} from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar.tsx";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';

const ProductDetail = () => {
    useParams();
    const { state } = useLocation();
    const { proveedor, producto } = state || {};

    return (
        <>
            <header className="border-b-[1px] border-gray-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6">
                    <div className="flex justify-start items-end pt-6 space-x-4">
                        <ChevronLeftRoundedIcon className="cursor-pointer hover:scale-110"/>
                        <div className="flex flex-col justify-start items-start">
                            <h1 className="font-bold text-3xl">{proveedor.nombre}</h1>
                            <p className="text-gray-400">{producto.nombre}</p>
                        </div>
                        <FavoriteBorderRoundedIcon className="absolute right-10 top-10 cursor-pointer" />
                    </div>
                </div>
            </header>
            <Sidebar />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 mt-4">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                    <div className="flex flex-col justify-start items-start">

                        <div className="rounded-lg border border-gray-300 p-4">

                            <div className="flex flex-row gap-x-4">
                                <div className="rounded-full px-4 py-1 border flex items-center border-gray-400">
                                    {proveedor.tipo}
                                </div>
                                {proveedor.verificado && (
                                    <div className="rounded-full items-center flex-row flex px-4 py-1 bg-amber-500">
                                        <VerifiedUserIcon className="text-gray-800"/>
                                        <p className="text-gray-800 font-semibold">
                                            Verificado
                                        </p>
                                </div>
                                )}
                                <div className="relative ml-50">
                                    <div className="flex flex-row items-center">
                                        {Array.from({ length: Math.round(proveedor.calificacion as number) }, (_, i) => (
                                            <StarRoundedIcon key={i} fontSize="small" color="warning" />
                                        ))}
                                    </div>
                                    <label>Calificación: {proveedor.calificacion}</label>
                                </div>
                            </div>

                            <div className="flex flex-col justify-start text-justify items-start gap-y-4 p-4">
                            <p className="text-gray-400">Somos una empresa familiar con más de 30 años de experiencia en el cultivo y comercialización de café premium.</p>
                            <p className="text-gray-400">Nuestros granos son cultivados en las montañas de Antioquia a más de 1800 metros sobre el nivel del mar.</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-y-4 rounded-lg border-[1px] border-gray-300 p-4 my-6 w-full">
                            <h1 className="font-bold text-2xl">Información de contacto</h1>
                            <div className="flex flex-row justify-start items-start gap-x-4">
                                <LocationOnIcon />
                                <p className="text-gray-400">{proveedor.ubicacion}</p>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-x-4">
                                <PhoneIcon />
                                <p className="text-gray-400">{proveedor.telefono}</p>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-x-4">
                                <EmailIcon />
                                <p className="text-gray-400">{proveedor.email}</p>
                            </div>
                            <div className="flex flex-row justify-start items-start gap-x-4">
                                <AccessTimeIcon />
                                <p className="text-gray-400">{proveedor.horario}</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-start items-start gap-y-4 rounded-lg border-[1px] border-gray-300 p-4 my-6 w-full">
                            <h1 className="font-bold text-2xl">Productos y precios</h1>
                            {proveedor.productos.map((producto, index) => (
                                <div key={index} className="flex flex-row justify-start items-start gap-x-4 bg-[#1e1e1e] px-4 py-2 rounded-lg w-full">
                                    <img src={producto.imagen} alt={producto.nombre} className="w-16 h-16 object-cover rounded-lg" />
                                    <div className="flex flex-row gap-x-4">
                                        <div className="flex flex-col justify-start items-start gap-y-2">
                                            <h4 className="text-gray-200 font-bold">{producto.nombre}</h4>
                                            <p className="text-gray-400">{producto.descripcion}</p>
                                        </div>
                                        <div className="flex flex-col justify-start items-end ml-48">
                                            <p className="text-gray-400">{producto.precio}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col justify-start items-start gap-y-4 rounded-lg border-[1px] border-gray-300 p-4 my-6 w-full">
                            <h1 className="font-bold text-2xl">Certificaciones</h1>
                            <div className="flex flex-row gap-4">
                                <div className="bg-yellow-600 rounded-full px-4 py-2 flex items-center flex-row">
                                    <VerifiedIcon className="text-gray-300"/>
                                    <p className="text-gray-300 font-semibold">
                                        Certificación orgánica
                                    </p>
                                </div>
                                <div className="bg-yellow-600 rounded-full px-4 py-2 flex items-center flex-row">
                                    <VerifiedIcon className="text-gray-300"/>
                                    <p className="text-gray-300 font-semibold">
                                        Fair trade
                                    </p>
                                </div>
                                <div className="bg-yellow-600 rounded-full px-4 py-2 flex items-center flex-row">
                                    <VerifiedIcon className="text-gray-300"/>
                                    <p className="text-gray-300 font-semibold">
                                        Rainforest Alliance
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <div className="flex flex-col justify-start items-start gap-y-4 rounded-lg border-[1px] border-gray-300 p-4">
                            <div className="flex flex-col justify-start items-start gap-y-2">
                                <h4 className="text-gray-200 font-bold">Información de pedido</h4>
                                <div className="flex flex-row justify-start items-start gap-x-4">
                                    <label className="text-gray-500">Pedido mínimo</label>
                                    <p className="absolute right-38 ">{proveedor.compraMinima}</p>
                                </div>
                                <div className="flex flex-row justify-start items-start gap-x-4">
                                    <label className="text-gray-500">Tiempo de entrega</label>
                                    <p className="absolute right-38 ">3 - 5 días hábiles</p>
                                </div>
                                <br />
                                <div className="flex flex-col justify-start items-start gap-x-4">
                                    <label className="text-gray-500">Métodos de pago:</label>
                                        <p className="ml-10">- Transferencia bancaria</p>
                                        <p className="ml-10">- Efectivo contra entrega</p>
                                        <p className="ml-10">- Tarjeta de crédito</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-y-4 my-6 ">
                            <button className="rounded-lg bg-green-900 py-3 text-white font-semibold w-5/6" >Contactar / Hacer pedido</button>
                            <button className="rounded-lg border border-gray-300 w-5/6 py-3 text-white font-semibold" >Llamar ahora</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default ProductDetail;