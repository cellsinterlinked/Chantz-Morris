import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { Link } from 'react-router-dom';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import Blogimg from '../Resources/blog.jpg';
import Relationshipimg from '../Resources/relationshipblog.jpg';
import Restaurant from '../Resources/restaurantblog.jpg';
import Bar from '../Resources/brew.jpg';
import BlogTemplate from '../Reusable/Blog/BlogTemplate';
import './Landing.css';
import './AllPage.css';
import './Blog.css';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import sanityClient from '../client.js';
import post from "../chantzmorris/schemas/post";

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const Blog = (props) => {
  const [blogs, setBlogs] = useState();

  // useEffect(() => {
  //   const fetchBlogs = async () => {
  //     try {
  //       const responseData = await sendRequest('http://localhost:5000/api/blogs'); //doesnt need method or headers because it is default get

  //       setBlogs(responseData.allBlogs)
  //     } catch (err) {}
  //   };

  //   fetchBlogs()

  // }, [sendRequest]);
  // this is for using the node back end for blogs which was dicided against

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          description,
          publishedAt,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="blog-container">
      <Parallax bgImage={Blogimg} strength={500}>
        <div className="image-cover">
          <div style={{ height: 600 }}>
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>Through The Eyes Of An Agent</h1>
              <p>Something About This Blog</p>
            </div>
          </div>
        </div>
      </Parallax>

      <div className="blogTitle">
        <h1>Follow Me on My Journey...</h1>
      </div>
      <div className="blogInfo">
        <div className="blogBlock">
          <p>
            Completely synergize resource taxing relationships via premier niche
            markets. Professionally cultivate one-to-one customer service with
            robust ideas. Dynamically innovate resource-leveling customer
            service for state of the art customer service.
          </p>
        </div>
        <div className="blogBlock">
          <p>
            Objectively innovate empowered manufactured products whereas
            parallel platforms. Holisticly predominate extensible testing
            procedures for reliable supply chains. Dramatically engage top-line
            web services vis-a-vis cutting-edge deliverables.
          </p>
        </div>
      </div>

      <div className="blog-list-container">
        {blogs &&
          blogs.map((blog, index) => (
            <Link
              to={`/blog/${  blog.slug.current}`}
              key={blog.slug.current}
              className="blogPreviewBox"
            >
              {/* <span className="blogPreviewBox" key={index}> */}
              <div className="blogPreviewImageContainer">
                <img
                  className="blogPreviewImage"
                  alt=""
                  src={blog.mainImage.asset.url}
                />
              </div>
              <div className="innerPreviewBox">
                <div className="titlePreviewContainer">
                  <h2 style={{ textDecoration: 'none' }}>{blog.title}</h2>
                </div>
                <div className="publishedPreviewContainer">
                  <p>{blog.publishedAt.slice(0, 10)}</p>
                </div>
                <div className="descriptionPreviewContainer">
                  <p>{blog.description}</p>
                </div>
              </div>

              {/* </span> */}
            </Link>
          ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
