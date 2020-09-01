import React from 'react';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import { Parallax } from 'react-parallax';
import Cozy from '../Resources/cozy2.jpg';
import './Landing.css';
import './AllPage.css';
import Test from '../Resources/house0.jpg';


const introStyle = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  color: "white",
  maxWidth: "40rem",
  textAlign: "center"
};

const ForBuyers = props => {
  return(
    <div className="buyers-Container">
    <Parallax bgImage={Cozy} strength={500}>
    <div className="image-cover">
    <div style={{height: 600}}>
    <NavBar />
    <div style={introStyle} className="pageHead">
      <h1>Finding Your Dream Home</h1>
    </div>
    </div>
    </div>
    </Parallax>
    <div className="buyer-resources-container">
      

    </div>
    
    
    
    
    
    </div>
  )
}

export default ForBuyers;