import React, { useState, useEffect } from 'react';
import './BlogCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import BlockContent from '@sanity/block-content-to-react';
import BlogDisplay from './BlogDisplay';
import sanityClient from '../client';

const BlogCarousel = (props) => {
  const blogLength = props.blogs.length - 1;

  const itemArr = [
    <BlogDisplay
      image={props.blogs[0].mainImage.asset.url}
      title={props.blogs[0].title}
      date={props.blogs[0].publishedAt.slice(0, 10)}
      children={
        <BlockContent
          blocks={props.blogs[0].body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
          className="workBody"
        />
      }
    />,
    <BlogDisplay
      image={props.blogs[1].mainImage.asset.url}
      title={props.blogs[1].title}
      date={props.blogs[1].publishedAt}
      details={props.blogs[1].body}
    />,
    <BlogDisplay
      image={props.blogs[2].mainImage.asset.url}
      title={props.blogs[2].title}
      date={props.blogs[2].publishedAt}
      details={props.blogs[2].body}
    />,
    // <BlogDisplay
    //   image={dummyHouses[3].image}
    //   address={dummyHouses[3].address}
    //   beds={dummyHouses[3].beds}
    //   baths={dummyHouses[3].baths}
    //   squareFeet={dummyHouses[3].squareFeet}
    // />,
    // <BlogDisplay
    //   image={dummyHouses[4].image}
    //   address={dummyHouses[4].address}
    //   beds={dummyHouses[4].beds}
    //   baths={dummyHouses[4].baths}
    //   squareFeet={dummyHouses[4].squareFeet}
    // />,
    // <BlogDisplay
    //   image={dummyHouses[5].image}
    //   address={dummyHouses[5].address}
    //   beds={dummyHouses[5].beds}
    //   baths={dummyHouses[5].baths}
    //   squareFeet={dummyHouses[5].squareFeet}
    // />,
    // <BlogDisplay
    //   image={dummyHouses[6].image}
    //   address={dummyHouses[6].address}
    //   beds={dummyHouses[6].beds}
    //   baths={dummyHouses[6].baths}
    //   squareFeet={dummyHouses[6].squareFeet}
    // />
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
    <div className="blogCarousel__container">
      <button id="item-slider__goLeft" onClick={goLeft}>
        <FaChevronLeft
          className="arrow"
          style={{ height: 'auto', width: '1.5rem' }}
        />
      </button>
      <div className="item__slider">
        {itemArr.map((item, index) => (
          <div
            key={index}
            className="item__Slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        ))}
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

export default BlogCarousel;
