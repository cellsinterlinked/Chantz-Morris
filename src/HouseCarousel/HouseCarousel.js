import React, { useState, useEffect } from 'react';
import { FaChevronLeft , FaChevronRight } from 'react-icons/fa';

import HouseDisplay from './HouseDisplay';
import './HouseCarousel.css';
import House0 from '../Resources/house0.jpg';
import House1 from '../Resources/house1.jpg';
import House2 from '../Resources/house2.jpg';
import House3 from '../Resources/house3.jpg';
import House4 from '../Resources/house4.jpg';
import House5 from '../Resources/house5.jpg';
import House6 from '../Resources/house6.jpg';
import House7 from '../Resources/house7.jpg';
import sanityClient from '../client.js';

const dummyHouses = [
  {
    id: 1,
    image: House0,
    address: '7298 Littleton St. Tuckerton, NJ 08087',
    beds: '4 BEDS',
    baths: '2.5 BATHS',
    squareFeet: '3000 SF',
  },
  {
    id: 2,
    image: House1,
    address: '72 Bow Ridge St. Muskogee, OK 74403',
    beds: '3 BEDS',
    baths: '3 BATHS',
    squareFeet: '2050 SF',
  },
  {
    id: 3,
    image: House2,
    address: '208 Glenholme St. Clinton, MD 20735',
    beds: '3 BEDS',
    baths: '2.5 BATHS',
    squareFeet: '3100 SF',
  },
  {
    id: 4,
    image: House3,
    address: '10 Durham St. Far Rockaway, NY 11691',
    beds: '4 BEDS',
    baths: '3 BATHS',
    squareFeet: '2700 SF',
  },
  {
    id: 5,
    image: House4,
    address: '667 Victoria St. Schenectady, NY 12302',
    beds: '3 BEDS',
    baths: '3 BATHS',
    squareFeet: '2800 SF',
  },
  {
    id: 6,
    image: House5,
    address: '7 Harrison Dr. Powder Springs, GA 30127',
    beds: '3 BEDS',
    baths: '2 BATHS',
    squareFeet: '2100 SF',
  },
  {
    id: 7,
    image: House6,
    address: '9548 E. Branch Court Grand Rapids, MI 49503',
    beds: '4 BEDS',
    baths: '2.5 BATHS',
    squareFeet: '4100 SF',
  },
];

const HouseCarousel = (props) => {
  const itemArr = [
    <HouseDisplay
      image={props.blogs[0].mainImage.asset.url}
      address={dummyHouses[0].address}
      beds={dummyHouses[0].beds}
      baths={dummyHouses[0].baths}
      squareFeet={dummyHouses[0].squareFeet}
    />,
    <HouseDisplay
      image={dummyHouses[1].image}
      address={dummyHouses[1].address}
      beds={dummyHouses[1].beds}
      baths={dummyHouses[1].baths}
      squareFeet={dummyHouses[1].squareFeet}
    />,
    <HouseDisplay
      image={dummyHouses[2].image}
      address={dummyHouses[2].address}
      beds={dummyHouses[2].beds}
      baths={dummyHouses[2].baths}
      squareFeet={dummyHouses[2].squareFeet}
    />,
    <HouseDisplay
      image={dummyHouses[3].image}
      address={dummyHouses[3].address}
      beds={dummyHouses[3].beds}
      baths={dummyHouses[3].baths}
      squareFeet={dummyHouses[3].squareFeet}
    />,
    <HouseDisplay
      image={dummyHouses[4].image}
      address={dummyHouses[4].address}
      beds={dummyHouses[4].beds}
      baths={dummyHouses[4].baths}
      squareFeet={dummyHouses[4].squareFeet}
    />,
    <HouseDisplay
      image={dummyHouses[5].image}
      address={dummyHouses[5].address}
      beds={dummyHouses[5].beds}
      baths={dummyHouses[5].baths}
      squareFeet={dummyHouses[5].squareFeet}
    />,
    <HouseDisplay
      image={dummyHouses[6].image}
      address={dummyHouses[6].address}
      beds={dummyHouses[6].beds}
      baths={dummyHouses[6].baths}
      squareFeet={dummyHouses[6].squareFeet}
    />,
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

  return (
    <div className="houseCarousel__container">
      <button id="item-slider__goLeft" onClick={goLeft}>
        <FaChevronLeft
          className="arrow"
          style={{ height: 'auto', width: '1.5rem' }}
        />
      </button>
      <div className="item__slider">
        {itemArr.map((item, index) => {
          return (
            <div
              key={index}
              className="item__Slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <button id="item-slider__goRight" onClick={goRight}>
        <FaChevronRight
          className="arrow"
          style={{ height: 'auto', width: '1.5rem' }}
        />
      </button>
    </div>
  );
};

export default HouseCarousel;
