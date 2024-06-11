import React, { useEffect, useState } from 'react';
import './IndexCard.css';

const IndexCard = ({ show, onClose, imageSrc, backgroundImage }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (backgroundImage) {
            const img = new Image();
            img.onload = () => {
                setDimensions({ width: img.width, height: img.height });
            };
            img.src = backgroundImage;
        }
    }, [backgroundImage]);

    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    width: dimensions.width,
                    height: dimensions.height,
                }}
            >
                <span className="close-button" onClick={onClose}>
                    &times;
                </span>
                <div className="modal-inner-content">
                    <img src={imageSrc} alt="modal content" className="modal-image" />
                    <div className="modal-text">
                        <h2>Title</h2>
                        <p>Some description text goes here.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IndexCard;