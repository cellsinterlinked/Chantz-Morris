import React, { useState, useEffect } from 'react';
import './BlogCarousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BlockContent from '@sanity/block-content-to-react';
import EmptyDisplay from './EmptyDisplay';
import BlogDisplay from './BlogDisplay';
import sanityClient from '../client';

const BlogCarousel = (props) => {
  const blogLength = props.blogs.length - 1;

  

  const itemArr = [
    <BlogDisplay
      slug={props.blogs[0].slug.current}
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
      slug={props.blogs[1].slug.current}
      image={props.blogs[1].mainImage.asset.url}
      title={props.blogs[1].title}
      date={props.blogs[1].publishedAt.slice(0, 10)}
      children={
        <BlockContent
          blocks={props.blogs[1].body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
          className="workBody"
        />
      }
    />,
    <BlogDisplay
      slug={props.blogs[2].slug.current}
      image={props.blogs[2].mainImage.asset.url}
      title={props.blogs[2].title}
      date={props.blogs[2].publishedAt.slice(0, 10)}
      children={
        <BlockContent
          blocks={props.blogs[2].body}
          projectId={sanityClient.clientConfig.projectId}
          dataset={sanityClient.clientConfig.dataset}
          className="workBody"
        />
      }
    />,
    <EmptyDisplay
      
    />,
    <EmptyDisplay
      
    />,
    <EmptyDisplay
      
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
