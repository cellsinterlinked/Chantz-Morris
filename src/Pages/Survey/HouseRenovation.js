import React, {useState} from 'react'
import './SurveyStyle.css'


const HouseRenovation = ({renovation, setRenovation, page, setPage}) => {

  

const [error, setError] = useState("")

  const handleRadio = (e) => {
    setRenovation({renovationOption: e.target.value})
     
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (renovation.renovationOption === 'none') {
      return setError("Please select one")
    }
    setPage(page + 1)
  }

  const prevHandler = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }



  return (
    
    <form className="basics-wrapper">
 <div className="fadeContainer">



   
<h3 className="extra-label">How much renovation would you be willing to do?</h3>
        <div className="radio-input-wrapper">

        <input
        type="radio"
        checked={renovation.renovationOption === "Full home renovation"}
        id="fullHome"
        name="fullHome"
        value="Full home renovation"
        style={{}}
        onChange={handleRadio}
        />
        <label htmlFor="fullHome">Full home renovation</label>
        </div>

        <div className="radio-input-wrapper">
        <input
        type="radio"
        checked={renovation.renovationOption === "A little"}
        id="little"
        name="little"
        value="A little"
        style={{}}
        onChange={handleRadio}
        />
        <label htmlFor="little">A little</label>
        </div>

        <div className="radio-input-wrapper">

        <input
        type="radio"
        checked={renovation.renovationOption === "None"}
        id="none"
        name="none"
        value="None"
        style={{}}
        onChange={handleRadio}
        />
        <label htmlFor="none">None</label>
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
        
  )
}

export default HouseRenovation