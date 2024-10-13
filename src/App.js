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

  // updates an item in the item array
  const updateItem = (itemID, updateField, updateValue) => {
    const updatedItems = items.map(item => {  //iterates over the item array
      if (item.itemID === itemID) { //checks for matching item ID and changes its respective field if found
        if (updateField === "Quantity") {
          return {...item, itemQuantity: parseInt(updateValue)}; 
        } 
        else if (updateField === "Price") {
          return {...item, itemPrice: parseFloat(updateValue)}; 
        }
      }
      return item; //if not found, leaves the item unchanged
    });

    setItems(updatedItems); 
  };

  return (
    <div className="App">
      <Navbar/>
      <AddItem addItem={addItem} items={items}/>
      <UpdateItem updateItem={updateItem} items={items}/>
      <DisplayItemsAll items={items}/>
      <DisplayItemsCategory items={items}/>
    </div>
  );
}

export default App;
