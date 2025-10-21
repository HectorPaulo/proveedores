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

const steps = ['Información del proveedor', 'Información de productos', 'Detalles y preferencias'];
function getStepContent(step: number) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}
export function Checkout(props: { disableCustomTheme?: boolean }) {
    const [activeStep, setActiveStep] = React.useState(0);
    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
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
                    <div className='flex flex-row items-end justify-around'>

                    {/*<img */}
                    {/*    src='/src/assets/logo.png'*/}
                    {/*    alt='Logo'*/}
                    {/*    style={{ height: 35, width: 40 }}*/}
                    {/*    />*/}
                    {/*    <h1 className='text-md font-extrabold'>Mercado de proveedores</h1>*/}
                        </div>
                    {/* <SitemarkIcon /> */}
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: 800,
                        }}
                    >
                        {/*<Info totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'} />*/}
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
                    {/*<Card sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}>*/}
                    {/*    <CardContent*/}
                    {/*        sx={{*/}
                    {/*            display: 'flex',*/}
                    {/*            width: '100%',*/}
                    {/*            alignItems: 'center',*/}
                    {/*            justifyContent: 'space-between',*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        <div>*/}
                    {/*            <Typography variant="subtitle2" gutterBottom>*/}
                    {/*                Selected products*/}
                    {/*            </Typography>*/}
                    {/*            <Typography variant="body1">*/}
                    {/*                {activeStep >= 2 ? '$144.97' : '$134.98'}*/}
                    {/*            </Typography>*/}
                    {/*        </div>*/}
                    {/*        <InfoMobile totalPrice={activeStep >= 2 ? '$144.97' : '$134.98'} />*/}
                    {/*    </CardContent>*/}
                    {/*</Card>*/}
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
                                <Typography variant="h1">📦</Typography>
                                <Typography variant="h5">Thank you for your order!</Typography>
                                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                                    Your order number is
                                    <strong>&nbsp;#140396</strong>. We have emailed your order
                                    confirmation and will update you once its shipped.
                                </Typography>
                                <Button
                                    variant="contained"
                                    sx={{ alignSelf: 'start', width: { xs: '100%', sm: 'auto' } }}
                                >
                                    Go to my orders
                                </Button>
                            </Stack>
                        ) : (
                            <React.Fragment>
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
                                        >
                                            Previous
                                        </Button>
                                    )}
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon />}
                                            onClick={handleBack}
                                            variant="outlined"
                                            fullWidth
                                            sx={{ display: { xs: 'flex', sm: 'none' } }}
                                        >
                                            Previous
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        endIcon={<ChevronRightRoundedIcon />}
                                        onClick={handleNext}
                                        sx={{ width: { xs: '100%', sm: 'fit-content' } }}
                                    >
                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
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