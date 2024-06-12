import React, { useState } from 'react';
import './components.css';
import TopNav from "./TopNav.js";
import PageView from './PageView.js';
import Bottle from './Bottle.js';
import Polaroid from './Polaroid.js';
import { useParams } from 'react-router-dom';
import StickerBook from "./Sticker_Book.js";
import stickerComponent from '../assets/images/sticker_component.png';
import Sticker from "./Sticker";
import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import image6 from "../assets/images/image6.png";
import image7 from "../assets/images/image7.png";

function Layout() {
    const [stickers, setStickers] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { type } = useParams();

  const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ];

    const handleSelectImage = (image) => {
        setStickers([...stickers, image]);
    };

  return (
    <div className="Layout">
        { type === "journal" ? <div><TopNav title={"Viewing Journal"}/><PageView /></div> : null }
        { type === "bottle" ? <div><TopNav title={"Viewing Bottle"}/><Bottle /></div> : null }
        { type === "polaroid" ? <div><TopNav title={"Viewing Polaroid"}/><Polaroid /></div> : null }
        {stickers.map((image, index) => (
            <Sticker key={index} src={image} alt={`draggable-${index}`} />
        ))}
        <div className="addSticker" onClick={handleOpen}>
                <img src={stickerComponent}></img>
            </div>
          { open ? <StickerBook images= {images} closeModal={handleClose} onSelectImage={handleSelectImage}></StickerBook> : null }
          { open ? <div className="modal_background"></div> : null }
    </div>
  );
}

export default Layout;
