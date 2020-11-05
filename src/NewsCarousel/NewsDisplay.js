import React from 'react';
import './NewsDisplay.css';
import { BsArrowRight } from 'react-icons/bs';
import house0 from '../Resources/house0.jpg';

const NewsDisplay = (props) => {
  return (
    <div className="newsDisplay__container">
      <div className="newsImageContainer">
        <img src={props.image} alt="oops" />
      </div>
      <div className="newsTitle">
        <p>{props.title}</p>
      </div>
      <div className="newsReadMore">
        <p>VIEW ARTICLE</p>
        <BsArrowRight style={{ color: 'white' }} />
      </div>
      <div className="dateContainer">
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default NewsDisplay;
