import React, {useEffect, useState} from 'react';
import './Collection.css';

const Collection = ({ images, backgroundImage }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
        };
        img.src = backgroundImage;
    }, [backgroundImage]);

    return (
        <div className="sticker_collection"
        style={{
            backgroundImage: `url(${backgroundImage})`,
            width: dimensions.width,
            height: dimensions.height,
        }}>
            <div className="sticker_book_header">
                <h1 id="sticker_book_header_title">Viewing Collection</h1>
            </div>
            <div className="collection">
            {images.map((image, index) => (
                <div key={index} className="image-container">
                    <img src={image} alt={`img-${index}`} className="grid-image" />
                </div>
            ))}
        </div>
        </div>
    );
};


export default Collection;