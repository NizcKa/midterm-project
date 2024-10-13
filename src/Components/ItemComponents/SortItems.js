import React, { useState, useEffect } from 'react';

const SortItems = ({items}) => {    //JOB'S  DONE
    const [sortType, setSortType] = useState(""); 
    const [sortField, setSortField] = useState(""); 

    const [sortedItems, setSortedItems] = useState([]); // Stores search result

    //Triggers when changes are made to items array, sortField, or sortType
    useEffect(() => {
        const sortedArray = [...items]; // Create a copy of the items list to sort

        // Sorts array 
        sortedArray.sort((a, b) => {
            if (sortField === "Quantity") { // by quantity
                if (sortType === "Ascending") {
                    return a.itemQuantity - b.itemQuantity;
                } else if (sortType === "Descending") {
                    return b.itemQuantity - a.itemQuantity;
                }
            }
            if (sortField === "Price") { // by price
                if (sortType === "Ascending") {
                    return a.itemPrice - b.itemPrice;
                } else if (sortType === "Descending") {
                    return b.itemPrice - a.itemPrice;
                }
            }
            return 0; // Default case if no sorting criteria are met
        });

        setSortedItems(sortedArray); // Stores the sorted list into an array to display
    }, [items, sortField, sortType]);


    return (
        <div>
            <h1>Sort Items</h1>

            <select
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
            > 
                <option value="" disabled selected hidden>Select sorting type</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
            </select>

            <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
            > 
                <option value="" disabled selected hidden>Select value to sort by</option>
                <option value="Quantity">Quantity</option>
                <option value="Price">Price</option>
            </select>

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
                    {sortedItems.length > 0 ? (  //check if there is a stored sorted list
                        sortedItems.map(item => (  //Displays sorted list
                            <tr key={item.itemID}>
                                <td>{item.itemID}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemQuantity}</td>
                                <td>${item.itemPrice.toFixed(2)}</td>
                                <td>{item.itemCategory}</td>
                            </tr>
                        ))
                    ) : (
                        items.map(item => (  //Displays unsorted list
                            <tr key={item.itemID}>
                                <td>{item.itemID}</td>
                                <td>{item.itemName}</td>
                                <td>{item.itemQuantity}</td>
                                <td>${item.itemPrice.toFixed(2)}</td>
                                <td>{item.itemCategory}</td>
                            </tr>
                        ))
                    )}
                    </tbody>
                </table>
            ) : (
                <p>Inventory is empty.</p>
            )}
        </div>
    );
}

export default SortItems;
