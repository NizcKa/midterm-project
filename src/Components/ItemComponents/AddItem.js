import React, { useState } from 'react';

function AddItem() {

    //input values
    const [itemID, setItemID] = useState("");
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemCategory, setItemCategory] = useState("");
    
    //prevents the submission of non-valid values in number fields
    const handleNumber = (e) => { 
        const value = e.target.value;
        e.target.value = value.replace(/[^1-9]\d*|\D/g, '');
    }

    return (
      <div>
        <form className="container text-center align-items-center"> 

            <div className="row">
                <input 
                    type="text"
                    value={itemID}
                    onChange={(e) => setItemID(e.target.value)}
                    placeholder="Item ID"
                    onInput={handleNumber}
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

        {/*Testing for values. Will remove later. */}
        <p>{itemID}</p>
        <p>{itemName}</p>
        <p>{itemQuantity}</p>
        <p>{itemPrice}</p>
        <p>{itemCategory}</p>

      </div>
    );
  }

  export default AddItem;