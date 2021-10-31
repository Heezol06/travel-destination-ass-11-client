import React, { useEffect, useState } from 'react';
import './EditOrder.css'
import { useParams } from 'react-router';


const EditOrders = () => {
    const {id} = useParams()
    const [users , setUser] = useState([])
    const [singleUsers , setSingleUser] = useState([])
    const [approved , setApproved] = useState('')

    const handleApprovedUser = e =>{
        setApproved(e.target.value)
    }

    useEffect(()=>{
        fetch("https://quiet-ocean-52813.herokuapp.com/users")
        .then(res => res.json())
        .then(result => setUser(result))
    },[])
    // console.log(users);

    const updateOrderStatus = (id) =>{
        const url = `https://quiet-ocean-52813.herokuapp.com/users/${id}`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => setSingleUser(data))

        const updatedSingleUser = {
            name: singleUsers.name,
            email: singleUsers.email,
            address: singleUsers.address,
            status : approved
        }

    }
    console.log(singleUsers);
    return (
        <div>
            <h1 style={{color:"#59B6F1"}} className="text-decoration-underline">Edit Or Mentation All Order</h1>
            <img src="https://image.freepik.com/free-vector/angry-boss-with-megaphone-shouting-employees_74855-5720.jpg" className="img-sizing" alt="" />
           <div className="row d-flex order-sizing">
           {
                users.map(user => <div className="col-lg-4 col-sm-10 p-3" style={{border:" 1px solid gray"}}>
                    <h3>Name: {user.name}</h3>
                    <h4>Your Address: {user.address}</h4>
                    <p>Your Email: {user.email}</p>
                    <p>Your Email: {user.status}</p>
                    <div className="">
                    <label for="dog-names" onChange={updateOrderStatus}>Update your order:</label>
                        <select name="dog-names" id="dog-names">
                        <option value="reeses" className="bg-danger">Deny</option>
                        <option value="pumpernickel" className="bg-success" onclick={handleApprovedUser}>Approved</option>
                        </select>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default EditOrders;