import React, {useEffect, useState} from 'react';
import './Collection.css';
import IndexCard from "./IndexCard";

const Collection = ({ images, backgroundImage, modalBackgroundImage }) => {
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const img = new Image();
        img.onload = () => {
            setDimensions({ width: img.width, height: img.height });
        };
        img.src = backgroundImage;
    }, [backgroundImage]);

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div
            className="sticker_collection"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                width: dimensions.width,
                height: dimensions.height,
            }}
        >
            <div className="sticker_book_header">
                <h1 id="sticker_book_header_title">Viewing Collection</h1>
            </div>
            <div className="collection">
            {images.map((image, index) => (
                <div key={index} className="image-container" onClick={() => handleImageClick(image)}>
                    <img src={image} alt={`img-${index}`} className="grid-image" />
                </div>
            ))}
            <IndexCard show={showModal} onClose={handleCloseModal} imageSrc={selectedImage} backgroundImage={modalBackgroundImage} />
        </div>
        </div>
    );
};

export default Collection;