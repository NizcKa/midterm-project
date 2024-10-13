import React from 'react';

const DisplayItemsLowStock = ({items}) => {

  // Filter items with a quantity of 5 or less
  const lowStockItems = items.filter(item => item.itemQuantity <= 5);

  return (
    <div>
      <h1>Low Stock Items</h1>

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
            {lowStockItems.length > 0 ? (
              lowStockItems.map(item => ( //Displays all low stock items, if there are none displays a message.
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
                <td colSpan="5">There are no low stock items.</td>
              </tr>
            )}
          </tbody>
        </table>
      ) : (
        <p>Inventory is empty.</p>
      )}
    </div>
  );
};

export default DisplayItemsLowStock;
