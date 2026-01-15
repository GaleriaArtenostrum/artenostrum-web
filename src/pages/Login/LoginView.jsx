import React from 'react';
import './login.css';

const LoginView = ({ email, setEmail, loading, handleLogin }) => (
  <div className="login-container">
    <div className="login-card">
      <h2>Bienvenido</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="tu@email.com" 
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Enviar enlace'}
        </button>
      </form>
    </div>
  </div>
);

export default LoginView;