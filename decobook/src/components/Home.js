import './components.css';
import greenBook from '../assets/images/green_book.png';
import Sidebar from "./sidebar.js";
import Bookshelf from './Bookshelf.js';

function Home() {
  return (
    <div className="Home">
        <Sidebar />
        <Bookshelf />
    </div>
  );
}

export default Home;
