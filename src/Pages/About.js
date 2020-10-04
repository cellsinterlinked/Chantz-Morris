import React from "react";
import NavBar from "../Nav/NavBar";
import Footer from "../Nav/Footer";
import { Parallax } from "react-parallax";
import AboutHead from "../Resources/aboutHead.jpg";
import './About.css';
import AboutInfo from '../Resources/aboutinfo.jpg';
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
        <h1>Meet Chantz</h1>
      </div>
      <div className="aboutInfoContainer">
        <div className="aboutBox">
          <p> There is no chin behind Chuck Norris’ beard. There is only another fist. If you spell Chuck Norris in Scrabble, you win. Forever If you ask Chuck Norris what time it is, he always says, “Two seconds ’til.” After you ask, “Two seconds ’til what?” he roundhouse kicks you in the face, Chuck Norris can speak a language inside of another language, A Handicapped parking sign does not signify that this spot is for handicapped people. It is actually in fact a warning, that the spot belongs to Chuck Norris and that you will be handicapped if you park there.</p>
        </div>
        <div className="aboutBox">
          <img src={AboutInfo} alt="me"></img>
        </div>
        <div className="aboutBox">
          <p>Chuck Norris will attain statehood in 2009. His state flower will be the Magnolia Chuck Norris has two speeds. Walk, and Kill Chuck Norris can win a game of Connect Four in only three moves If you spell Chuck Norris in Scrabble, you win. Forever. The leading causes of death in the United States are: 1. Heart Disease 2. Chuck Norris 3. Cancer.</p>
        </div>
        <div className="aboutBox">
          <p>The chief export of Chuck Norris is Pain Chuck Norris is the reason you turn a light on when you enter a room. There is no theory of evolution. Just a list of animals Chuck Norris allows to live Chuck Norris received an electric shock, the result was Tron Chuck Norris is the reason why Waldo is hiding Police label anyone attacking Chuck Norris as a Code 45-11… a suicide, Fool me once, shame on you. Fool Chuck Norris once and he will roundhouse you in the face.</p>
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
