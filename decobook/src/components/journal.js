import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './journal.css';
import sticker_group from '../assets/images/sticker_group.png';

const Journal = ({ pages, backgroundImage }) => {
    return (
        <div className="journal">
            <HTMLFlipBook width={470} height={575} className="flipbook">
                {pages.map((page, index) => (
                    <div key={index} className="page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                        <div className="page-content">
                            <h2 className="page_title">New_Page{index + 1}</h2>
                            <img src={sticker_group} className="sticker_group"></img>
                        </div>
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default Journal;