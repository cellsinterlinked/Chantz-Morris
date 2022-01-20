import React, { useState } from 'react';
import './SurveyStyle.css'

const HouseAnimals = ({ animals, setAnimals, page, setPage }) => {
 

  const handleRadio = (e) => {
    setAnimals({ ...animals, animalOption: e.target.value });
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
        <h3 className="extra-label">
          DO you have anmials that will require special facilities?
        </h3>
        <div className="radio-input-wrapper">

        <input
          type="radio"
          checked={animals.animalOption === 'Yes'}
          id="animalsYes"
          name="animalsYes"
          value="Yes"
          style={{}}
          onChange={handleRadio}
        />
        <label htmlFor="animalsYes">Yes</label>
        </div>
        <div className="radio-input-wrapper">
        <input
          type="radio"
          checked={animals.animalsOption === 'No'}
          id="animalsNo"
          name="animalsNo"
          value="No"
          style={{}}
          onChange={handleRadio}
        />
        <label htmlFor="animalsNo">No</label>
        </div>
        <div className="text-input-wrapper">
        <label htmlFor="animalsDetails">If so, specify</label>
        <textarea
          type="text"
          id="animalsDetails"
          name="animalsDetails"
          value={animals.animalDetails}
          style={{}}
          onChange={(e) => setAnimals({ ...animals, animalDetails: e.target.value })}
        />
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

export default HouseAnimals;
