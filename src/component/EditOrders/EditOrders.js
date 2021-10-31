import React, { useEffect, useState } from 'react';

const EditOrders = () => {
    const [users , setUser] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/users")
        .then(res => res.json())
        .then(result => setUser(result))
    },[])
    console.log(users);
    return (
        <div>
            <h1 style={{color:"#59B6F1"}} className="text-decoration-underline">Edit Or Mentation All Order</h1>
            <img src="https://image.freepik.com/free-vector/angry-boss-with-megaphone-shouting-employees_74855-5720.jpg" alt="" />
           <div className="row d-flex">
           {
                users.map(user => <div className="col-lg-4 col-sm-6 p-3" style={{border:" 1px solid gray"}}>
                    <h3>Name: {user.name}</h3>
                    <h4>Your Address: {user.address}</h4>
                    <p>Your Email: {user.email}</p>
                    <div className="">
                    <label for="dog-names">Update your order:</label>
                        <select name="dog-names" id="dog-names">
                        <option value="pumpernickel" className="bg-success">Approved</option>
                        <option value="reeses" className="bg-danger">Deny</option>
                        </select>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default EditOrders;