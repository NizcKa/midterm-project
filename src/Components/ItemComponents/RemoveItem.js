import React, { useState } from 'react';


const RemoveItem = ({removeItem, items}) => {   //works. Yi sang.
    const [itemID, setItemID] = useState("");
    const [message, setMessage] = useState("");

    const handleRemoveItem = (e) => {
        e.preventDefault();

        const itemToRemove = items.find(existingItem => existingItem.itemID === itemID);    //searches for id to update

        if (!itemID) {  // Checks for empty fields
            setMessage("Please fill out all the fields.");
        }
        else if (!itemToRemove) {
            setMessage("This item does not exist.");
        }
        else {
            removeItem(itemID); //Passes input item ID to App.js

            setItemID("");
            setMessage("Item successfully removed.");
        }
    }

    return (
        <div>
        <h1>Remove Item</h1>
        <form className="container text-center align-items-center" onSubmit={handleRemoveItem}> 
            <div className="row">
                <input 
                    type="text"
                    value={itemID}
                    onChange={(e) => setItemID(e.target.value)}
                    placeholder="Item ID"
                    required
                />
            </div>
            <div className="row pt-3">
                <button type="submit">Add</button>
            </div>
        </form>

        <p>{message}</p>

        </div>
    );
}

export default RemoveItem;