import type Product from "./Product.ts";
import type {Opinion} from "./Opinion.ts";

export default interface Provider {
    id: number;
    nombre: string;
    verificado: boolean;
    tipo: string;
    descripcion: string;
    ubicacion: string;
    telefono: string;
    email: string;
    compraMinima?: string;
    calificacion?: number;
    opiniones?: Opinion[];
    productos: Product[];
    horario: string;
    metodosPago: string[];
}