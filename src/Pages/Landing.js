import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import image1 from '../Resources/field.jpeg';
import image2 from '../Resources/town1.jpeg';
import image3 from '../Resources/RailRoad.jpg';
import image4 from '../Resources/Top_Front Page_Family.jpg';
import image5 from '../Resources/Chantz_PUP PUP (2).JPG';
import NavBar from '../Nav/NavBar';
import HouseDisplay from '../HouseCarousel/HouseDisplay';
import HouseCarousel from '../HouseCarousel/HouseCarousel';
import './Landing.css';
import './AllPage.css';
import NewsCarousel from '../NewsCarousel/NewsCarousel';
import Footer from '../Nav/Footer';
import sanityClient from '../client.js';
import BlogCarousel from '../BlogCarousel/BlogCarousel';

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const Landing = (props) => {
  const [blogs, setBlogs] = useState();

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
      .then((data) => setBlogs(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="landingContainer">
        <Parallax bgImage={image4} strength={500}>
          <div className="image-cover">
            <div style={{ height: 650 }}>
              <NavBar />
              <div style={introStyle} className="pageHead">
                <h1>Home is Where the Family's at</h1>
                <p />
              </div>
            </div>
          </div>
        </Parallax>
        <div className="divider-one">
          <div className="introTitle">
            <h1>
              Something Profound About a Personalized Home Buying Experience
            </h1>
          </div>
          <div className="introInfoContainer">
            <div className="lineBreak" />
            <div className="landing-self-info">
              <p>
                It has become Chantz’s mission to educate and guide community
                members of Jennings County and surrounding areas through their
                home buying and selling experiences. Through the love of his
                community, education, drive to succeed, and access to a diverse
                team of real estate professionals, he is confident in his
                ability to lead others in their quest to achieve their real
                estate goals.
              </p>
              <p id="chantzQuote">
                “If you’re not happy. I’m not happy. It’s simple, let’s both be
                happy. “
              </p>
              <p id="chantzSig">-Chantz Morris</p>
            </div>
            <div className="landing-self-picture-container">
              <img className="landing-self-picture" src={image5} />
            </div>

            <div className="lineBreak spaceTop" />
          </div>
        </div>
        <Parallax bgImage={image3} strength={500}>
          <div className="image-cover">
            <div style={{ height: 850 }} className="image-2">
              <div className="listingTitle">
                <p id="activeListings">Recent Blogs</p>
              </div>
              {blogs ? (
                <BlogCarousel blogs={blogs} />
              ) : (
                <div>
                  <h2>Loading...</h2>
                </div>
              )}
            </div>
          </div>
        </Parallax>
        <div className="divider-two">
          <div className="newsSection__title">
            <h1>Whats Going On</h1>
            <p>In Southern Indiana Real Estate</p>
          </div>
          <div className="lineBreak" style={{ width: '75%' }} />
          <NewsCarousel />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
