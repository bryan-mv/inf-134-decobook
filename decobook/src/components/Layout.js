import './components.css';
import TopNav from "./TopNav.js";
import PageView from './PageView.js';

function Layout() {
  return (
    <div className="Layout">
        <TopNav />
        <PageView />
    </div>
  );
}

export default Layout;