import React from 'react';
import './components.css';
import { useNavigate } from "react-router-dom";

const Shelf_Object = ({name, obj_type, imgUrl}) => {
    const navigate = useNavigate();
    const viewBook = () => {
        navigate("/viewing");
    }
    return (
        <div className="shelf_object" onClick={viewBook}>
            <div className="object_name">{name}</div>
            <img src={imgUrl}></img>
        </div>
    );
};

export default Shelf_Object;
