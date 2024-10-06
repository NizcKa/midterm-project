import React, { useContext } from 'react';

function UpdateItem() {
    return (
      <div>
        <form className="container text-center align-items-center"> 
            <div className="row">
                <label className="form-label" htmlFor="productID">Product ID:</label>
                <input type="text" id="productID"/>
            </div>
            <div className="row">
                <label className="form-label" htmlFor="productCategory">Update Value:</label>
                <select id="productCategory">
                    <option value="" disabled selected hidden>Select Value</option>
                    <option value="Quantity">Quantity</option>
                    <option value="Price">Price</option>
                </select>
            </div>
            <div className="row">
                <label className="form-label" htmlFor="productQuantity">New Value:</label>
                <input type="number" id="productQuantity"/>
            </div>
            <div className="row pt-3">
                <button>Update</button>
            </div>
        </form>
      </div>
    );
  }

  export default UpdateItem;