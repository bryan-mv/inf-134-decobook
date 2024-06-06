import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './journal.css';

const Journal = ({ pages, backgroundImage }) => {
    return (
        <div className="journal">
            <HTMLFlipBook width={500} height={672} className="flipbook">
                {pages.map((page, index) => (
                    <div key={index} className="page" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
                        <div className="page-content">
                            <p>{page}</p>
                        </div>
                    </div>
                ))}
            </HTMLFlipBook>
        </div>
    );
};

export default Journal;