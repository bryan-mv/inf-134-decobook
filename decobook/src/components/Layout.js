import React, { useState } from 'react';
import './components.css';
import TopNav from "./TopNav.js";
import PageView from './PageView.js';
import Bottle from './Bottle.js';
import Polaroid from './Polaroid.js';
import { useParams } from 'react-router-dom';
import StickerBook from "./Sticker_Book.js";
import stickerComponent from '../assets/images/sticker_component.png';

function Layout() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { type } = useParams();

  return (
    <div className="Layout">
        { type == "journal" ? <div><TopNav title={"Viewing Book 1"}/><PageView /></div> : null }
        { type == "bottle" ? <div><TopNav title={"Viewing Bottle"}/><Bottle /></div> : null }
        { type == "polaroid" ? <div><TopNav title={"Viewing Polaroid"}/><Polaroid /></div> : null }
        <div className="addSticker" onClick={handleOpen}>
                <img src={stickerComponent}></img>
            </div>
          { open ? <StickerBook closeModal={handleClose}></StickerBook> : null }
          { open ? <div className="modal_background"></div> : null }
    </div>
  );
}

export default Layout;
