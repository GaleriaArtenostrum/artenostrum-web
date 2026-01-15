import React from 'react';
import { useGallery } from './useGallery';
import GalleryView from './GalleryView';

const Gallery = () => {
    const logic = useGallery();
    return <GalleryView {...logic} />;
};

export default Gallery;