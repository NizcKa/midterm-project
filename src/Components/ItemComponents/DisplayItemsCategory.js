import React, { useState } from 'react';

const DisplayItemsCategory = ({ items }) => { // DONE

    const [filterCategory, setFilterCategory] = useState("");

    // Filters items based on the filter category selected
    const categoryFilter = items.filter(item => item.itemCategory.includes(filterCategory));

    return (
        <div className="container">

            <h1 className="text-center mb-4">All Inventory Items (by Category)</h1>

            <select
            	className="form-select rounded-0"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
            > 
                <option value="">None</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Entertainment">Entertainment</option>
            </select>

            {items.length > 0 ? ( 
                <table className="table table-striped table-bordered text-center table-hover">
                    <thead className="table-light">
                        <tr>
                            <th>Item ID</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categoryFilter.length > 0 ? ( // Checks if category is empty and displays appropriate message
                            categoryFilter.map(filteredItem => (
                                <tr key={filteredItem.itemID}>
                                    <td>{filteredItem.itemID}</td>
                                    <td>{filteredItem.itemName}</td>
                                    <td>{filteredItem.itemQuantity}</td>
                                    <td>${filteredItem.itemPrice.toFixed(2)}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4">Category is empty.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            ) : (
                <p className="text-center">Inventory is empty.</p>
            )}
        </div>
    );
    
};

export default DisplayItemsCategory;