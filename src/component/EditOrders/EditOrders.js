import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

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