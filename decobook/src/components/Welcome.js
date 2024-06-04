import './components.css';
import greenBook from '../assets/images/green_book.png';
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home");
    }
  return (
    <div className="Welcome">
        <div className="center_book">
            <img id="greenBook" src={ greenBook }></img>
            <div className="bookHeader">
                <h1>Welcome to Decobook!</h1>
            </div>
            <button className="bookButton" onClick={goHome}>Start Decorating!</button>
        </div>
    </div>
  );
}

export default Welcome;
