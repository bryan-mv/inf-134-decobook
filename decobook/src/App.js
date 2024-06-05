import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyBook from './components/MyBook.js';
import Welcome from './components/Welcome.js';
import Home from './components/Home.js';
import Layout from './components/Layout.js';

function App() {
  return (
    <div className="App">
        {/* <Sidebar />
        <MyBook/> */}
        <BrowserRouter>
        <Routes>
            <Route path="viewing" element={<Layout />} />
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Welcome />} />
            {/* <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
