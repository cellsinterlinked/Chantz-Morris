import React, { useState, useEffect } from 'react';
import { Parallax, Background } from 'react-parallax';
import image3 from '../Resources/frontBlog.jpg';
import image4 from '../Resources/Top_Front Page_Family.jpg';
import image5 from '../Resources/AshleeChantzFront.jpeg';
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
  const [isLoading, setIsLoading] = useState(true);

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
        setBlogs(data);
        setIsLoading(false);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <div className="landingContainer">
          <Parallax className="testBanner" strength={500}>
            <Background className="custom-bg">
              <div className="fuckImage_container">
                <img src={image4} alt="fill murray" className="fuckImage" />
                <div className="image-cover"></div>
              </div>
            </Background>

            <div className="height-controller">
              <NavBar />
              <div style={introStyle} className="pageHead">
                <h1>Home is Where the Family's at</h1>
                <p />
              </div>
            </div>
          </Parallax>
          <div className="divider-one">
            <div className="introTitle">
              <h1>Serving Central and Southern Indiana
                {/* <div className="title_flare4" ></div> */}
              </h1>
            </div>
            <div className="landing-starter">
              {/* <div className="lineBreak" /> */}

              <div className="introInfoContainer">
                <div className="landing-self-info">
                  <p>
                    Ashlee and Chantz have a two-fold mission:
                    {/* It has become Ashlee and Chantz’s mission to educate and
                    guide community members of Jennings County and surrounding
                    areas through their home buying and selling experiences.
                    Through the love of their community, education, drive to
                    succeed, and access to a diverse team of real estate
                    professionals, they are confident in their ability to lead
                    others in their quest to achieve their real estate goals. */}
                  </p>
                  <ul>
                    <li>
                      To become your go to experts for all real estate buying
                      and selling needs through the ACM Realty Team
                    </li>
                    <li>
                      To provide a wide range of property management services to
                      investors to make managing property investments efficient
                      and simple
                    </li>
                  </ul>
                  <p>
                    Through the love of their community, education, drive to
                    succeed, and access to a diverse team of real estate
                    professionals, they are confident in their ability to lead
                    others in their quest to achieve their real estate goals.
                  </p>
                  <p id="chantzQuote">
                    “ Our clients are our main priority. We build our services
                    based on your needs and work to ensure you’re 100%
                    satisfied.”
                  </p>
                  <p id="chantzSig">-Ashlee and Chantz</p>
                </div>
                <div className="landing-self-picture-container">
                  <img className="landing-self-picture" src={image5} alt="" />
                </div>
              </div>
              <div className="lineBreak spaceTop" />
            </div>
          </div>
          <Parallax bgImage={image3} strength={500}>
            <div className="newImageCover">
              <div style={{ height: 850 }} className="image-2">
                <div className="listingTitle">
                  <p id="activeListings">Recent Blogs
                  <div className="title_flare4" ></div>
                  </p>
                </div>
                {isLoading && <LoadingSpinner />}

                {blogs && !isLoading && <BlogCarousel blogs={blogs} />}

                {!blogs && !isLoading && (
                  <ComingSoon text="Blogs Coming Soon!" />
                )}
              </div>
            </div>
          </Parallax>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Landing;
