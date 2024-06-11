import './components.css';
import TopNav from "./TopNav.js";
import PageView from './PageView.js';
import Bottle from './Bottle.js';
import Polaroid from './Polaroid.js';
import { useParams } from 'react-router-dom';

function Layout() {
  const { type } = useParams();

  return (
    <div className="Layout">
        { type == "journal" ? <div><TopNav title={"Viewing Book 1"}/><PageView /></div> : null }
        { type == "bottle" ? <div><TopNav title={"Viewing Bottle"}/><Bottle /></div> : null }
        { type == "polaroid" ? <div><TopNav title={"Viewing Polaroid"}/><Polaroid /></div> : null }
    </div>
  );
}

export default Layout;
