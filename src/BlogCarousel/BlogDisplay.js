import React from 'react';
import './BlogDisplay.css';
import { BsArrowRight } from 'react-icons/bs';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import sanityClient from '../client';

const BlogDisplay = (props) => {
  return (
    <div className="blogDisplay__container">
      <div className="blogImageContainer">
        <img src={props.image} alt="oops" />
      </div>
      <div className="blogDisplayTitle">
        <p>{props.title}</p>
      </div>
      <div className="blogDetails">{props.children}</div>
      <div className="blogDate">
        <p>{props.date}</p>
      </div>
      <div className="blogDisplayButton">
        <button>Read More</button>
      </div>
    </div>
  );
};

export default BlogDisplay;
