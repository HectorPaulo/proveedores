import React, { useState } from 'react';
import PublicLayout from '../../components/Layout/PublicLayout';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        //TODO: implementar el envío del formulario
        alert('Mensaje enviado correctamente. Te contactaremos pronto.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <PublicLayout>
           <div>
            
           </div>
        </PublicLayout>
    );
};

export default Contact;