import React, { useEffect, useState } from 'react';
import useAuth from '../Hook/useAuth';
import './MyBooking.css'

const MyBooking = () => {
    const {user} = useAuth()
    const [users , setUser] = useState([])
    const [deleteCount, setDeleteCount] = useState(false)
    useEffect(()=>{
        fetch(`https://quiet-ocean-52813.herokuapp.com/users`)
        .then(res => res.json())
        .then(result => setUser(result))
    },[deleteCount])

    const handleDelete = (id) =>{
        fetch(`https://quiet-ocean-52813.herokuapp.com/deleteUser/${id}`,{
            method: "DELETE",
            headers: {'content-type': 'application/json'},
        })
        .then(res => res.json())
        .then(result => setDeleteCount(result))
        window.confirm("Are you sure you want to delete this Order!")
        // location.reload();
    }
    const matchedUser=users.filter(u=>u.email=== user.email)
console.log(matchedUser)
    return (
        <div className="col-sm-12">
            <h2 style={{color:"#59b6ed"}} className="text-decoration-underline">Booking List</h2>
            <img src="https://i.ibb.co/p0Mzw2W/undraw-Booked-re-vtod.png" className="img-sizing" alt="" />
            <div className="table-sizing">
            <table className="table col-sm-12 table-sizing">
            <thead>
                <tr>
                <th scope="col">Person Quantity</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Buttons</th>
                </tr>
            </thead>
            <tbody>
                {
                    matchedUser.map(pd => (
                <tr key={pd._id}>
                    <th  scope="row">{pd.Quantity}</th>
                    <td>{pd.name}</td>
                    <td>{pd.email}</td>
                    <td>{pd.address}</td>
                    <td><button className="btn-danger me-2 rounded" onClick={()=>handleDelete(pd._id)}>Delete</button> 
                    </td>
                    <td></td>
                </tr>
                    ))
                }
                
            </tbody>
            </table>
            </div>
                
            </div>
    );
};

export default MyBooking;