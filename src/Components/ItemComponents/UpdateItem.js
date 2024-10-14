import React, { useState } from 'react';

function UpdateItem({ updateItem, items }) {
	const [itemID, setItemID] = useState("");
	const [updateField, setUpdateField] = useState("");
	const [updateValue, setUpdateValue] = useState("");
	const [message, setMessage] = useState("");

	const handleNumber = (e) => {
		setMessage("");	
		const value = e.target.value;
		e.target.value = value.replace(/[^\d]/g, "");
		if (value === "") {
			setMessage("Please input appropriate values.");
		}
	}

	const handleUpdateItem = (e) => {
		e.preventDefault();

		const inpFields = [itemID, updateField, updateValue];
		const itemToUpdate = items.find(existingItem => existingItem.itemID === itemID.trim());

		if (inpFields.some(field => !field)) {
			setMessage("Please fill out all the fields.");
		}
		else if (!itemToUpdate) {
			setMessage("This item does not exist.");
		} 
		else {
			const prevValue = itemToUpdate[`item${updateField}`];

			updateItem(
				itemID.trim(), 
				updateField, 
				updateValue.trim()
			);

			setItemID("");
			setUpdateField("");
			setUpdateValue("");
			setMessage(`${updateField} of item ${itemToUpdate.itemName} updated from ${parseFloat(prevValue)} to ${parseFloat(updateValue)}`);
		}
	}   

	return (
		<div className="container">

			<h1 className="text-center mb-4">Update Item</h1>

			<form className="text-center" onSubmit={handleUpdateItem}> 
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
					<select
						className="form-select rounded-0"
						value={updateField}
						onChange={(e) => setUpdateField(e.target.value)}
					>
						<option value="" disabled selected hidden>Select field to update</option>
						<option value="Quantity">Quantity</option>
						<option value="Price">Price</option>
					</select>
				</div>
				<div className="mb-3">
					<input 
						type="number"
						className="form-control rounded-0"
						value={updateValue}
						onChange={(e) => setUpdateValue(e.target.value)}
						placeholder="New value"
						onInput={handleNumber}
						required
					/>
				</div>
				<div className="mb-3">
					<button className="btn btn-primary rounded-0">Update</button>
				</div>
			</form>

			<h4 className="text-center">{message}</h4>
		</div>
	);
	
}

export default UpdateItem;

