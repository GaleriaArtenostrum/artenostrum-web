import { useState } from 'react';

export const useGallery = () => {
    // Ejemplo de datos locales hasta que crees tu tabla en Supabase
    const [artworks] = useState([
        { id: 1, title: 'Obra 1', description: 'Descripción de la obra', url: 'https://via.placeholder.com/200' },
        { id: 2, title: 'Obra 2', description: 'Descripción de la obra', url: 'https://via.placeholder.com/200' },
    ]);

    return { artworks };
};