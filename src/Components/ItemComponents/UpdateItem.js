import React, { useContext } from 'react';

function UpdateItem({items}) {



    return (
      <div>
        <form className="container text-center align-items-center"> 
            <div className="row">
                <input type="text"/>
            </div>
            <div className="row">
                <select id="productCategory">
                    <option value="" disabled selected hidden>Select Value</option>
                    <option value="Quantity">Quantity</option>
                    <option value="Price">Price</option>
                </select>
            </div>
            <div className="row">
                <input type="number"/>
            </div>
            <div className="row pt-3">
                <button>Update</button>
            </div>
        </form>

      </div>
    );
  }

  export default UpdateItem;