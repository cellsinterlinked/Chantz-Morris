import React from 'react';
import './HouseDisplay.css';
import { BsArrowRight } from 'react-icons/bs';
import house0 from '../Resources/house0.jpg';

const HouseDisplay = (props) => {
  return (
    <div className="houseDisplay__container">
      <div className="houseImageContainer">
        <img src={props.image} alt="oops" />
      </div>
      <div className="houseAddress__price">
        <p>{props.address}</p>
      </div>
      <div className="houseDetails">
        <p>{props.beds}</p>
        <p>{props.baths}</p>
        <p>{props.squareFeet}</p>
      </div>
      <div className="viewListingContainer">
        <p>VIEW LISTING</p>
        <BsArrowRight style={{ color: 'white' }} />
      </div>
    </div>
  );
};

export default HouseDisplay;
