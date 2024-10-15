import React, { useState } from 'react';

const AddItem = ({ addItem, items }) => { //DONE. 

	//input item values
	const [itemID, setItemID] = useState("");
	const [itemName, setItemName] = useState("");
	const [itemQuantity, setItemQuantity] = useState("");
	const [itemPrice, setItemPrice] = useState("");
	const [itemCategory, setItemCategory] = useState("");
	
	const [message, setMessage] = useState("");     //message field
	
	//prevents the submission of non-valid values in number fields
	const handleNumber = (e) => { 
		setMessage("");
		const value = e.target.value;
		e.target.value = value.replace(/[^\d]/g, "");   //if there are any none digits replaces them with blank space
		if (value === "") {	//Detect if the input's been reset and by the validation and display the message. 
			setMessage("Please input numbers only.");
		} 
	}

	//handles item input
	const handleAddItem = (e) => {
		e.preventDefault();

		const inpFields = [itemID, itemName, itemQuantity, itemPrice, itemCategory];
		const idExists = items.some(existingItem => existingItem.itemID === itemID.trim())

		if (inpFields.some(inpFields => !inpFields)) {  //checks for empty fields
			setMessage("Please fill out all the fields.");
		}
		else if (idExists) {    //checks for duplicate ids
			setMessage("This item ID already exists.");
		} 
		else {
			addItem({
				itemID: itemID.trim(), 
				itemName: itemName.trim(), 
				itemQuantity: parseInt(itemQuantity.trim()), 
				itemPrice: parseFloat(itemPrice.trim()), 
				itemCategory: itemCategory.trim()
			});

			setMessage("Item successfully added.")
			
			//sets all fields back to empty
			setItemID("");
			setItemName("");
			setItemQuantity("");
			setItemPrice("");
			setItemCategory("");
		}  
	};

	return (
		<section className="text-center bg-img alternate pt-3 d-flex vh-100">
			<div className="container">
				
				<h1 className="text-center mb-4">Add Item</h1>
				
				<form className="text-center" onSubmit={handleAddItem}> 
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
						<input 
							type="text" 
							className="form-control rounded-0"
							value={itemName}
							onChange={(e) => setItemName(e.target.value)}
							placeholder="Item Name"
							required
						/>
					</div>
					<div className="mb-3">
						<input 
							type="number"
							className="form-control rounded-0"
							value={itemQuantity}
							onChange={(e) => setItemQuantity(e.target.value)}
							placeholder="Item Quantity"
							onInput={handleNumber}
							required
						/>
					</div>
					<div className="mb-3">
						<input 
							type="number"
							className="form-control rounded-0"
							value={itemPrice}
							onChange={(e) => setItemPrice(e.target.value)}
							placeholder="Item Price"
							onInput={handleNumber}
							required
						/>
					</div>
					<div className="mb-3">
						<select
							className="form-select rounded-0" 
							value={itemCategory}
							onChange={(e) => setItemCategory(e.target.value)}
						>
							<option value="" disabled hidden>Select Category</option>
							<option value="Clothing">Clothing</option>
							<option value="Electronics">Electronics</option>
							<option value="Entertainment">Entertainment</option>
						</select>
					</div>
					<div className="mb-3">
						<button type="submit" className="btn btn-primary rounded-0">Add</button>
					</div>
				</form>

				<h4 className="mt-3 text-center">{message}</h4> {/* Show messages in red color */}
			</div>
		</section>
	);

}

export default AddItem;
