import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyBooking = () => {
    const [user , setUser] = useState([])
    const [deleteCount, setDeleteCount] = useState(false)
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(result => setUser(result))
    },[deleteCount])

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/deleteUser/${id}`,{
            method: "DELETE",
            headers: {'content-type': 'application/json'},
        })
        .then(res => res.json())
        .then(result => setDeleteCount(result))
        window.confirm("Are you sure you want to delete this Order!")
        // location.reload();
    }
    return (
        <div>
            <h2>your orders</h2>
            <table class="table">
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
                    user.map(pd => (
                <tr>
                    <th scope="row">{pd.Quantity}</th>
                    <td>{pd.name}</td>
                    <td>{pd.email}</td>
                    <td>{pd.address}</td>
                    <td><button className="btn-danger me-2 rounded" onClick={()=>handleDelete(pd._id)}>Delete</button> 
                    <Link to={`/update/${pd._id}`}><button className="btn-success rounded">Update</button></Link></td>
                    <td></td>
                </tr>
                    ))
                }
                
            </tbody>
            </table>
                
            </div>
    );
};

export default MyBooking;