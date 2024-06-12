import React from 'react';
import Draggable from 'react-draggable';
import './components.css';

const Sticker = ({ src, alt }) => {
    return (
        <Draggable>
            <img src={src} alt={alt} className="sticker" />
        </Draggable>
    );
};

export default Sticker;