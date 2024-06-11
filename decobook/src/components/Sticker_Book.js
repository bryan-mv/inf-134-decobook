import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './components.css';
import stickerBook from '../assets/images/sticker_book.png'
import backIcon from '../assets/images/backIcon.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'


const Sticker_Book = (props) => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ];
    return (
        <div className="sticker_book">
            <div className="sticker_book_header">
                <img id="back_button" src={backIcon} onClick={ () => props.closeModal() }></img>
                <h1 id="sticker_book_header_title">Select a sticker to add</h1>
            </div>
            <div className="sticker_grid">
                {images.map((image, index) => (
                    <div key={index} className="image-container">
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