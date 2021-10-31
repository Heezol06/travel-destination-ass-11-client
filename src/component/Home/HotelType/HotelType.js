import React from 'react';

const HotelType = () => {
    return (
        <div style={{backgroundColor:"#EDEDED", padding:"50px"}}>
            <h2>Find A Home Type</h2>
            <p className="fw-light">It is a long established fact that a reader</p>
            <div className="d-flex container align-items-center justify-content-center" >
                <div  className="col-lg-2" style={{backgroundColor:"white", padding:"20px", margin:"10px", borderRadius:"15px"}}>
                <i className="fa-3x far fa-building"></i>
                <h6>Apartment</h6>
                </div>
                <div className="col-lg-2" style={{backgroundColor:"white", padding:"20px", margin:"10px", borderRadius:"15px"}}>
                <i className="fa-3x fas fa-laptop-house"></i>
                <h6>Duplex House</h6>
                </div>
                <div className="col-lg-2" style={{backgroundColor:"white", padding:"20px", margin:"10px", borderRadius:"15px"}}>
                <i className="fa-3x fas fa-home"></i>
                <h6>House</h6>
                </div>
                <div className="col-lg-2" style={{backgroundColor:"white", padding:"20px", margin:"10px", borderRadius:"15px"}}>
                <i className="fa-3x fab fa-free-code-camp"></i>
                <h6>Fire Camp</h6>
                </div>
                <div className="col-lg-2" style={{backgroundColor:"white", padding:"20px", margin:"10px", borderRadius:"15px"}}>
                <i className="fa-3x fas fa-utensils"></i>
                <h6>House With Food</h6>
                </div>
            </div>
        </div>
    );
};

export default HotelType;