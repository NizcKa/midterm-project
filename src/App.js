import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Navbar from "./Components/Navbar.js"
import AddItem from './Components/ItemComponents/AddItem.js';
import UpdateItem from './Components/ItemComponents/UpdateItem.js';
import DisplayItemsAll from './Components/ItemComponents/DisplayItemsAll.js';
import DisplayItemsCategory from './Components/ItemComponents/DisplayItemsCategory.js';


function App() {

  //initializes item array
  const [items, setItems] = useState([]);

  //adds new item to the item array
  const addItem = (newItem) => {
    setItems([...items, newItem]);
  }

  return (
    <div className="App">
      <Navbar/>
      <AddItem addItem={addItem} items={items}/>
      <UpdateItem items={items}/>
      <DisplayItemsAll items={items}/>
      <DisplayItemsCategory items={items}/>
    </div>
  );
}

export default App;
