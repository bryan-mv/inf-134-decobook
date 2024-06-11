import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './components/Welcome.js';
import Home from './components/Home.js';
import Layout from './components/Layout.js';
import collectionView from "./components/collectionView";
import Upload from "./components/Upload.js";

function App() {
  return (
    <div className="App">
        {/* <Sidebar />
        <MyBook/> */}
        <BrowserRouter>
        <Routes>
            <Route path="viewing/:type" element={<Layout />} />
            <Route path="viewing/:type/upload" element={<Upload />} />
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Welcome />} />
            <Route path="collection" element={collectionView()} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
