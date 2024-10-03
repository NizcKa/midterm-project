import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Navbar from "./Components/Navbar.js"
import AddItems from './Components/ItemComponents/AddItem.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AddItems/>
    </div>
  );
}

export default App;
