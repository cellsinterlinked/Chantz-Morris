import React from 'react'
import './ForSellers.css';
import './Landing.css';
import './AllPage.css';
import HouseFront from '../Resources/houseFront.jpg';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import {Parallax} from 'react-parallax';
import BackYard from '../Resources/backYard.jpg';
import SellerInfographic from '../Resources/sellerInfographic.jpg';

const introStyle = {
  left: "50%",
  top: "50%",
  position: "absolute",
  transform: "translate(-50%, -50%)",
  color: "white",
  maxWidth: "40rem",
  textAlign: "center"
}

const ForSellers = props => {
  return (
      <div className="sellers-Container">
      <Parallax bgImage={HouseFront} strength={500}>
        <div className="image-cover">
          <div style={{ height: 600 }}>
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>I'm Here for You</h1>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="sellerTitle"><h1>Stuff About the Selling Process</h1></div>
      <div className="seller-resources1-container">
      <div className="sellerResourceBox"><p className="firstParagraph">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p></div>
      <div className="sellerResourceBox"><p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p></div>
      <div className="sellerResourceBox"><img src={BackYard} alt="backYard"></img></div>
      <div className="sellerResourceBox"><p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI. Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.</p></div>
      
      </div>
      <div className="sellerInfographicContainer"><img src={SellerInfographic} alt="infographic"></img></div>
      <Footer />



    </div>
  )
}

export default ForSellers