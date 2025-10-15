import type Provider from "../../interfaces/Provider.ts";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Grid = () => {
    const proveedores: Provider[] = [
        {
            id: 3,
            nombre: "Carnes Selectas La Finca",
            verificado: false,
            tipo: "Ganadero",
            descripcion: "Carnes de res y cerdo de alta calidad",
            ubicacion: "Montería, Córdoba",
            telefono: "+57 320 555 1122",
            compraMinima: "30kg",
            calificacion: 4.5,
            email: "ventas@carneslafinca.com",
            horario: "Lunes a Viernes: 8:00 AM - 6:00 PM",
            productos: [
                { nombre: "Lomo de res", descripcion: "Corte premium de res", precio: "$22,000/kg", categoria: "Carnes", imagen: "https://www.res.com.ar/media/catalog/product/cache/6c63de560a15562fe08de38c3c766637/l/o/lomo_2.jpg" },
                { nombre: "Costilla de cerdo", descripcion: "Costilla fresca", precio: "$18,000/kg", categoria: "Carnes", imagen: "https://comedera.com/wp-content/uploads/sites/9/2016/08/costillas-al-horno.jpg" }
            ]
        },
        {
            id: 4,
            nombre: "Verduras Frescas El Huerto",
            verificado: true,
            tipo: "Agrícola",
            descripcion: "Verduras orgánicas y frescas",
            ubicacion: "Bogotá, Cundinamarca",
            telefono: "+57 301 222 3344",
            compraMinima: "80kg",
            calificacion: 4.9,
            email: "info@elhuerto.com",
            horario: "Lunes a Domingo: 6:00 AM - 4:00 PM",
            productos: [
                { nombre: "Zanahoria orgánica", descripcion: "Zanahoria fresca y crujiente", precio: "$2,000/kg", categoria: "Verduras", imagen: "https://estilorganico.com/4991-large_default/zanahoria.jpg" },
                { nombre: "Lechuga Batavia", descripcion: "Lechuga verde y fresca", precio: "$1,500/kg", categoria: "Verduras", imagen: "https://www.gourmets.net/img/Productos/650821.jpg" }
            ]
        },

        {
            id: 6,
            nombre: "Panadería Artesanal La Espiga",
            verificado: false,
            tipo: "Alimentos procesados",
            descripcion: "Pan y repostería artesanal",
            ubicacion: "Manizales, Caldas",
            telefono: "+57 312 666 8899",
            compraMinima: "20kg",
            calificacion: 4.6,
            email: "ventas@laespiga.com",
            horario: "Lunes a Domingo: 7:00 AM - 7:00 PM",
            productos: [
                { nombre: "Pan integral", descripcion: "Pan saludable y fresco", precio: "$8,000/kg", categoria: "Panadería", imagen: "https://www.infobae.com/resizer/v2/BXHYVKXWTVFC5O7QNNH3LXF32A.jpg?auth=b819a8d08570203c26eed5bd9c4267f02c466eab3f9ee194e87f5dfa808d4817&smart=true&width=1200&height=1200&quality=85" },
                { nombre: "Croissant artesanal", descripcion: "Croissant mantequilloso", precio: "$12,000/kg", categoria: "Repostería", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGuUkn67HjDZMQBGFh1zXH7f1lwY7PAGprIQ&s" }
            ]
        }
    ]
    return (
        <>
            <div className="">
                <div className="grid grid-cols-3 gap-4 p-4">
                    {
                        proveedores.flatMap((proveedor) =>
                            proveedor.productos.map((producto, idx) => (
                                <div key={`${proveedor.id}-${idx}`} className="rounded-lg shadow-md border border-gray-700 cursor-pointer ">
                                    <div className="flex flex-row">
                                        <img src={producto.imagen} alt={producto.nombre} className="w-1/3 object-cover rounded-tl-lg rounded-bl-lg mr-4" />
                                        <div className="flex flex-col p-2">
                                            <div className="flex flex-row items-center">
                                                <label className="font-bold text-xl">{producto.nombre}</label>
                                                    <div className="bg-red-700 text-white rounded-full px-2 py-1 mx-2 flex items-center justify-center text-sm cursor-pointer hover:bg-red-800 transition-colors duration-300">
                                                        <FavoriteRoundedIcon fontSize="small"/>
                                                    </div>
                                            </div>
                                            <div className="flex flex-col text-start space-y-1">
                                                <label className="font-semibold text-gray-500 text-md">{proveedor.tipo}</label>
                                                <label className="text-gray-300">{producto.descripcion}</label>
                                                <label><LocationOnRoundedIcon fontSize="small" className="mr-1"/>{proveedor.ubicacion}</label>
                                                <label><LocalPhoneRoundedIcon fontSize="small" className="mr-1"/>{proveedor.telefono}</label>
                                                <label>Compra Mínima: {proveedor.compraMinima}</label>
                                                <div className="flex flex-row items-center">
                                                    {Array.from({ length: Math.round(proveedor.calificacion as number) }, (_, i) => (
                                                        <StarRoundedIcon key={i} fontSize="small" color="warning" />
                                                    ))}
                                                </div>
                                                <label>Calificación: {proveedor.calificacion}</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )
                    }

                </div>
            </div>
        </>
    );
};

export default Grid;