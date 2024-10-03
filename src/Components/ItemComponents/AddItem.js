import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function AddItems() {

    return (
      <div>
        <form className="container text-center align-items-center"> 
            <div className="row">
                <label className="form-label" htmlFor="productID">Product ID:</label>
                <input type="text" id="productID"/>
            </div>
            <div className="row">
                <label className="form-label" htmlFor="productName">Product Name:</label>
                <input type="text" id="productName"/>
            </div>
            <div className="row">
                <label className="form-label" htmlFor="productQuantity">Product Quantity:</label>
                <input type="number" id="productQuantity"/>
            </div>
            <div className="row">
                <label className="form-label" htmlFor="productPrice">Product Price:</label>
                <input type="number" id="productPrice"/>
            </div>
            <div className="row">
                <label className="form-label" htmlFor="productCategory">Product Category:</label>
                <select id="productCategory">
                    <option value="" disabled selected hidden>Select Category</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Entertainment">Entertainment</option>
                </select>
            </div>
        </form>
      </div>
    );
  }

  export default AddItems;