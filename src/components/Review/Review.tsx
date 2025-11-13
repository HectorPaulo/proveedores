import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

interface ReviewProps {
    formData: {
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
    };
}

export default function Review({ formData }: ReviewProps) {
    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Typography variant="h6" gutterBottom>
                Resumen de la solicitud
            </Typography>
            
            <Divider />
            
            <Box>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700, mb: 1.5 }}>
                    Información del proveedor
                </Typography>
                <List disablePadding>
                    <ListItem sx={{ py: 0.5, px: 0, display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText 
                            primary="Nombre de la empresa" 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {formData.nombre || '-'}
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0, display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText 
                            primary="Correo electrónico" 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {formData.email || '-'}
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0, display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText 
                            primary="Teléfono" 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {formData.telefono || '-'}
                        </Typography>
                    </ListItem>
                </List>
            </Box>

            <Divider />

            <Box>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                    Dirección
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ color: 'text.secondary' }}>
                    {formData.ubicacion || '-'}
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ color: 'text.secondary' }}>
                    {formData.ciudad && formData.estado 
                        ? `${formData.ciudad}, ${formData.estado}, ${formData.codigoPostal}` 
                        : '-'}
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ color: 'text.secondary' }}>
                    {formData.pais || '-'}
                </Typography>
            </Box>

            <Divider />

            <Box>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700, mb: 1 }}>
                    Descripción del negocio
                </Typography>
                <Typography variant="body2" gutterBottom sx={{ color: 'text.secondary' }}>
                    {formData.descripcion || '-'}
                </Typography>
            </Box>

            <Divider />

            <Box>
                <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700, mb: 1.5 }}>
                    Información de productos y servicios
                </Typography>
                <List disablePadding>
                    <ListItem sx={{ py: 0.5, px: 0, display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText 
                            primary="Tipo de proveedor" 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {formData.tipo || '-'}
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
                        <ListItemText 
                            primary="Categorías de productos" 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                            sx={{ mb: 0.5 }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {formData.categoriasProductos || '-'}
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0, display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText 
                            primary="Compra mínima" 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {formData.compraMinima || 'No especificada'}
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0, display: 'flex', justifyContent: 'space-between' }}>
                        <ListItemText 
                            primary="Horario de atención" 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                        />
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {formData.horario || '-'}
                        </Typography>
                    </ListItem>
                    <ListItem sx={{ py: 0.5, px: 0, flexDirection: 'column', alignItems: 'flex-start' }}>
                        <ListItemText 
                            primary="Métodos de pago" 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
                            sx={{ mb: 1 }}
                        />
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {formData.metodosPago && formData.metodosPago.length > 0 ? (
                                formData.metodosPago.map((metodo) => (
                                    <Chip key={metodo} label={metodo} size="small" />
                                ))
                            ) : (
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    No especificados
                                </Typography>
                            )}
                        </Box>
                    </ListItem>
                </List>
            </Box>
        </Stack>
    );
}