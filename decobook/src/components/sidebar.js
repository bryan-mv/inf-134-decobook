import React from 'react';
import './components.css';
import houseIcon from '../assets/icons/house.svg';
import notebookIcon from '../assets/icons/notebook.svg';
import uploadIcon from '../assets/icons/upload.svg';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate()
    const goCollection = () => {
        navigate("/collection")
    }
    return (
        <div className="sidebar">
            <div className="sidebar-icon">
                <img src={houseIcon}/>
            </div>
            <div className="sidebar-icon">
                <img src={notebookIcon} onClick={goCollection}/>
            </div>
        </div>
    );
};

export default Sidebar;
