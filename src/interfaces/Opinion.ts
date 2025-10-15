import type {User} from "../contexts/AuthContextTypes.tsx";

export interface Opinion {
    id: number;
    usuario: User;
    comentario: string;
    calificacion: number;
    fecha: string;
}