import logo from './logo.svg';
import './App.css';
import MyBook from './MyBook.js';
import Sidebar from "./sidebar";

function App() {
  return (
    <div className="App">
        <Sidebar />
        <MyBook/>
    </div>
  );
}

export default App;
