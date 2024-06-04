import React from 'react';
import './components.css';
import houseIcon from '../assets/icons/house.svg';
import notebookIcon from '../assets/icons/notebook.svg';
import uploadIcon from '../assets/icons/upload.svg';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-icon">
                <img src={houseIcon}/>
            </div>
            <div className="sidebar-icon">
                <img src={notebookIcon}/>
            </div>
        </div>
    );
};

export default Sidebar;
