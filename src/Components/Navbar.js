import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary position-absolute w-100">
      <div className="container-fluid d-flex align-items-center"> 
        <a className="navbar-brand" href="#">IMS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="#Profile">Add Item</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Portfolio">Update Item</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Remove Item</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Display Items by Category</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Display All Items</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Search Item</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Sort Items</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#Contact">Display Low Stock</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar