import React from 'react';
import './components.css';

const Shelf_Object = ({name, obj_type, imgUrl}) => {
    return (
        <div className="shelf_object">
            <div className="object_name">{name}</div>
            <img src={imgUrl}></img>
        </div>
    );
};

export default Shelf_Object;
