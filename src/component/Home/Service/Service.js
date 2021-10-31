import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({plan}) => {
    const {name , packages, price, descriptions, img, _id} = plan
    console.log(plan);
    return (
        <div className="col-lg-4 col-sm-6 my-5">
            <div class="card" style={{width: "18rem"}}>
            <img src={img} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6>Price:{price}</h6>
                <p class="card-text">
                    {descriptions}
                </p>
                <h6 className="text-warning" style={{backgroundColor:"#1F1D36", padding:"4px", borderRadius:"10px"}}>Package: <span className="text-danger">{packages}</span></h6>
                <div>
                    <Link to={`/PlanDetails/${_id}`}>
                <button className="btn p-2 text-light" style={{backgroundColor:"#161E54"}}>Book Now</button>
                    </Link>
                </div>
                </div>
            </div>
</div>
    );
};

export default Service;