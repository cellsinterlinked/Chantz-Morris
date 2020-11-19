import React from 'react';
import { Parallax } from 'react-parallax';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import AboutHead from '../Resources/train2.jpg';
import './About.css';
import AboutInfo from '../Resources/chantzAboutFinal.JPG';



const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const About = (props) => {
  return (
    <div className="aboutContainer">
      <Parallax
        className="testBanner"
        bgImage={AboutHead}
        bgImageStyle={{ maxHeight: '45rem' }}
        strength={500}
      >
        <div className="image-cover2">
          <div style={{ height: 500 }}>
            <NavBar />
            <div style={introStyle} className="pageHead">
            <h1 style={{letterSpacing: "4px", marginTop: "4rem"}}>Meet Chantz</h1>

            </div>
          </div>
        </div>
      </Parallax>
      <div className="aboutTitle">
        <h1>Your Local Home-Grown Real Estate Agent</h1>
      </div>

      <div className="aboutInfoContainer">
      <div className="title-pizzazz2"/>
        <div className="aboutBox">
          <img style={{float: "right"}} src={AboutInfo} alt="me" />
          <div className="aboutResourceBox">
            Chantz Morris has been a resident and community member of North
            Vernon since he was three years old. From the time he was a tot
            playing in his papaw’s shop, Charlie’s Body Shop, a school boy
            learning multiplication facts in his mamaw’s fourth grade classroom,
            a teenager sitting in the deer stand, to the hard working young man
            he is now, Chantz has had the importance of family and community
            instilled in every aspect of his life.Growing up, Chantz witnessed the several ways his family served the
            community. He watched as his papaw worked on cars, often times
            accepting apple pie as form of payment; he watched as his mamaw and
            mother spent endless hours outside of the classroom preparing to
            teach the voices of the future; and he watched as his father served
            this great country in the United States Marine Corp. Following the
            footsteps of his family, Chantz has been serving the community for a
            while.
          </div>

          
        </div>
        
        <div className="aboutBox">
          <div className="aboutResourceBox" >
            For the past eight years he has been a server at local diners in
            North Vernon, getting the chance to meet members of the community,
            making new friends. During this time, he attended Indiana University
            Purdue University of Columbus, where he received his Bachelor’s in
            administration with a concentration in project management. Shortly
            after his graduation he spent time at the Indiana Statehouse during
            the 2020 legislative session, serving under the Republican House of
            Representative’s communications department.
          </div>
        </div>
        <div className="aboutBox">
          <div  className="aboutResourceBox">
            With the compassion and knowledge he possesses, Chantz has set out
            to help guide community members as they traverse the real estate
            landscape, whether it be informing of local zoning ordinances or
            advising on local housing trends. He understands buying a new home
            or selling one can be a very emotional process, as it is the
            epicenter of many family memories.
          </div>
        </div>
        <div className="aboutBox">
          <div  className="aboutResourceBox">
            To best support the needs of the people, he has challenged himself
            to never stop learning as rules, regulations and the market are
            constantly fluctuating. He believes continuous education is
            fundamental for success.
          </div>
        </div>
        <div className="aboutBox">
          <div  className="aboutResourceBox">
            With high ambitions and the desire to make a positive impact on
            others, Chantz is on a mission to provide his local communities with
            knowledge and expertise that will ease the process of any real
            estate demand.
          </div>
        </div>
      </div>
      

      

      <div className="aboutBrokerTitle">
        <h1>The Modglin Group</h1>
      </div>
      <div className="aboutBrokerBox">

        <div className="title-pizzazz2"/>

        <div className="aboutBrokerInfo">
          <p>
            The Modglin Group is independently owned and was founded more than
            fifteen years ago by Raymond Modglin. The company is based out of
            Greenwood Indiana, but spans north, as far as Lake, Porter and
            Jasper counties, and south, as far as Jennings, Bartholomew, and
            Jackson counties. In addition to operating a real estate brokerage,
            they also operate Real University and Five Stone Mortgage. This
            creates an advantage for Modglin Group agents because they have
            direct access to a large diverse team of real estate and mortgage
            professionals with years of experience. The Modglin Group prides
            themselves on making every real estate transaction as smooth as
            possible, as they understand the stresses of buying and selling a
            home. It is with this pride and dedication to their clients that has
            allowed them to continue growing, serving Northern, Central and
            Southern parts of Indiana.
          </p>
          <p id="modglinQuote">
            “It is our mission to glorify God by putting our clients’ interests
            above our own, providing the highest level of honesty and
            expertise.”
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
