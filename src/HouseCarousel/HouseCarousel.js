import React, {useState} from 'react'
import HouseDisplay from './HouseDisplay';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import './HouseCarousel.css';

const HouseCarousel = props => {
  let itemArr = [
  <HouseDisplay />,
  <HouseDisplay />,
  <HouseDisplay />,
  <HouseDisplay />,
  <HouseDisplay />,
  <HouseDisplay />,
  
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (itemArr.length - 1)) : setX(x + 100);
    console.log(x);
  };

  const goRight = () => {
    x === -100 * (itemArr.length - 1) ? setX(0) : setX(x - 100);
    console.log(x);
  };

  return(
    <div className="carousel__container">
      <div className="item__slider">
      {itemArr.map((item, index) => {
        return(
          <div
            key={index}
            className="item__Slide"
            style={{ transform: `translateX(${x}%)`}}
          >
          {item}
          </div>
        );
      })}
      <button id="item-slider__goLeft" onClick={goLeft}></button>
      <button id="item-slider__goRight" onClick={goRight}></button>

      </div>

    </div>
  )
}

export default HouseCarousel;