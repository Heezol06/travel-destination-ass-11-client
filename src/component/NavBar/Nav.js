import React from 'react';
import {  Link, NavLink } from 'react-router-dom';
import useAuth from '../Hook/useAuth';

const Nav = () => {
  const {user , logOut } = useAuth();
  
  const handleLogOut = () =>{
    logOut()
}
// console.log(user);
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
              color: "#59B6F1"
            }}
            className="text-decoration-none ms-5"
            style={{color:"gray"}}
          >
            Home
        </NavLink>
        </li>
        <li className="nav-item">
        {user?.email ?
          <NavLink
            to="/myBooking"
            activeStyle={{
              fontWeight: "bold",
              color: "#59B6F1"
            }}
            className="text-decoration-none ms-5"
            style={{color:"gray"}}
          >
            My Booking
        </NavLink>
        : ""
        }
        </li>
        <li className="nav-item">
        <NavLink
            to="/update"
            activeStyle={{
              fontWeight: "bold",
              color: "#59B6F1"
            }}
            className="text-decoration-none ms-5"
            style={{color:"gray"}}
          >
            Edit All Orders
        </NavLink>
        </li>
        <li className="nav-item">
        <NavLink
            to="/newPlan"
            activeStyle={{
              fontWeight: "bold",
              color: "#59B6F1"
            }}
            className="text-decoration-none ms-5"
            style={{color:"gray"}}
          >
            Add Plans
        </NavLink>
        </li>
      </ul>
        <div>
       {
         user.email ?
         <div>
           <button className="btn btn-outline-danger" onClick={handleLogOut} type="submit">LogOut</button>
           <img src={user.photoURL} className="rounded-circle w-25 ms-4" alt="" srcSet="" />
         </div> 
         
        :
        <Link to="/login">
        <button className="btn btn-outline-success" type="submit">Login</button>
        </Link> 
        }
        </div>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Nav;