import React, { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';
import image3 from '../Resources/RailRoad.jpg';
import image4 from '../Resources/Top_Front Page_Family.jpg';
import image5 from '../Resources/Chantz_PUP PUP (2).JPG';
import NavBar from '../Nav/NavBar';
import './Landing.css';
import './AllPage.css';
import Footer from '../Nav/Footer';
import sanityClient from '../client.js';
import BlogCarousel from '../BlogCarousel/BlogCarousel';
import LoadingSpinner from '../Reusable/Loading/LoadingSpinner';
import ComingSoon from '../Reusable/Temporary/ComingSoon';

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
  const [isLoading, setIsLoading] =useState(true)

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
        setBlogs(data)
        setIsLoading(false)
      }
      )
      .catch(console.error);
  }, []);

  return (
    <>
    {isLoading && <div className="center">
      <LoadingSpinner/>
      </div>}
      {!isLoading && <div className="landingContainer">
        <Parallax className="testBanner" bgImage={image4} strength={500}>
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
              Serving Jennings County and Surrounding Areas
            </h1>
          </div>
          <div className="landing-starter">
            <div className="lineBreak" />

          <div className="introInfoContainer">
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
              <img className="landing-self-picture" src={image5} alt="" />
            </div>

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
              {isLoading && <LoadingSpinner />}

              {blogs && !isLoading && (
                <BlogCarousel blogs={blogs} />
                )}
              
              {!blogs && !isLoading && <ComingSoon  text="Blogs Coming Soon!"/>}
              
            </div>
          </div>
        </Parallax>
        {/* <div className="divider-two">
          <div className="newsSection__title">
            <h1>Whats Going On</h1>
            <p>In Southern Indiana Real Estate</p>
          </div>
          <div className="lineBreak" style={{ width: '75%' }} />
          <NewsCarousel />
        </div> */}
      <Footer />
      </div>}
    </>
  );
};

export default Landing;
