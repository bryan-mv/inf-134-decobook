import React from 'react';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import './sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-icon">
                <FaHome />
            </div>
            <div className="sidebar-icon">
                <FaUser />
            </div>
            <div className="sidebar-icon">
                <FaCog />
            </div>
        </div>
    );
};

export default Sidebar;
