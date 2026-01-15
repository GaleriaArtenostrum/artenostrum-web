import React from 'react';
import './admin.css';

const AdminView = ({ user, handleLogout }) => (
    <div className="admin-container">
        <header className="admin-header">
            <h1>Panel de Administración</h1>
            {user && <span>Bienvenido, {user.email}</span>}
            <button onClick={handleLogout} className="btn-logout">Cerrar Sesión</button>
        </header>
        <main className="admin-content">
            <div className="stats-card">
                <h3>Resumen de Galería</h3>
                <p>Aquí verás tus próximas métricas.</p>
            </div>
        </main>
    </div>
);

export default AdminView;