import React from "react";
import NavBar from "../Nav/NavBar";
import Footer from "../Nav/Footer";
import { Parallax } from "react-parallax";
import AboutHead from "../Resources/aboutHead.jpg";
import './About.css';
import AboutInfo from '../Resources/chantzAboutFinal.JPG';
import BarnRural from '../Resources/BarnRural.jpg';
import Muffins from '../Resources/Muffins.jpg';
import BrokerPic from '../Resources/brokerPic.jpg';
const introStyle = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  color: "white",
  maxWidth: "40rem",
  textAlign: "center"
};

const About = props => {
  return (
    <div className="aboutContainer">
      <Parallax
        bgImage={AboutHead}
        bgImageStyle={{ maxHeight: "40rem" }}
        strength={500}
      >
        <div className="image-cover">
          <div style={{ height: 400 }}>
            <NavBar />
            <div style={introStyle} className="pageHead"></div>
          </div>
        </div>
      </Parallax>
      <div className="aboutTitle">
        <h1>Your Local Home-Grown Real Estate Agent</h1>
      </div>
      <div className="aboutInfoContainer">
        <div className="aboutBox">
        <p>Chantz Morris has been a resident and community member of North Vernon since he was three years
          old. From the time he was a tot playing in his papaw’s shop, Charlie’s Body Shop, a school boy learning
          multiplication facts in his mamaw’s fourth grade classroom, a teenager sitting in the deer stand, to the
          hard working young man he is now, Chantz has had the importance of family and community instilled in
          every aspect of his life.</p>

          <p>Growing up, Chantz witnessed the several ways his family served the community. He watched as his
            papaw worked on cars, often times accepting apple pie as form of payment; he watched as his mamaw
            and mother spent endless hours outside of the classroom preparing to teach the voices of the future;
            and he watched as his father served this great country in the United States Marine Corp. Following the
            footsteps of his family, Chantz has been serving the community for a while. </p>
        </div>
        <div className="aboutBox">
          <img src={AboutInfo} alt="me"></img>
        </div>
        <div className="aboutBox">
          <p>For the past eight years he has been a server at local diners in North Vernon, getting the chance to meet members of the
            community, making new friends. During this time, he attended Indiana University Purdue University of
            Columbus, where he received his Bachelor’s in administration with a concentration in project
            management. Shortly after his graduation he spent time at the Indiana Statehouse during the 2020
            legislative session, serving under the Republican House of Representative’s communications
            department.</p>
        </div>
        <div className="aboutBox">
          <p>With the compassion and knowledge he possesses, Chantz has set out to help guide community
            members as they traverse the real estate landscape, whether it be informing of local zoning ordinances
            or advising on local housing trends. He understands buying a new home or selling one can be a very
            emotional process, as it is the epicenter of many family memories.</p>
        </div>
        <div className="aboutBox">
          <p>To best support the needs of the people, he has challenged himself to never stop learning as rules,
            regulations and the market are constantly fluctuating. He believes continuous education is fundamental
            for success.</p>
        </div>
        <div className="aboutBox">
          <p>With high ambitions and the desire to make a positive impact on others, Chantz is on a mission to
            provide his local communities with knowledge and expertise that will ease the process of any real estate
            demand.</p>
        </div>

      </div>
      <div className="aboutCredentials">
        <p>Snarf semaphore leapfrog bin data bit segfault hash emacs char spoof foo private. Afk unix cookie overflow all your base are belong to us ip cat Starcraft. Buffer python class bypass vi hack the mainframe true warez worm tunnel in ban script kiddies. </p>
      </div>
      
      
      <div className="aboutBlogTitle">
        <h1>Blog Title</h1>
      </div>
      <div className="aboutInfoContainer">
        <div className="aboutBox">
          <p>Deep v hammock post-ironic edison bulb everyday carry disrupt. Art party viral occupy af tote bag before they sold out. Affogato before they sold out gochujang aesthetic literally pitchfork. Typewriter ennui banjo, mumblecore selfies succulents helvetica you probably haven’t heard of them celiac live-edge. Photo booth hell of migas skateboard. Heirloom pinterest DIY, vaporware subway tile gentrify meh. Snackwave glossier viral gastropub poutine williamsburg poke. Ethical messenger bag readymade direct trade organic locavore pabst. Quinoa selvage cardigan, banjo vaporware af food truck. Stumptown gochujang lyft tousled shoreditch lumbersexual. Cliche ugh kinfolk plaid shaman. </p>
        </div>
        <div className="aboutBox">
          <img src={BarnRural} alt="barn"></img>
        </div>
        <div className="aboutBox">
          <img src={Muffins} alt="muffins"></img>
        </div>
        <div className="aboutBox">
          <p>Health goth raw denim vaporware waistcoat, vegan neutra glossier. Cronut chartreuse tbh meh schlitz. Snackwave lumbersexual pinterest narwhal, single-origin coffee coloring book selfies tacos. Fanny pack vaporware disrupt health goth, organic snackwave heirloom jean shorts truffaut lo-fi stumptown. Gluten-free semiotics vice activated charcoal gochujang cloud bread. Lomo authentic messenger bag polaroid flannel butcher occupy offal helvetica wolf skateboard jean shorts. Polaroid echo park raw denim freegan. Irony twee tattooed craft beer small batch. Copper mug brooklyn crucifix hashtag deep v chicharrones ethical vegan pabst disrupt. Cardigan shabby chic hell of, lomo actually letterpress vape four dollar toast mixtape prism salvia edison bulb. Brunch raw denim heirloom banh mi.</p>
        </div>
      </div>

      <div className="aboutBrokerTitle"><h1>ATLAS</h1></div>
      <div className="aboutBrokerBox">
        <div className="aboutBrokerInfo">
        <p>The only home we’ve ever known preserve and cherish that pale blue dot. Cosmic fugue, circumnavigated descended from astronomers decipherment, permanence of the stars science Euclid muse about!</p>
        <p>A still more glorious dawn awaits Euclid, tendrils of gossamer clouds extraplanetary muse about vastness is bearable only through love Cambrian explosion! Extraordinary claims require extraordinary evidence of brilliant syntheses?</p>
        <p>Emerged into consciousness encyclopaedia galactica rich in heavy atoms, billions upon billions are creatures of the cosmos, the ash of stellar alchemy consciousness tingling of the spine ship of the imagination.</p>
        <p>Explorations star stuff harvesting star light ship of the imagination birth dispassionate extraterrestrial observer trillion, rings of Uranus Apollonius of Perga? </p>
        </div>
        <div className="aboutBrokerImage">
            <img src={BrokerPic} alt="me again"></img>
        </div>

      </div>

    <Footer />
    </div>
  );
};

export default About;
