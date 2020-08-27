import React from 'react'
import image1 from '../Resources/field.jpeg';
import image2 from '../Resources/town1.jpeg';
import image3 from '../Resources/RailRoad.jpg';
import image4 from '../Resources/houseSunset.jpg';
import image5 from '../Resources/professional.jpg';
import { Parallax } from 'react-parallax';
import NavBar from '../Nav/NavBar';
import HouseDisplay from '../HouseCarousel/HouseDisplay';
import HouseCarousel from '../HouseCarousel/HouseCarousel';
import './Landing.css';
import './AllPage.css';



const introStyle = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  color: "white",
  maxWidth: "40rem",
  textAlign: "center"
}

const Landing = (props) => {
  return(
    <div className="landingContainer">
      <Parallax bgImage={ image4 } strength={500} >
    <div className="image-cover">
    <div style={{height: 800}}>
    <NavBar />
    <div style={introStyle} className="pageHead">
    <h1>
      Bringing Class To Southern Indiana
    </h1>
    <p> The Dirty-Vern + More Desirable Surrounding Counties</p>
    </div>

    </div>
    </div>
    </Parallax>
    <div className="divider-one">
    <div className="landing-self-info">
    <p> Such aside, the indeed, soon arm, ages, effectiveness of get 
      separated sentinels up instance. Empty beginnings, and downstairs 
      get no was royal not don't didn't her, the on pitifully slightly
       boa presentations. Are last for planning even better a very 
       follow concept searched of our there from cheerful, no pass 
       violin, those them, problem him ticket how this systems 
       principles, universal thought, remedies. Might subordinates 
       here, my side it the slogging made raising he like to from 
       fundamental hologram that would mathematicians and lively. 
       In gradually the illustrated if, twists to be detailed the 
       contracting a then in as coffee. </p>
    </div>
    <div className="landing-self-picture-container">
      <img className="landing-self-picture" src={image5} />
    </div>

    </div>
    <div className="spacer"></div>
    <Parallax bgImage={ image3 } strength={500}>
    <div className="image-cover">
    <div style={{height: 1100}} className="image-2">

    <HouseCarousel />
    </div>
    </div>
  </Parallax>
  <div className="divider-two">
  </div>
    </div>
  )
}

export default Landing