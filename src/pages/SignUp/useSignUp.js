import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useNavigate } from 'react-router-dom';

export const useSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Intentar el registro en Supabase
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            // Error: El correo ya existe o hay un problema de red
            alert(`Error: ${error.message}`);
        } else if (data.user && data.user.identities && data.user.identities.length === 0) {
            // Supabase devuelve una lista de identidades vacía si el usuario ya existe por seguridad
            alert('Este correo ya se encuentra registrado. Por favor, intenta iniciar sesión.');
            navigate('/login');
        } else {
            // Éxito: Registro completado
            alert('¡Registro exitoso! Por favor, inicia sesión con tus credenciales.');
            navigate('/login'); // Redirigir al login
        }
        
        setLoading(false);
    };

    return { email, setEmail, password, setPassword, loading, handleSignUp };
};