import React from 'react';
import Banner from '../Home/Banner/Banner';
import Discount from '../Home/Discount/Discount';
import HotelType from '../Home/HotelType/HotelType';
import Services from '../Home/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
      <Services></Services>
      <HotelType></HotelType>
      <Discount></Discount>
        </div>
    );
};

export default Home;