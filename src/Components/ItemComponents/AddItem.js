import React, { useState } from 'react';

const AddItem = ({addItem, items}) => { //REMINDER TO ADD VALIDATIONS (ESPECIALLY FOR NUMBERS)

    //input item values
    const [itemID, setItemID] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    
    const [message, setMessage] = useState("");     //message field
    
    //prevents the submission of non-valid values in number fields
    const handleNumber = (e) => { 
        const value = e.target.value;
        e.target.value = value.replace(/[^\d]/g, '');
    }

    //handles item input
    const handleAddItem = (e) => {
        e.preventDefault();

        const inpFields = [itemID, itemName, itemQuantity, itemPrice, itemCategory];
        const idExists = items.some(existingItem  => existingItem.itemID === itemID)

        if (inpFields.some(inpFields => !inpFields)) {  //checks for empty fields
            setMessage("Please fill out all the fields.");
        }
        else if (idExists) {    //checks for duplicate ids
            setMessage("This item ID already exists.");
        } 
        else {
            addItem({
                itemID, 
                itemName, 
                itemQuantity: parseInt(itemQuantity), 
                itemPrice: parseFloat(itemPrice), 
                itemCategory
            });

            setMessage("Item succesfully added.")
            
            //sets all fields back to empty
            setItemID("");
            setItemName("");
            setItemQuantity("");
            setItemPrice("");
            setItemCategory("");
        }  
    };

    return (
      <div>
        <h1>Add Item</h1>
        <form className="container text-center align-items-center" onSubmit={handleAddItem}> 
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
                <input 
                    type="text" 
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder = "Item Name"
                    required
                />
            </div>
            <div className="row">
                <input 
                    type="number"
                    value={itemQuantity}
                    onChange={(e) => setItemQuantity(e.target.value)}
                    placeholder="Item Quantity"
                    onInput={handleNumber}
                    required
                />
            </div>
            <div className="row">
                <input 
                    type="number"
                    value={itemPrice}
                    onChange={(e) => setItemPrice(e.target.value)}
                    placeholder="Item Price"
                    onInput={handleNumber}
                    required
                />
            </div>
            <div className="row">
                <select
                    value={itemCategory}
                    onChange={(e) => setItemCategory(e.target.value)}
                >
                    <option value="" disabled selected hidden>Select Category</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </div>
            <div className="row pt-3">
                <button type="submit">Add</button>
            </div>
        </form>

        <p>{message}</p>

      </div>
    );
  }

  export default AddItem;