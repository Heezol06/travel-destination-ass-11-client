import { useParams } from 'react-router';
import React, { useEffect, useRef, useState } from 'react';
import useAuth from '../Hook/useAuth';


const PlanDetails = () => {
    const {user} = useAuth() || {};
    const {planId} = useParams();
    const [planDetails, setPlanDetails] = useState([]);
    // console.log(planId);

    const nameRef = useRef();
  const emailRef = useRef()
    const [address, setAddress] = useState("")
    const [Quantity, setQuantity] = useState("")
    const [selectPlan, setSelectPlan] = useState("")
    // const [emptyInput, setEmptyInput] = useState(false)


    useEffect(()=>{
        fetch(`http://localhost:5000/services/${planId}`)
        .then(res => res.json())
        .then(data => setPlanDetails(data))
    },[])
    console.log(planDetails);
console.log(planDetails);
    
    
    const handleAddress = (e) =>{
        setAddress(e.target.value)
    }
    const handleQuantity = (e) =>{
        setQuantity(e.target.value)
    }
    const handleSelectPlan = (e) =>{
        
        setSelectPlan(e.target.value)
    }
    const handleAddBooking = () =>{
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const info ={name:name , email:email, address, Quantity, selectPlan};

        fetch("http://localhost:5000/addUser" , {
            method: 'POST',
            headers: {'content-type': 'application/json' },
            body: JSON.stringify(info),
        })
        .then(res => res.json())
        .then(result => console.log(result))
            window.confirm('Are you sure you want to order')
            window.location.reload()
    }
    

    
    //  console.log(planDetails);
    return (
        <div>
        <div class="container w-75 my-5 card mb-3" style={{backgroundColor:""}}>
            <img src={planDetails?.img} class="card-img-top mt-3" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{planDetails?.name}</h5>
                <h5>Price:{planDetails?.price}</h5>
                <p class="card-text">{planDetails?.descriptions}</p>
                <p class="card-text"><small class="text-muted">Schedule: {planDetails?.packages}</small></p>
            </div>
            </div>

            <div className="my-5">
                <h2>Submit Your Info And Book Now</h2>
                <div>
                    <input type="text" ref={nameRef} value={user.displayName} placeholder="Name" className="px-2 py-2 mt-4"/>
                    <br />
                    <input type="text" ref={emailRef} value={user.email} placeholder="Email" className="px-2 py-2 mt-4"/>
                    <br />
                    <input type="text" onChange={handleAddress} placeholder="Address" className="px-2 py-2 mt-4"/>
                    <br />
                    <input type="text" onChange={handleQuantity} placeholder="Person" className="px-2 py-2 mt-4"/>
                    <br />
                    <input type="text" onChange={handleSelectPlan} placeholder="" value={planDetails?.name} className="px-2 py-2 mt-4"/>
                    <br />
                    <br />
                    <button onClick={handleAddBooking} className="btn btn-outline-success">Add To Booking</button>
                    <br />
                </div>
            </div>

    </div>
    );
};

export default PlanDetails;