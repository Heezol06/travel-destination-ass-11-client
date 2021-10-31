import React, { useRef } from 'react';

const AddPlans = () => {
    const nameRef = useRef();
  const discriptionRef = useRef()
  const urlRef = useRef()

    const handleAddPlans = (e) =>{
        const name = nameRef.current.value;
        const description = discriptionRef.current.value;
        const url = urlRef.current.value;
        const newPlan = {name: name, description: description, url: url}
         //send data to the server
  fetch('http://localhost:5000/newPlan', {
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
        <div>
            <h1>Add A New Plans</h1>
            <div class="input-group mb-3 ms-5 d-flex flex-column">
                <input type="text"  ref={nameRef} class="form-control w-50" placeholder="Destination Name" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <br />
                <input type="text" ref={discriptionRef} class="form-control w-50" placeholder="Destination Descriptions" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <br />
                <input type="text" ref={urlRef} class="form-control w-50" placeholder="Destination Photo Url" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                <br />
                <button className="btn-info w-25 rounded" onClick={handleAddPlans}>Add Plan</button>
            </div>
        </div>
    );
};

export default AddPlans;