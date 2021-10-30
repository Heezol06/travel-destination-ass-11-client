import React from 'react';

const Service = ({plan}) => {
    const {name , packages, price, descriptions, img} = plan
    return (
        <div className="col-lg-4 col-sm-6 my-5">
            <div class="card" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6>Price:{price}</h6>
                <p class="card-text">
                    {descriptions.slice(0,200)}
                </p>
                <h6 className="text-warning" style={{backgroundColor:"#1F1D36", padding:"4px", borderRadius:"10px"}}>Package: <span className="text-danger">{packages}</span></h6>
                <button className="btn p-2 text-light" style={{backgroundColor:"#161E54"}}>Book Now</button>
            </div>
</div>
        </div>
    );
};

export default Service;