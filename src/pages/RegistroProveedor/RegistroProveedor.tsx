import React from "react";
// import * as Yup from "yup";
// import {useFormik} from "formik";
// import {useAuth} from "../../hooks/useAuth.tsx";
// import {useNavigate} from "react-router-dom";
import {Checkout} from "./Checkout.tsx";

const RegistroProveedor: React.FC = () => {

    // const validationSchema = Yup.object({
    //     email: Yup.string()
    //         .email("Ingresa un correo electrónico válido.")
    //         .required("El correo electrónico es obligatorio."),
    //     password: Yup.string()
    //         .min(6, "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una minúscula y un caracter especial.")
    //         .required("La contraseña es obligatoria."),
    // });

    // const formik = useFormik({
    //     initialValues: {
    //         email: "",
    //         password: "",
    //     },
    //     validationSchema,
    //     onSubmit: async (values) => {
    //         await login(values.email, values.password);
    //     },
    // });

    // const [loading, setLoading] = useState(false);
    // const { login } = useAuth();
    // const navigate = useNavigate();
    //
    // useEffect(() => {
    //     if (isAuthenticated) {
    //         navigate('/private/dashboard');
    //     }
    // }, [isAuthenticated, navigate]);
    return (
        <>
            <Checkout />
        </>
    );
};

export default RegistroProveedor;