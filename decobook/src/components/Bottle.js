import React from 'react';
import './components.css';
import deco_bottle from '../assets/images/decorated_bottle.png';

const Bottle = () => {
    return (
        <div className="Bottle">
            <img src={deco_bottle}></img>
        </div>
    );
};

export default Bottle;