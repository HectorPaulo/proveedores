import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Chip from '@mui/material/Chip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

type User = {
    id: string;
    fullName: string;
    email: string;
    role: string;
    isActive: boolean;
    status?: 'pending' | 'approved' | 'rejected';
};

const initialUsers: User[] = [
    {
        id: '1e07b56c-6544-4aea-8b5b-8865116b9400',
        fullName: 'Danielito',
        email: 'dani@gmail.com',
        role: 'cliente',
        isActive: true,
        status: 'pending',
    },
    {
        id: 'b2f6a9a2-1111-4aaa-aaaa-123456789abc',
        fullName: 'María López',
        email: 'maria@example.com',
        role: 'cliente',
        isActive: false,
        status: 'rejected',
    },
    {
        id: 'c3d7b8b3-2222-4bbb-bbbb-987654321def',
        fullName: 'Carlos Pérez',
        email: 'carlos@example.com',
        role: 'proveedor',
        isActive: true,
        status: 'approved',
    },
];

export const UsersTable: React.FC = () => {
    const [users, setUsers] = useState<User[]>(initialUsers);

    const setStatus = (id: string, status: User['status']) => {
        setUsers(prev =>
            prev.map(u => (u.id === id ? { ...u, status, isActive: status === 'approved' } : u))
        );
    };

    return (
        <TableContainer component={Paper}>
            <Table size="small" aria-label="users table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Rol</TableCell>
                        <TableCell>Activo</TableCell>
                        <TableCell>Estado</TableCell>
                        <TableCell align="center">Acciones</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {users.map(user => (
                        <TableRow key={user.id}>
                            <TableCell>{user.fullName}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            <TableCell>{user.isActive ? 'Sí' : 'No'}</TableCell>
                            <TableCell>
                                <Chip
                                    label={user.status ?? 'pending'}
                                    color={
                                        user.status === 'approved' ? 'success' : user.status === 'rejected' ? 'error' : 'default'
                                    }
                                    size="small"
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Tooltip title="Aprobar">
                                    <span>
                                        <IconButton
                                            aria-label="aprobar"
                                            color="success"
                                            onClick={() => setStatus(user.id, 'approved')}
                                            disabled={user.status === 'approved'}
                                        >
                                            <CheckCircleOutlineIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>

                                <Tooltip title="Rechazar">
                                    <span>
                                        <IconButton
                                            aria-label="rechazar"
                                            color="error"
                                            onClick={() => setStatus(user.id, 'rejected')}
                                            disabled={user.status === 'rejected'}
                                        >
                                            <CancelOutlinedIcon />
                                        </IconButton>
                                    </span>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;