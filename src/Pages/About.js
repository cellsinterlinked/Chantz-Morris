import React from 'react';
import { Parallax, Background } from 'react-parallax';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import AboutHead from '../Resources/train2.jpg';
import './About.css';
import ChantzNew from '../Resources/ChantzNew.jpeg';
import AshleeNew from '../Resources/AshleeNew.jpeg';

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
      <Parallax className="testBanner" strength={500}>
        <Background className="custom-bg">
          <div className="fuckImage_container">
            <img src={AboutHead} alt="fill murray" className="fuckImage" />
            <div className="image-cover"></div>
          </div>
        </Background>

        <div className="height-controller">
          <NavBar />
          <div style={introStyle} className="pageHead">
            <h1 style={{ letterSpacing: '4px', marginTop: '4rem' }}>
              Meet The Team
            </h1>
          </div>
        </div>
      </Parallax>
      <div className="aboutTitle">
        <h1>Your Local Home-Grown Real Estate Agents</h1>
      </div>

      <div className="aboutInfoContainer">
        <div className="title-pizzazz2" />
        <div className="aboutBox">
          <img style={{ float: 'right' }} src={ChantzNew} alt="Chantz" />
          <div className="aboutResourceBox">
            {/* Chantz Morris has been a resident and community member of North
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
            while. */}
            Growing up, the Morris siblings witnessed the several ways their
            family served the community. They watched as their papaw owned and
            operated a business working on cars, often times accepting apple pie
            as form of payment; they watched as their mamaw and mother spent
            endless hours outside of the classroom preparing to teach the voices
            of the future; and they watched as their father served this great
            country in the United States Marine Corp. Following the footsteps of
            their family, Chantz and Ashlee have dedicated their time to serving
            the community. The two siblings worked together at the White Front
            Café while it was open and operating, and also worked together at
            the Grateful Grubb, getting the opportunity to meet members of the
            community, build relationships, and make new friends.
            <br></br>
            <br></br>
            While working within the community, Ashlee and Chantz attended
            Indiana University Purdue University of Columbus, where Chantz
            received his Bachelor’s in administration with a concentration in
            project management and Ashlee received her Bachelor’s in Psychology.
            After completing her Bachelor’s degree, Ashlee went on to get her
            Master in Public Affairs with a concentration in Policy Analysis.
            Throughout their educational careers, both siblings spent time at
            the Indiana Statehouse,
            <img
              style={{ float: 'left', marginRight: '15px' }}
              src={AshleeNew}
              alt="Ashlee"
            />
            with Ashlee being there in the 2017 legislative session, serving
            under the Republican House of Representative’s Legislative
            Department and Chantz in the 2020 legislative session, serving under
            the Republican House of Representative’s communications department.
            <br></br>
            <br></br>
            With the compassion and knowledge they possess, Chantz and Ashlee
            have set out to help guide community members as they traverse the
            real estate landscape, whether it be informing of local zoning
            ordinances or advising on local housing trends. They both understand
            buying a new home or selling one can be a very emotional process, as
            it is the epicenter of many family memories. Given that community
            service and a strong family network have been ingrained in their
            everyday lives, Ashlee and Chantz are more than ready to help
            support their community members through the process!
            <br></br>
            <br></br>
            Call or email them with any questions you may have!
          </div>
        </div>
      </div>

      {/* <div className="aboutBrokerTitle">
        <h1>The Modglin Group</h1>
      </div>
      <div className="aboutBrokerBox">
        <div className="title-pizzazz2" />

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
      </div> */}

      <div style={{marginTop: "6rem"}}></div>

      <Footer />
    </div>
  );
};

export default About;
