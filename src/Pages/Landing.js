import React from "react";
import image1 from "../Resources/field.jpeg";
import image2 from "../Resources/town1.jpeg";
import image3 from "../Resources/RailRoad.jpg";
import image4 from "../Resources/houseSunset.jpg";
import image5 from "../Resources/professional.jpg";
import { Parallax } from "react-parallax";
import NavBar from "../Nav/NavBar";
import HouseDisplay from "../HouseCarousel/HouseDisplay";
import HouseCarousel from "../HouseCarousel/HouseCarousel";
import "./Landing.css";
import "./AllPage.css";
import NewsCarousel from "../NewsCarousel/NewsCarousel";
import Footer from "../Nav/Footer";

const introStyle = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  color: "white",
  maxWidth: "40rem",
  textAlign: "center"
};

const Landing = props => {
  return (
    <React.Fragment>
    <div className="landingContainer">
      <Parallax bgImage={image4} strength={500}>
        <div className="image-cover">
          <div style={{ height: 650 }}>
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>Bringing Class To Southern Indiana</h1>
              <p> The Dirty-Vern + More Desirable Surrounding Counties</p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="divider-one">
      <div className="introTitle"><h1>You are all beautiful snowflakes. Your house should be no exception</h1></div>
      <div className="introInfoContainer">
      <div className="lineBreak"></div>
        <div className="landing-self-info">
          <p>
            Such aside, the indeed, soon arm, ages, effectiveness of get
            separated sentinels up instance. Empty beginnings, and downstairs
            get no was royal not don't didn't her, the on pitifully slightly boa
            presentations. Are last for planning even better a very follow
            concept searched of our there from cheerful, no pass violin, those
            them, problem him ticket how this systems principles, universal
            thought, remedies. Might subordinates here, my side it the slogging
            made raising he like to from fundamental hologram that would
            mathematicians and lively.
          </p>
        </div>
        <div className="landing-self-picture-container">
          <img className="landing-self-picture" src={image5} />
        </div>
          <div className="landing-self-info"><p>Meditation gentrify fam, yuccie kickstarter brunch vape. Pitchfork freegan biodiesel bicycle rights. Semiotics flexitarian four loko XOXO raw denim chartreuse. Cray ramps microdosing everyday carry bicycle rights vexillologist. Bitters bushwick schlitz, 3 wolf moon tofu hoodie beard bicycle rights truffaut keffiyeh sartorial. Affogato coloring book glossier humblebrag hella godard pour-over fashion axe leggings tote bag af.</p></div>
          <div className="landing-self-info"><p>Lomo neutra vape keytar man bun. Pabst fanny pack meggings, gochujang deep v stumptown banjo flexitarian poke hoodie. Jianbing iceland seitan echo park, tacos literally cornhole poke pinterest blue bottle man bun. Intelligentsia affogato freegan quinoa cray. Banjo bicycle rights quinoa, meditation pork belly brooklyn tumeric thundercats adaptogen portland vape art party. Cloud bread four loko ramps woke, la croix artisan poke tbh kale chips cornhole snackwave lo-fi normcore meditation.</p></div>
          
        <div className="lineBreak spaceTop"></div>
        </div>
      </div>
      <Parallax bgImage={image3} strength={500}>
        <div className="image-cover">
          <div style={{ height: 850 }} className="image-2">
            <div className="listingTitle">
              <p>ACTIVE LISTINGS</p>
            </div>
            <HouseCarousel />
          </div>
        </div>
      </Parallax>
      <div className="divider-two">
        <div className="newsSection__title">
          <h1>Whats Going On</h1>
          <p>In Southern Indiana Real Estate</p>
        </div>
        <div className="lineBreak" style={{width: "75%"}}></div>
        <NewsCarousel />
      </div>
    </div>
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
