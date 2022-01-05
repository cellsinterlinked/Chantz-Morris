import React from 'react';
import './BlogDisplay.css';
import { NavLink } from 'react-router-dom';


const BlogDisplay = (props) => {

  const blogDateFunc = () => {
    const {date} = props;
    const blogDate = new Date(date);
    const nowDate = new Date();
    const diff = nowDate.getTime() - blogDate.getTime();
    const msInDay = 1000 * 3600 * 24;
    const total = diff / msInDay;
    const days = Math.floor(total);
    return days;
  };

  return (
    <div className='blogDisplay__container' >
      <div className="blogImageContainer">
        <img src={props.image} alt="oops" />
      </div>
      <div className="blogDetails">
      <div className="blogDisplayTitle">
        <p>{props.title}</p>
      </div>
      {props.children}
      </div>
      <div className="blogDate">
        <p>{`${blogDateFunc()} ` + `Days Ago`}</p>
      </div>
      <NavLink to={`/blog/${props.slug}`}className="blogDisplayButton">
        <button type="button">Read More</button>
      </NavLink>
    </div>
  );
};

export default BlogDisplay;
