import React from 'react';
import './components.css';
import houseIcon from '../assets/icons/house.svg';
import uploadIcon from '../assets/icons/upload.svg';

const TopNav = () => {
    return (
        <div className="TopNav">
            <img id="home" src={houseIcon}/>
            <h1>Viewing Book 1</h1>
            <img id="upload" src={uploadIcon}/>
        </div>
    );
};

export default TopNav;
