import React, { useState } from 'react';

const DisplayItemsCategory = ({items}) => { //WORKS, NEEDS CLEANING UP

  const [filterCategory, setFilterCategory] = useState("");

  //filters items based on the filter category selected
  const categoryFilter = items.filter(item => item.itemCategory.includes(filterCategory));

  return (
    <div>
      <h1>All Inventory Items</h1>

      <select
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      > 
        <option value="">None</option>
        <option value="Clothing">Clothing</option>
        <option value="Electronics">Electronics</option>
        <option value="Entertainment">Entertainment</option>
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
            {categoryFilter.length > 0 ? (  //checks if category is empty and display appropriate message
              categoryFilter.map(filteredItem => (
                <tr key={filteredItem.itemID}>
                  <td>{filteredItem.itemID}</td>
                  <td>{filteredItem.itemName}</td>
                  <td>{filteredItem.itemQuantity}</td>
                  <td>${filteredItem.itemPrice.toFixed(2)}</td>
                  <td>{filteredItem.itemCategory}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Category is empty.</td>
              </tr>
            )}
          </tbody>
          </table>
        ): (
          <p>Inventory is empty.</p>
        )}
    </div>
  );
};

export default DisplayItemsCategory;