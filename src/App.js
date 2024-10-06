import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Navbar from "./Components/Navbar.js"
import AddItem from './Components/ItemComponents/AddItem.js';
import UpdateItem from './Components/ItemComponents/UpdateItem.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AddItem/>
      <UpdateItem/>
    </div>
  );
}

export default App;
