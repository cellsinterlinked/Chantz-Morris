import React, { useState, useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';
import { Link } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import Blogimg from '../Resources/eyes2.jpg';
import './Landing.css';
import './AllPage.css';
import './Blog.css';
import '../BlogCarousel/BlogDisplay.css';
import { useHttpClient } from '../Reusable/Hooks/http-hook';
import sanityClient from '../client.js';
import ComingSoon from '../Reusable/Temporary/ComingSoon';
import BlogDisplay from '../BlogCarousel/BlogDisplay';
import LoadingSpinner from '../Reusable/Loading/LoadingSpinner';

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
  const [isLoading, setIsLoading] =  useState(true)

  

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          description,
          publishedAt,
          body,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => {
      console.log(data)
      setBlogs(data)
      setIsLoading(false)
      console.log(blogs)
    }
      )
      .catch(console.error);
  }, []);

  return (
    <>
    {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
    {!isLoading && <div className="blog-container">
      

      <Parallax className="testBanner"  strength={500}>
      <Background className="custom-bg">
              <div className="fuckImage_container">
                <img src={Blogimg} alt="fill murray" className="fuckImage" />
                <div className="image-cover"></div>
              </div>
            </Background>

    
          <div className="height-controller">
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>Through the Eyes of an Agent</h1>
          
            </div>
          </div>
    
      </Parallax>

      <div className="blogTitle">
        <h1>Follow Us on Our Journey...</h1>
      </div>


      <div className="blogInfo">

        <div className="title-pizzazz" />
        <div className="blogBlock">
          <p>
          The purpose of this blog is to help inform and educate without making it feel like you’re reading a report.
          As homeowners and homebuyers, we want you to be as well-informed as possible. We’re going to provide a wide 
          range of information that will make reaching your real estate goals so much easier. Topics will range as far
           as taking care of your home, preparing to sell, deciding if buying is the right option, to understanding the 
           relationship with your agent. We hope you enjoy these quick reads!
          </p>
        </div>
        
      </div>

      <div className="blog-list-container">
        {blogs && 
          blogs.map((blog, index) => (
            <Link
              to={`/blog/${  blog.slug.current}`}
              key={blog.slug.current}
              className="blogLink"
              // className="blogPreviewBox"
            >
            <BlogDisplay 
              slug={blog.slug.current}
              image={blog.mainImage.asset.url}
              title={blog.title}
              date={blog.publishedAt.slice(0, 10)}
              children={
                <BlockContent
                  blocks={blog.body}
                  projectId={sanityClient.clientConfig.projectId}
                  dataset={sanityClient.clientConfig.dataset}
                  className="workBody"/>
              }
              
              />
            </Link>
          ))}
          {!blogs && !isLoading && <ComingSoon text="Blogs Coming Soon!"/>}
      </div>

      <Footer />
    </div>}
    </>
  );
};

export default Blog;

              
              // <div className="blogPreviewImageContainer">
              //   <img
              //     className="blogPreviewImage"
              //     alt=""
              //     src={blog.mainImage.asset.url}
              //   />
              // </div>
              // <div className="innerPreviewBox">
              //   <div className="titlePreviewContainer">
              //     <h2 style={{ textDecoration: 'none' }}>{blog.title}</h2>
              //   </div>
              //   <div className="publishedPreviewContainer">
              //     <p>{blog.publishedAt.slice(0, 10)}</p>
              //   </div>
              //   <div className="descriptionPreviewContainer">
              //     <p>{blog.description}</p>
              //   </div>
              // </div>