import React from 'react';

const DisplayItemsAll = ({items}) => { //WORKS, NEEDS CLEANING UP
  return (
    <div>
      <h1>All Inventory Items</h1>
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
              {items.map((item) => (
                <tr key={item.itemID}>
                  <td>{item.itemID}</td>
                  <td>{item.itemName}</td>
                  <td>{item.itemQuantity}</td>
                  <td>${item.itemPrice.toFixed(2)}</td>
                  <td>{item.itemCategory}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ): (
          <p>Inventory is empty.</p>
        )}
    </div>
  );
};

export default DisplayItemsAll;