import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import './Login.css'; // Importamos el diseño

const Login = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        const { error } = await supabase.auth.signInWithOtp({ email });

        if (error) {
            alert(error.message);
        } else {
            alert('¡Enlace enviado! Revisa tu bandeja de entrada.');
        }
        setLoading(false);
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Bienvenido</h2>
                <p>Ingresa tu correo para recibir un enlace mágico</p>
                <form className="login-form" onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button className="btn-primary" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar Enlace'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;