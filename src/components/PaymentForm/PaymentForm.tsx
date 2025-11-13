import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

const FormGrid = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
}));

interface PaymentFormProps {
    formData?: {
        tipo: string;
        compraMinima: string;
        horario: string;
        metodosPago: string[];
        categoriasProductos: string;
    };
    onFormChange?: (field: string, value: string | string[]) => void;
}

const categorias = [
    'Productos agrícolas',
    'Productos manufacturados',
    'Cristalería',
    'Textiles',
    'Alimentos',
    'Tecnología',
    'Construcción',
    'Otro'
];

const metodosPagoDisponibles = [
    'Efectivo',
    'Transferencia bancaria',
    'Tarjeta de crédito',
    'Tarjeta de débito',
    'PayPal',
    'Mercado Pago'
];

export default function PaymentForm({ formData, onFormChange }: PaymentFormProps) {
    const handleChange = (field: string) => (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any
    ) => {
        if (onFormChange) {
            onFormChange(field, e.target.value);
        }
    };

    const handleMetodosPagoChange = (event: any) => {
        const value = event.target.value;
        if (onFormChange) {
            onFormChange('metodosPago', typeof value === 'string' ? value.split(',') : value);
        }
    };

    return (
        <Stack spacing={3} useFlexGap sx={{ width: '100%' }}>
            <Typography variant="h6" gutterBottom>
                Información de productos y servicios
            </Typography>
            
            <FormGrid>
                <FormControl fullWidth required size="small">
                    <InputLabel id="tipo-label">Tipo de proveedor</InputLabel>
                    <Select
                        labelId="tipo-label"
                        id="tipo"
                        value={formData?.tipo || ''}
                        onChange={handleChange('tipo')}
                        label="Tipo de proveedor"
                    >
                        {categorias.map((cat) => (
                            <MenuItem key={cat} value={cat}>
                                {cat}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </FormGrid>

            <FormGrid>
                <FormLabel htmlFor="categoriasProductos" required>
                    Categorías y productos principales
                </FormLabel>
                <TextField
                    id="categoriasProductos"
                    name="categoriasProductos"
                    multiline
                    //rows={3}
                    placeholder="Ej: Café orgánico, Azúcar refinada, Frutas tropicales..."
                    value={formData?.categoriasProductos || ''}
                    onChange={handleChange('categoriasProductos')}
                    required
                    size="small"
                />
            </FormGrid>

            <FormGrid>
                <FormLabel htmlFor="compraMinima">
                    Compra mínima (opcional)
                </FormLabel>
                <OutlinedInput
                    id="compraMinima"
                    name="compraMinima"
                    type="text"
                    placeholder="$1000 MXN"
                    value={formData?.compraMinima || ''}
                    onChange={handleChange('compraMinima')}
                    size="small"
                />
            </FormGrid>

            <FormGrid>
                <FormLabel htmlFor="horario" required>
                    Horario de atención
                </FormLabel>
                <OutlinedInput
                    id="horario"
                    name="horario"
                    type="text"
                    placeholder="Lun-Vie 9:00-18:00"
                    value={formData?.horario || ''}
                    onChange={handleChange('horario')}
                    required
                    size="small"
                />
            </FormGrid>

            <FormGrid>
                <FormControl fullWidth required size="small">
                    <InputLabel id="metodosPago-label">Métodos de pago aceptados</InputLabel>
                    <Select
                        labelId="metodosPago-label"
                        id="metodosPago"
                        multiple
                        value={formData?.metodosPago || []}
                        onChange={handleMetodosPagoChange}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {(selected as string[]).map((value) => (
                                    <Chip key={value} label={value} size="small" />
                                ))}
                            </Box>
                        )}
                        label="Métodos de pago aceptados"
                    >
                        {metodosPagoDisponibles.map((metodo) => (
                            <MenuItem key={metodo} value={metodo}>
                                {metodo}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </FormGrid>
        </Stack>
    );
}