import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './journal.css';

const Journal = ({ pages, backgroundImage }) => {
    return (
        <div className="journal">
            <HTMLFlipBook width={470} height={575} className="flipbook">
                {pages.map((page, index) => (
                    <div key={index} className="page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                        <div className="page-content">
                            <h2 className="page_title">New_Page{index + 1}</h2>
                        </div>
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default Journal;