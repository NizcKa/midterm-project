import React, { useState } from 'react';

const RemoveItem = ({ removeItem, items }) => {   //DONE
	const [itemID, setItemID] = useState("");
	const [message, setMessage] = useState("");

	const handleRemoveItem = (e) => {
		e.preventDefault();

		const itemToRemove = items.find(existingItem => existingItem.itemID === itemID.trim());    // Searches for id to remove

		if (!itemID) {  
			setMessage("Please fill out all the fields.");
		}
		else if (!itemToRemove) {   
			setMessage("This item does not exist.");
		}
		else {
			removeItem(itemID); // Passes input item ID to App.js
			
			setItemID("");
			setMessage(`Item ${itemToRemove.itemName} has been removed from the inventory`);
		}
	}

	return (
		<section className="text-center bg-img alternate pt-3 d-flex vh-100">
			<div className="container">
				
				<h1 className="text-center mb-4">Remove Item</h1>
				
				<form className="text-center" onSubmit={handleRemoveItem}> 
					<div className="mb-3">
						<input 
							type="text"
							className="form-control rounded-0"
							value={itemID}
							onChange={(e) => setItemID(e.target.value)}
							placeholder="Item ID"
							required
						/>
					</div>
					<div className="mb-3">
						<button type="submit" className="btn btn-danger rounded-0">Remove</button>
					</div>
				</form>

				<h4 className="mt-3 text-center">{message}</h4> {/* Show messages in red color */}
			</div>
		</section>
	);

}

export default RemoveItem;

