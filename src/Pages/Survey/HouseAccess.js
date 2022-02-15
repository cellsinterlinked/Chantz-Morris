import React, { useState } from 'react';
import './SurveyStyle.css'

const HouseAccess = ({ access, setAccess, page, setPage}) => {
  
  const [error, setError] = useState("")

  const handleRadio = (e) => {
    setAccess({ ...access, accessOption: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault()
    if (access.accessOption === "none") {
      return setError("Please check yes or no")
    } else if (access.accessOption === "Yes" && access.accessDetails === "") {
      return setError("Please list details about access needed")
    } else {
      setPage(page + 1)

    }
  }

  const prevHandler = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  return (
  
      <form className="basics-wrapper">
         <div className="fadeContainer">
        <h3 className="extra-label">
          Do you have any physical needs that must be met, such as wheelchair
          access?
        </h3>
        <div className="radio-input-wrapper">
        <input
          type="radio"
          checked={access.accessOption === 'Yes'}
          id="accessYes"
          name="accessYes"
          value="Yes"
          style={{}}
          onChange={handleRadio}
        />
        <label htmlFor="accessYes">Yes</label>

        </div>
        <div className="radio-input-wrapper">
        <input
          type="radio"
          checked={access.accessOption === 'No'}
          id="accessNo"
          name="accessNo"
          value="No"
          style={{}}
          onChange={handleRadio}
        />
        <label htmlFor="accessNo">No</label>


        </div>
        <div className="text-input-wrapper">
        <label htmlFor="accessDetails">If so, specify</label>
        <textarea
          type="text"
          id="accessDetails"
          name="accessDetails"
          value={access.accessDetails}
          style={{}}
          onChange={(e) => setAccess({...access, accessDetails: e.target.value})}
        />
        </div>
        <div className="error_container">
    {error && <p style={{textAlign: "center"}}>{error}</p>}
    </div>

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
  
  );
};

export default HouseAccess;
