import React, { useState } from 'react';

const SearchItem = ({items}) => {   //works (yippee)
    const [itemID, setItemID] = useState("");
    const [searchedItem, setSearchedItem] = useState([]); // Stores search result

    const handleSearch = (e) => {
        e.preventDefault();

        // Filters items based on ID input and searches for exact match
        const searchFilter = items.filter(item => item.itemID === itemID.trim()); 
        setSearchedItem(searchFilter);  
    }

    return (
        <div>
            <h1>Search Item</h1>
            <form className="container text-center align-items-center" onSubmit={handleSearch}> 
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
                    <button type="submit">Search</button>
                </div>
            </form>

            {items.length > 0 ? ( 
                <table className="container text-center align-items-center">
                    <thead>
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                    {searchedItem.length > 0 ? (  
                        searchedItem.map(item => (  //Displays search result 
                            <tr key={item.itemID}>
                                <td>{item.itemID}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemQuantity}</td>
                                <td>${item.itemPrice.toFixed(2)}</td>
                                <td>{item.itemCategory}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5">{"Item not found!"}</td>   
                        </tr>
                    )}
                    </tbody>
                </table>
            ) : (
                <p>Inventory is empty.</p>
            )}
        </div>
    );
}

export default SearchItem;
