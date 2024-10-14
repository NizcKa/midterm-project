import React from 'react';

const DisplayItemsAll = ({ items }) => { // DONE

	return (
		<div className="container">
			<h1 className="text-center mb-4">All Inventory Items</h1>
			
			{items.length > 0 ? ( 
				<table className="table table-striped table-bordered text-center table-hover">
					<thead className="table-light">
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
			) : (
				<p className="text-center">Inventory is empty.</p>
			)}
		</div>
	);

};

export default DisplayItemsAll;

