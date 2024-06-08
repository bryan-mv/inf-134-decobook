import React, { useState } from 'react';
import './components.css';
import Journal from "./journal";
import StickerBook from "./Sticker_Book.js";
import stickerComponent from '../assets/images/sticker_component.png';

function PageView() {
    const pages = [
        "Page 1",
        "Page 2",
        "Page 3",
        "Page 4"
    ];
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const backgroundImg = '../assets/images/journal-bg.png'

    return (
        <div className="PageView">
            <Journal pages={pages} backgroundImage={backgroundImg}/>
            <div className="addSticker" onClick={handleOpen}>
                <img src={stickerComponent}></img>
            </div>
            { open ? <StickerBook closeModal={handleClose}></StickerBook> : null }
            { open ? <div className="modal_background"></div> : null }
        </div>
    );
}

export default PageView;
