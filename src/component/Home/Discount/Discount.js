import React from 'react';

const Discount = () => {
    return (
        <div className=" d-flex m-5" style={{backgroundColor:"#FEF5ED", paddingTop:"20px", borderRadius:"15px" }}>
            <div className="col-lg-6 col-sm-12 container">
                <h3 className="text-start mb-3" style={{fontFamily:"caveat", letterSpacing: "0.48px", color: "#36bca1"}}>Multi-Tours</h3>
                <h1 className="text-start mb-5">Discount on Quantity</h1>
                <p className="text-start mb-5">Book a tour today and enjoy exclusive savings on any future trip you book! There’s no time limit or expiry date on these savings</p>
                <img src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-296-2.png" alt="" />
            </div>
            <div className="col-lg-6 col-sm-12">
                <img src="https://shinetheme.com/travelerdata/solotour/wp-content/uploads/2020/04/Group-208-1.png" alt="" />
            </div>
        </div>
    );
};

export default Discount;