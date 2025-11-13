import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import AddressForm from "../../components/AddressForm/AddressForm";
import PaymentForm from "../../components/PaymentForm/PaymentForm";
import Review from "../../components/Review/Review";
import AppTheme from "../../components/SharedTheme/AppTheme";
import ColorModeIconDropdown from "../../components/SharedTheme/ColorModelIconDropdown";
import StepLabel from '@mui/material/StepLabel';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import GridShape from "../../components/GridShape/GridShape.tsx";
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';

const steps = ['Información del proveedor', 'Información de productos', 'Detalles y preferencias'];

interface ProviderFormData {
    nombre: string;
    email: string;
    telefono: string;
    ubicacion: string;
    ciudad: string;
    estado: string;
    codigoPostal: string;
    pais: string;
    descripcion: string;
    tipo: string;
    compraMinima: string;
    horario: string;
    metodosPago: string[];
    categoriasProductos: string;
}

export function Checkout(props: { disableCustomTheme?: boolean }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const navigate = useNavigate();

    const [formData, setFormData] = React.useState<ProviderFormData>({
        nombre: '',
        email: '',
        telefono: '',
        ubicacion: '',
        ciudad: '',
        estado: '',
        codigoPostal: '',
        pais: '',
        descripcion: '',
        tipo: '',
        compraMinima: '',
        horario: '',
        metodosPago: [],
        categoriasProductos: '',
    });

    const handleFormChange = (field: string, value: string | string[]) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const validateStep = (step: number): boolean => {
        switch (step) {
            case 0:
                return !!(
                    formData.nombre &&
                    formData.email &&
                    formData.telefono &&
                    formData.ubicacion &&
                    formData.ciudad &&
                    formData.estado &&
                    formData.codigoPostal &&
                    formData.pais &&
                    formData.descripcion
                );
            case 1:
                return !!(
                    formData.tipo &&
                    formData.horario &&
                    formData.metodosPago.length > 0 &&
                    formData.categoriasProductos
                );
            case 2:
                return true;
            default:
                return false;
        }
    };

    const handleNext = async () => {
        if (!validateStep(activeStep)) {
            setError('Por favor completa todos los campos requeridos');
            return;
        }
        
        setError(null);

        if (activeStep === steps.length - 1) {
            await handleSubmit();
        } else {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        setError(null);
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            // Simulación del envío de datos (sin llamada real al backend)
            await new Promise(resolve => setTimeout(resolve, 1500)); // Simula delay de red
            
            // Guardar en localStorage para simular persistencia
            const solicitud = {
                ...formData,
                verificado: false,
                calificacion: 0,
                productos: [],
                fechaSolicitud: new Date().toISOString(),
                estado: 'pendiente'
            };
            
            console.log('Solicitud de proveedor enviada (simulada):', solicitud);
            
            // Opcional: guardar en localStorage
            const solicitudesGuardadas = JSON.parse(localStorage.getItem('providerRequests') || '[]');
            solicitudesGuardadas.push(solicitud);
            localStorage.setItem('providerRequests', JSON.stringify(solicitudesGuardadas));

            setActiveStep(steps.length);
        } catch (err) {
            console.error('Error submitting provider request:', err);
            setError('Error al enviar la solicitud. Por favor intenta de nuevo.');
        } finally {
            setLoading(false);
        }
    };

    function getStepContent(step: number) {
        switch (step) {
            case 0:
                return <AddressForm formData={formData} onFormChange={handleFormChange} />;
            case 1:
                return <PaymentForm formData={formData} onFormChange={handleFormChange} />;
            case 2:
                return <Review formData={formData} />;
            default:
                throw new Error('Unknown step');
        }
    }

    return (
        <AppTheme {...props}>
            <CssBaseline enableColorScheme />
            <Box sx={{ position: 'fixed', top: '1rem', right: '1rem' }}>
                <ColorModeIconDropdown />
            </Box>

            <Grid
                container
                sx={{
                    height: {
                        xs: '100%',
                        sm: 'calc(100dvh - var(--template-frame-height, 0px))',
                    },
                    mt: {
                        xs: 0,
                        md: 0,
                        sm: 0,
                    },
                }}
            >
                <Grid
                    size={{ sm: 12, md: 5, lg: 4 }}
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'column',
                        backgroundColor: 'background.paper',
                        borderRight: { sm: 'none', md: '1px solid' },
                        borderColor: { sm: 'none', md: 'divider' },
                        alignItems: 'start',
                        gap: 0,
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: 800,
                        }}
                    >
                        <div className="lg:w-1/2 w-full dark:bg-black/90 lg:grid items-center hidden">
                            <div className="relative items-center justify-center  flex z-1">
                                <GridShape />
                                <div className="flex flex-col items-center max-w-xs">
                                    <a href='/' className="block mb-4">
                                        <img
                                            width={231}
                                            height={48}
                                            src="/src/assets/logo/BLANCO-COMPLETO.png"
                                            alt="Logo"
                                        />
                                    </a>
                                    <p className="text-center text-gray-400 dark:text-white/60">
                                        Equipo de desarrollo | LOS DORPEPUS
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid
                    size={{ sm: 12, md: 7, lg: 8 }}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '100%',
                        width: '100%',
                        backgroundColor: { xs: 'transparent', sm: 'background.default' },
                        alignItems: 'start',
                        pt: { xs: 0, sm: 16 },
                        px: { xs: 2, sm: 10 },
                        gap: { xs: 4, md: 8 },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { sm: 'space-between', md: 'flex-end' },
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: { sm: '100%', md: 600 },
                        }}
                    >
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                flexGrow: 1,
                            }}
                        >
                            <Stepper
                                id="desktop-stepper"
                                activeStep={activeStep}
                                sx={{ width: '100%', height: 40 }}
                            >
                                {steps.map((label) => (
                                    <Step
                                        sx={{ ':first-of-type': { pl: 0 }, ':last-child': { pr: 0 } }}
                                        key={label}
                                    >
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: { sm: '100%', md: 600 },
                            maxHeight: '720px',
                            gap: { xs: 5, md: 'none' },
                        }}
                    >
                        <Stepper
                            id="mobile-stepper"
                            activeStep={activeStep}
                            alternativeLabel
                            sx={{ display: { sm: 'flex', md: 'none' } }}
                        >
                            {steps.map((label) => (
                                <Step
                                    sx={{
                                        ':first-of-type': { pl: 0 },
                                        ':last-child': { pr: 0 },
                                        '& .MuiStepConnector-root': { top: { xs: 6, sm: 12 } },
                                    }}
                                    key={label}
                                >
                                    <StepLabel
                                        sx={{ '.MuiStepLabel-labelContainer': { maxWidth: '70px' } }}
                                    >
                                        {label}
                                    </StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <Stack spacing={2} useFlexGap>
                                <Typography variant="h1">✅</Typography>
                                <Typography variant="h5">¡Solicitud enviada exitosamente!</Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    Tu solicitud para registrarte como proveedor ha sido enviada a los administradores.
                                    Te notificaremos por correo electrónico cuando sea aprobada.
                                </Typography>
                                <Button
                                    variant="contained"
                                    onClick={() => navigate('/private/dashboard')}
                                    sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }}
                                >
                                    Volver al dashboard
                                </Button>
                            </Stack>
                        ) : (
                            <React.Fragment>
                                {error && (
                                    <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 2 }}>
                                        {error}
                                    </Alert>
                                )}
                                {getStepContent(activeStep)}
                                <Box
                                    sx={[
                                        {
                                            display: 'flex',
                                            flexDirection: { xs: 'column-reverse', sm: 'row' },
                                            alignItems: 'end',
                                            flexGrow: 1,
                                            gap: 1,
                                            pb: { xs: 12, sm: 0 },
                                            mt: { xs: 2, sm: 0 },
                                            mb: '60px',
                                        },
                                        activeStep !== 0
                                            ? { justifyContent: 'space-between' }
                                            : { justifyContent: 'flex-end' },
                                    ]}
                                >
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon />}
                                            onClick={handleBack}
                                            variant="text"
                                            sx={{ display: { xs: 'none', sm: 'flex' } }}
                                            disabled={loading}
                                        >
                                            Anterior
                                        </Button>
                                    )}
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon />}
                                            onClick={handleBack}
                                            variant="outlined"
                                            fullWidth
                                            sx={{ display: { xs: 'flex', sm: 'none' } }}
                                            disabled={loading}
                                        >
                                            Anterior
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        endIcon={loading ? <CircularProgress size={20} /> : <ChevronRightRoundedIcon />}
                                        onClick={handleNext}
                                        sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                                        disabled={loading}
                                    >
                                        {activeStep === steps.length - 1 ? 'Enviar solicitud' : 'Siguiente'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </AppTheme>
    );
}