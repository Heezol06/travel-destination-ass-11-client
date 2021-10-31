import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [plans , setPlans] = useState([])
    useEffect(()=>{
        fetch('https://quiet-ocean-52813.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setPlans(data))
    },[])
    return (
           <div className="container">
        <div className="row">
            <h1 className="text-start mt-5" style={{borderBottom:"1.5px solid black"}}>Plans For You</h1>
           {
                    plans.map(plan => <Service
                plan={plan}
                key={plan.name}
                ></Service>)
            }
           </div>
        </div>
    );
};

export default Services;