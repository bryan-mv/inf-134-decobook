import React, { useRef } from 'react';
import './components.css';
import { Link } from "react-router-dom";
import backIcon from '../assets/images/backIcon.png';
import uploadLarge from '../assets/icons/upload.svg';
import houseIcon from '../assets/icons/house.svg';
import { useNavigate } from "react-router-dom";

const Upload = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home");
    }

    const inputFile = useRef(null);

    const uploadFile = () => {
        inputFile.current.click();
  };

    return (
        <div className="upload_stickers">
            <div className="TopNav">
            <img id="home" onClick={goHome} src={houseIcon}/>
                <h1 id="title">Upload Sticker</h1>
            </div>
            <div className="upload_book">
                <div className="sticker_book_header">
                <Link to=".." relative="path">
                    <img id="back_button" src={backIcon}></img>
                </Link>
                    <h1 id="sticker_book_header_title">Drag or Click to Upload Sticker</h1>
                </div>
                <div className="upload_box">
                    <img className="upload_large_icon" src={uploadLarge}></img>
                    <button onClick={uploadFile}>Upload jpg, png, img</button>
                    <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
                </div>
            </div>
        </div>
    );
};


export default Upload;