import React, { useState } from 'react';

function UpdateItem({updateItem, items}) {  // HOLY FUNCTIONAL. Should recheck for validations just in case.
    const [itemID, setItemID] = useState("");
    const [updateField, setUpdateField] = useState("");
    const [updateValue, setUpdateValue] = useState("");

    //message field
    const [message, setMessage] = useState("");

    const handleUpdateItem = (e) => {
        e.preventDefault();
    
        const inpFields = [itemID, updateField, updateValue];
        const itemToUpdate = items.find(existingItem => existingItem.itemID === itemID);    //searches for id to update
    
        if (inpFields.some(field => !field)) {  // Checks for empty fields
            setMessage("Please fill out all the fields.");
        }
        else if (!itemToUpdate) {  // Checks if the item exists
            setMessage("This item does not exist.");
        } 
        else {
            updateItem(itemID, updateField, updateValue);  // Passes values to updateItem in App.js

            setItemID("");
            setUpdateField("");
            setUpdateValue("");
            setMessage("Item successfully updated.");
        }   
    };

    return (
      <div>
        <h1>Update Item</h1>
        <form className="container text-center align-items-center" onSubmit={handleUpdateItem}> 
            <div className="row">
                <input 
                    type="text"
                    value={itemID}
                    onChange={(e) => setItemID(e.target.value)}
                    placeholder="Item ID"
                    required
                />
            </div>
            <div className="row">
                <select
                    value={updateField}
                    onChange={(e) => setUpdateField(e.target.value)}
                >
                    <option value="" disabled selected hidden>Select field to update</option>
                    <option value="Quantity">Quantity</option>
                    <option value="Price">Price</option>
                </select>
            </div>
            <div className="row">
                <input 
                    type="number"
                    value={updateValue}
                    onChange={(e) => setUpdateValue(e.target.value)}
                    placeholder="New value"
                    required
                />
            </div>
            <div className="row pt-3">
                <button>Update</button>
            </div>
        </form>

        <p>{message}</p>

      </div>
    );
  }

  export default UpdateItem;