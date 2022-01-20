import React, {useState} from 'react'
import './SurveyStyle.css'
import './Finalize.css';
import { NavLink } from 'react-router-dom';

const Finalize = ({clicked, setClicked, finalDataHandler}) => {

  

const handleSubmit = (e) => {
  e.preventDefault()
  finalDataHandler()
}

    return (
    <form className="basics-wrapper" style={{justifyContent: "flex-start"}}>
      <div className="fadeContainer" style={{marginTop: "10rem"}}>
        <h1 className={clicked ? "thatsIt-hidden" : "thatsIt"}>Thats it for the questions!</h1>
        <div className={clicked ? "wish-submitted" : "wish-hidden"}>
        <h1>Your Wishlist was Submitted!</h1>
        <p style={{marginLeft: "2rem", marginRight: "2rem", textAlign: "center"}}> Please allow Ashlee and Chantz 1-2 business days to reply.</p>
        </div>

       <button className={clicked ? "submitBtn animating" : "submitBtn"} onClick={handleSubmit}>
        Submit
       </button>
       <div class="checkmark-container">
         <svg x="0px" y="0px" fill="none" className="checkmark-svg" viewBox="0 0 25 30">
           <path d="M2,19.2C5.9,23.6,9.4,28,9.4,28L23,2" />
         </svg>

       </div>
        <NavLink to="/buyers" exact style={{textDecoration: "none"}}>
        <button className={clicked ? "returnButton" : "return-hidden"}>Return to Buyers Page</button>
        </NavLink>
    </div>
    </form>
  )
}

export default Finalize;