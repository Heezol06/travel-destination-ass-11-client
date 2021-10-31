import React, { useRef } from 'react';

const AddPlans = () => {
    const nameRef = useRef();
  const discriptionRef = useRef()
  const urlRef = useRef()

    const handleAddPlans = (e) =>{
        const name = nameRef.current.value;
        const descriptions = discriptionRef.current.value;
        const img = urlRef.current.value;
        const newPlan = {name: name, descriptions: descriptions, img: img}
         //send data to the server
  fetch(`http://srcSet:5000/newPlan`, {
    method: 'post', 
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(newPlan)
  })
  .then(res => res.json())
  .then(data =>console.log(data))
    window.confirm('Are you sure you want to Add a new plan')
    window.location.reload()
    }      
    return (
        <div className="d-flex">
            <div className="col-lg-6 text-start ">
                <h1 style={{color:"#59B6F1"}} className="text-decoration-underline ms-3">Add A New Plans</h1>
            <div className="input-group mb-3 d-flex flex-column ms-3">
                <input type="text"  ref={nameRef} className="form-control w-50" placeholder="Destination Name" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <br />
                <input type="text" ref={discriptionRef} className="form-control w-50" placeholder="Destination Descriptions" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <br />
                <input type="text" ref={urlRef} className="form-control w-50" placeholder="Destination Photo Url" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <br />
                <button className="btn-info w-25 rounded ms-5" onClick={handleAddPlans}> <i className="fas fa-plus me-2"></i>Add Plan</button>
            </div></div>
            <div className="col-lg-6">
                <img src="https://i.ibb.co/jRpcTpg/undraw-travel-plans-li01.png" className="" style={{width:"99%"}} alt="" />
            </div>
        </div>
    );
};

export default AddPlans;