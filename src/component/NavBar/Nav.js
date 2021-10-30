import React from 'react';
import {  Link, NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <img src="https://i.ibb.co/4NXxc60/4209083-removebg-preview-removebg-preview.png" alt="" style={{width:"200px", height:"50px"}}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink
            to="/home"
            activeStyle={{
              fontWeight: "bold",
              color: "#198754"
            }}
            className="text-decoration-none ms-5"
            style={{color:"gray"}}
          >
            Home
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/myOrders"
            activeStyle={{
              fontWeight: "bold",
              color: "#198754"
            }}
            className="text-decoration-none ms-5"
            style={{color:"gray"}}
          >
            My Orders
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/faq"
            activeStyle={{
              fontWeight: "bold",
              color: "#198754"
            }}
            className="text-decoration-none ms-5"
            style={{color:"gray"}}
          >
            Edit Orders
        </NavLink>
        </li>
      </ul>
        <div>
        <Link to="/login">
        <button className="btn btn-outline-success" type="submit">Login</button>
        </Link>
        </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nav;