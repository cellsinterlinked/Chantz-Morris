import React, { useState } from 'react';
import './BlogTemplate.css';
import { BsArrowRight } from 'react-icons/bs';

const BlogTemplate = (props) => {
  const [extended, setExtended] = useState(false);

  const expand = () => {
    extended ? setExtended(false) : setExtended(true);
    console.log(extended);
  };

  return (
    <div className="blogTemplateContainer" onClick={expand}>
      <div className="blogTitleContainer">
        <h1>{props.title}</h1>
      </div>
      <div className="blogImageContainer">
        <img className="blogimage" src={props.image} />
      </div>
      <div className="blogContentContainer">
        <div className={!extended ? 'blogPreviewContainer' : 'minimal'}>
          <p id="blogPreviewText">{props.preview}</p>
        </div>
        <div className={extended ? 'minimal' : 'blogReadMore'}>
          <p id="blogReadMore">Read More</p>
          <BsArrowRight className="blogArrow" />
        </div>
        <div className={extended ? 'expandingContent' : 'minimal'}>
          <div className="blogDateContainer">
            <p>{props.date}</p>
          </div>
          <div className="blogAuthorContainer">
            <p> By Chantz Morris</p>
          </div>
          <div className="contentContainer">
            <p>{props.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTemplate;
