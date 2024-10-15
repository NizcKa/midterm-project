import React, { useState } from 'react';

const SearchItem = ({ items }) => { // DONE
	const [itemID, setItemID] = useState("");
	const [searchedItem, setSearchedItem] = useState([]); // Stores search result

	const [message, setMessage] = useState("");	//message

	const handleSearch = (e) => {
		e.preventDefault();

		// Filters items based on ID input and searches for exact match
		const searchFilter = items.filter(item => item.itemID === itemID.trim());
		setSearchedItem(searchFilter);  

		if (searchFilter.length > 0) {
			setMessage("Item Found!");
		}
		else {
			setMessage("Item not Found!");
		}
	}

	return (
		<section className="text-center bg-img alternate-2 pt-3 d-flex vh-100">
			<div className="container">

				<h1 className="text-center mb-4">Search Item</h1>
				
				<form className="text-center mb-3" onSubmit={handleSearch}> 
					<div className="row justify-content-center">
						<div className="col-8 col-md-6 p-0">
							<input 
								type="text"
								className="form-control rounded-0"
								value={itemID}
								onChange={(e) => setItemID(e.target.value)}
								placeholder="Item ID"
							/>
						</div>
							<div className="col-auto p-0">
							<button type="submit" className="btn btn-primary rounded-0 px-3">Search</button>
						</div>
					</div>
				</form>

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
							{searchedItem.length > 0 ? (  
								searchedItem.map(item => ( // Displays search result 
									<tr key={item.itemID}>
										<td>{item.itemID}</td>
										<td>{item.itemName}</td>
										<td>{item.itemQuantity}</td>
										<td>${item.itemPrice}</td>
										<td>{item.itemCategory}</td>
									</tr>
								))
							) : (
								<tr>
									<td colSpan="5">{message}</td>   
								</tr>
							)}
						</tbody>
					</table>
				) : (
					<p className="mt-3 text-center">Inventory is empty.</p>
				)}
			</div>
		</section>
	);
}

export default SearchItem;

