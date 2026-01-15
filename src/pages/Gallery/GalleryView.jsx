import React from 'react';
import { Link } from 'react-router-dom';
import './gallery.css';

const GalleryView = ({ artworks }) => {
    return (
        <div className="gallery-page">
            <header className="gallery-header">
                <h1>Galería Artenostrum</h1>
            </header>

            <main className="gallery-grid">
                {artworks.map(art => (
                    <div key={art.id} className="art-card">
                        <img src={art.url} alt={art.title} />
                        <h3>{art.title}</h3>
                        <p>{art.description}</p>
                    </div>
                ))}
            </main>

            <footer className="gallery-footer">
                <Link to="/signup" className="btn-footer">Registrarse</Link>
                <Link to="/login" className="btn-footer">Iniciar Sesión</Link>
            </footer>
        </div>
    );
};

export default GalleryView;