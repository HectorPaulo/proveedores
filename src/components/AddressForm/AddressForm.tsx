import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const FormGrid = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
}));

interface AddressFormProps {
    formData?: {
        nombre: string;
        email: string;
        telefono: string;
        ubicacion: string;
        ciudad: string;
        estado: string;
        codigoPostal: string;
        pais: string;
        descripcion: string;
    };
    onFormChange?: (field: string, value: string) => void;
}

export default function AddressForm({ formData, onFormChange }: AddressFormProps) {
    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (onFormChange) {
            onFormChange(field, e.target.value);
        }
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Grid container spacing={3}>
                <Grid size={{ xs: 12 }}>
                    <FormGrid>
                        <FormLabel htmlFor="nombre" required>
                            Nombre de la empresa o negocio
                        </FormLabel>
                        <OutlinedInput
                            id="nombre"
                            name="nombre"
                            type="text"
                            placeholder="Mi Empresa S.A."
                            value={formData?.nombre || ''}
                            onChange={handleChange('nombre')}
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
                
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormGrid>
                        <FormLabel htmlFor="email" required>
                            Correo electrónico
                        </FormLabel>
                        <OutlinedInput
                            id="email"
                            name="email"
                            type="email"
                            placeholder="contacto@empresa.com"
                            value={formData?.email || ''}
                            onChange={handleChange('email')}
                            autoComplete="email"
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
                
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormGrid>
                        <FormLabel htmlFor="telefono" required>
                            Teléfono
                        </FormLabel>
                        <OutlinedInput
                            id="telefono"
                            name="telefono"
                            type="tel"
                            placeholder="+52 123 456 7890"
                            value={formData?.telefono || ''}
                            onChange={handleChange('telefono')}
                            autoComplete="tel"
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
                
                <Grid size={{ xs: 12 }}>
                    <FormGrid>
                        <FormLabel htmlFor="descripcion" required>
                            Descripción del negocio
                        </FormLabel>
                        <TextField
                            id="descripcion"
                            name="descripcion"
                            multiline
                            //rows={3}
                            placeholder="Describe tu negocio, productos principales y lo que te hace único..."
                            value={formData?.descripcion || ''}
                            onChange={handleChange('descripcion')}
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
                
                <Grid size={{ xs: 12 }}>
                    <FormGrid>
                        <FormLabel htmlFor="ubicacion" required>
                            Dirección completa
                        </FormLabel>
                        <OutlinedInput
                            id="ubicacion"
                            name="ubicacion"
                            type="text"
                            placeholder="Calle, número, colonia"
                            value={formData?.ubicacion || ''}
                            onChange={handleChange('ubicacion')}
                            autoComplete="street-address"
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
                
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormGrid>
                        <FormLabel htmlFor="ciudad" required>
                            Ciudad
                        </FormLabel>
                        <OutlinedInput
                            id="ciudad"
                            name="ciudad"
                            type="text"
                            placeholder="Ciudad de México"
                            value={formData?.ciudad || ''}
                            onChange={handleChange('ciudad')}
                            autoComplete="address-level2"
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
                
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormGrid>
                        <FormLabel htmlFor="estado" required>
                            Estado
                        </FormLabel>
                        <OutlinedInput
                            id="estado"
                            name="estado"
                            type="text"
                            placeholder="CDMX"
                            value={formData?.estado || ''}
                            onChange={handleChange('estado')}
                            autoComplete="address-level1"
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
                
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormGrid>
                        <FormLabel htmlFor="codigoPostal" required>
                            Código Postal
                        </FormLabel>
                        <OutlinedInput
                            id="codigoPostal"
                            name="codigoPostal"
                            type="text"
                            placeholder="01000"
                            value={formData?.codigoPostal || ''}
                            onChange={handleChange('codigoPostal')}
                            autoComplete="postal-code"
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
                
                <Grid size={{ xs: 12, md: 6 }}>
                    <FormGrid>
                        <FormLabel htmlFor="pais" required>
                            País
                        </FormLabel>
                        <OutlinedInput
                            id="pais"
                            name="pais"
                            type="text"
                            placeholder="México"
                            value={formData?.pais || ''}
                            onChange={handleChange('pais')}
                            autoComplete="country"
                            required
                            size="small"
                        />
                    </FormGrid>
                </Grid>
            </Grid>
        </Box>
    );
}