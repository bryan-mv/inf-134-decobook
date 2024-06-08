import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './components.css';
import stickerBook from '../assets/images/sticker_book.png'
import backIcon from '../assets/images/backIcon.png'

const Sticker_Book = (props) => {
    return (
        <div className="sticker_book">
            <div className="sticker_book_header">
                <img id="back_button" src={backIcon} onClick={ () => props.closeModal() }></img>
                <h1 id="sticker_book_header_title">Select a sticker to add</h1>
            </div>
            <img className="bg_img" src={stickerBook}></img>
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