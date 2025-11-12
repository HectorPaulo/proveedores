import React, { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import CircularProgress from '@mui/material/CircularProgress';
import Header from "../../../components/Header/Header.tsx";
import Sidebar from "../../../components/Sidebar/Sidebar.tsx";

type Profile = {
  fullName: string;
  email: string;
  phone?: string;
  bio?: string;
  avatarUrl?: string | null;
};

const EditProfile: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    fullName: '',
    email: '',
    phone: '',
    bio: '',
    avatarUrl: null,
  });
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetch('/api/profile')
      .then(async res => {
        if (!res.ok) throw new Error('No se pudo cargar el perfil');
        const data = await res.json();
        if (mounted) setProfile({
          fullName: data.fullName ?? '',
          email: data.email ?? '',
          phone: data.phone ?? '',
          bio: data.bio ?? '',
          avatarUrl: data.avatarUrl ?? null,
        });
      })
      .catch(() => {
      })
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (!avatarFile) {
      setPreview(profile.avatarUrl ?? null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPreview(String(reader.result));
    reader.readAsDataURL(avatarFile);
  }, [avatarFile, profile.avatarUrl]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setAvatarFile(file);
      setErrorMsg(null);
    }
  };

  const validate = () => {
    if (!profile.fullName.trim()) {
      setErrorMsg('El nombre es obligatorio.');
      return false;
    }
    if (!profile.email.trim()) {
      setErrorMsg('El correo es obligatorio.');
      return false;
    }
    setErrorMsg(null);
    return true;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSuccessMsg(null);
    try {
      const form = new FormData();
      form.append('fullName', profile.fullName);
      form.append('email', profile.email);
      form.append('phone', profile.phone ?? '');
      form.append('bio', profile.bio ?? '');
      if (avatarFile) form.append('avatar', avatarFile);

      const res = await fetch('/api/profile', {
        method: 'PUT',
        body: form,
      });
      if (!res.ok) throw new Error('Error al actualizar perfil');
      const updated = await res.json();
      setProfile({
        fullName: updated.fullName ?? profile.fullName,
        email: updated.email ?? profile.email,
        phone: updated.phone ?? profile.phone,
        bio: updated.bio ?? profile.bio,
        avatarUrl: updated.avatarUrl ?? preview,
      });
      setAvatarFile(null);
      setSuccessMsg('Perfil actualizado correctamente.');
    } catch {
      setErrorMsg('No se pudo actualizar el perfil. Inténtalo de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <Sidebar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold mb-4">Editar perfil</h2>

        {successMsg && <Alert severity="success" sx={{ mb: 2 }}>{successMsg}</Alert>}
        {errorMsg && <Alert severity="error" sx={{ mb: 2 }}>{errorMsg}</Alert>}

        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} className="bg-gradient-to-bl from-gray-200 via-gray-300 to-gray-400 opacity-80 p-6 rounded-lg shadow-md">
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar src={preview ?? undefined} sx={{ width: 80, height: 80 }} />
            <label>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="avatar-file"
                type="file"
                onChange={handleFileChange}
              />
              <IconButton color="primary" component="span" aria-label="upload avatar">
                <PhotoCamera />
              </IconButton>
            </label>
            <div className="text-sm text-gray-400">Formato JPG/PNG. Máx 2MB.</div>
          </Stack>

          <TextField
            label="Nombre completo"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Correo electrónico"
            name="email"
            type="email"
            value={profile.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Teléfono"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            label="Biografía"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }}>
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? <CircularProgress size={20} /> : 'Guardar cambios'}
            </Button>
            <Button
              type="button"
              variant="outlined"
              onClick={() => {
                // reset a valores cargados
                setAvatarFile(null);
                setPreview(profile.avatarUrl ?? null);
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
            >
              Restablecer
            </Button>
          </Box>
        </Box>
      </main>
    </div>
  );
};

export default EditProfile;