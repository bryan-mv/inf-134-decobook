import React from 'react';
import './components.css';
import { useNavigate } from "react-router-dom";

const Shelf_Object = ({name, obj_type, imgUrl, newObject}) => {
    const navigate = useNavigate();
    const viewBook = () => {
        if (obj_type != "Add") {
            if (obj_type == "Journal") {
                navigate("/viewing/journal");
            }
            else if (obj_type == "Bottle") {
                navigate("/viewing/bottle");
            }
            else {
                navigate("/viewing/polaroid");
            }
        } else {
           newObject();
        }
    }
    return (
        <div className="shelf_object" onClick={viewBook}>
            <div className="object_name">{name}</div>
            <img src={imgUrl}></img>
        </div>
    );
};

export default Shelf_Object;
