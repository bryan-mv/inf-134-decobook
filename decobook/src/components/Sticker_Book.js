import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './components.css';
import stickerBook from '../assets/images/sticker_book.png'
import backIcon from '../assets/images/backIcon.png'

const Sticker_Book = (props) => {

    const handleImageClick = (image) => {
        props.onSelectImage(image)
        props.closeModal()
    };

    return (
        <div className="sticker_book">
            <div className="sticker_book_header">
                <img id="back_button" src={backIcon} onClick={ () => props.closeModal() }></img>
                <h1 id="sticker_book_header_title">Select a sticker to add</h1>
            </div>
            <div className="sticker_grid">
                {props.images.map((image, index) => (
                    <div key={index} className="image-container" onClick={() => handleImageClick(image)}>
                        <img src={image} alt={`img-${index}`} className="grid-image" />
                    </div>
                ))}
            </div>
            {/* <HTMLFlipBook width={500} height={672} className="flipbook">
                {pages.map((page, index) => (
                    <div key={index} className="page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                        <div className="page-content">
                            <p>{page}</p>
                        </div>
                    </div>
                ))}
            </HTMLFlipBook> */}
        </div>
    );
};

export default Sticker_Book;