import React from 'react';
import './HouseDisplay.css';
import house0 from '../Resources/house0.jpg';
import { BsArrowRight } from 'react-icons/bs';

const HouseDisplay = (props) => {
  return(
  <div className="houseDisplay__container">
    <div className="houseImageContainer">
      <img src={house0} />
    </div>
    <div className="houseAddress__price">
      <p> 16 Quarry Rd, San Rafael, Marin $1,735,000</p>
    </div>
    <div className="viewListingContainer">
      <p>VIEW LISTING</p>
      <BsArrowRight style={{color:"white"}} />
    </div>


  </div>
  )
}

export default HouseDisplay;