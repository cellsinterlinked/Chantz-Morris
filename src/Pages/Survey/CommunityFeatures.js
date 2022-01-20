import React, {useState} from 'react'
import './SurveyStyle.css'

const CommunityFeatures = ({community, setCommunity, page, setPage, finalDataHandler}) => {



  const handleCheckbox = (e, id) => {
    setCommunity({...community, [id]: e.target.checked})
     
  }

  const handleRadio = (e) => {
    setCommunity({ ...community, association: e.target.value });
  };


  const submitHandler = (e) => {
    e.preventDefault()
    setPage(page + 1)
   
  }

  const prevHandler = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  return (
    <form className="basics-wrapper">
      <div className="fadeContainer">
       <h3 style={{marginTop: "4rem"}}className="extra-label">
          Are you interested in living in an area with a homeowner's association?
        </h3>
      <div className="radio-input-wrapper">
        <input
          type="radio"
          checked={community.association === 'Yes'}
          id="associationYes"
          name="associationYes"
          value="Yes"
          style={{}}
          onChange={handleRadio}
        />
        <label htmlFor="associationYes">Yes</label>
        </div>
        <div className="radio-input-wrapper">
        <input
          type="radio"
          checked={community.association === 'No'}
          id="associationNo"
          name="associationNo"
          value="No"
          style={{}}
          onChange={handleRadio}
        />
        <label htmlFor="associationNo">No</label>
        </div>

        <h3 className="extra-label">
          What else do you want in your community?
        </h3>
        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={community.communityPool}
        id="communityPool"
        name="communityPool"
        value={community.communityPool}
        style={{}}
        onChange={(e) => handleCheckbox(e, "communityPool")}
        />
        <label htmlFor="communityPool">Community pool</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={community.golfCourse}
        id="golfCourse"
        name="golfCourse"
        value={community.golfCourse}
        style={{}}
        onChange={(e) => handleCheckbox(e, "golfCourse")}
        />
        <label htmlFor="golfCourse">Golf Course</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={community.basketball}
        id="basketball"
        name="basketball"
        value={community.basketball}
        style={{}}
        onChange={(e) => handleCheckbox(e, "basketball")}
        />
        <label htmlFor="basketball">Basketball court</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={community.tennis}
        id="tennis"
        name="tennis"
        value={community.tennis}
        style={{}}
        onChange={(e) => handleCheckbox(e, "tennis")}
        />
        <label htmlFor="tennis">Tennis court</label>
        </div>

        <div className="checkbox-input-wrapper">

        <input
        type="checkbox"
        checked={community.gated}
        id="gated"
        name="gated"
        value={community.gated}
        style={{}}
        onChange={(e) => handleCheckbox(e, "gated")}
        />
        <label htmlFor="gated">Gated community</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={community.activities}
        id="activities"
        name="activities"
        value={community.activities}
        style={{}}
        onChange={(e) => handleCheckbox(e, "activities")}
        
        />
        <label htmlFor="activities">Clubhouse/activities</label>
        </div>

        <h3 className="extra-label">
          Are there any other special features or needs that you must consider when you're looking for a home?
        </h3>
        <div className="text-input-wrapper">
        <textarea
        type="text"
        id="specialFeatures"
        name="specialFeatures"
        value={community.specialFeatures}
        style={{}}
        onChange={(e) => setCommunity({...community, specialFeatures: e.target.value})}
        />
        </div>
        {/* <label htmlFor="specialFeatures">Townhouse or condo</label> */}

        <div className="survey-button-container">
        <button className="survey-button" onClick={prevHandler}>
        <p>PREVIOUS</p>
      </button>

      <button className="survey-button" onClick={submitHandler}>
        <p>NEXT</p>
      </button>

  </div>

  </div>
    </form>
  )
}

export default CommunityFeatures;