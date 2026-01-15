import React from 'react';
import './signup.css';

const SignUpView = ({ email, setEmail, password, setPassword, loading, handleSignUp }) => {
    return (
        <div className="login-container"> {/* Reutilizamos clases de login para consistencia */}
            <div className="login-card">
                <h2>Crear Cuenta</h2>
                <p>Únete a Galería Artenostrum</p>
                <form className="login-form" onSubmit={handleSignUp}>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña segura"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="btn-primary" disabled={loading}>
                        {loading ? 'Creando cuenta...' : 'Registrarse'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpView;