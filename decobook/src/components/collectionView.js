import './components.css';
import TopNav from "./TopNav.js";
import Collection from "./Collection";
import stickerBook from '../assets/images/sticker_book.png'
import image1 from '../assets/images/image1.png'
import image2 from '../assets/images/image2.png'
import image3 from '../assets/images/image3.png'
import image4 from '../assets/images/image4.png'
import image5 from '../assets/images/image5.png'
import image6 from '../assets/images/image6.png'
import image7 from '../assets/images/image7.png'
import index_card from '../assets/images/index_card.png'

function collectionView() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
    ];

    const backgroundImage = stickerBook;
    const modalBackgroundImage = index_card

    return (
        <div className="Layout">
            <TopNav title={"Sticker Collection"}/>
            <Collection images={images} backgroundImage={backgroundImage} modalBackgroundImage={modalBackgroundImage}/>
        </div>
    );
}

export default collectionView;