import React from 'react';
import './components.css';
import photo_card from '../assets/images/mr_smart.png';

const Polaroid = () => {
    return (
        <div className="Polaroid">
            <img src={photo_card} className="polaroid_img"></img>
        </div>
    );
};

export default Polaroid;