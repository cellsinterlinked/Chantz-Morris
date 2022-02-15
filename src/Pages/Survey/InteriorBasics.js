import React, {useState} from 'react'
import './SurveyStyle.css'

const InteriorBasics = ({interior, setInterior, page, setPage}) => {

  const [error, setError] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (interior.bedroomMinimum === "" || interior.bathroomsMinimum === "" || interior.minSize === "" || interior.maxSize === "") {
      return setError("Please fill out all inputs or write N/A ")
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
      <h1>Interior</h1>
      <div className="text-input-wrapper">
      <label htmlFor="bedroomsMinimum">Minimum number of bedrooms?</label>
      <input
        type="text"
        id="bedroomsMinimum"
        name="bedroomsMinimum"
        value={interior.bedroomsMinimum}
        style={{}}
        onChange={(e) => setInterior({...interior, bedroomsMinimum: e.target.value})}
        />
</div>

<div className="text-input-wrapper">
        <label htmlFor="bathroomsMinimum">Minimum number of bathrooms</label>
        <input
        type="text"
        id="bathroomsMinimum"
        name="bathroomsMinimum"
        value={interior.bathroomsMinimum}
        style={{}}
        onChange={(e) => setInterior({...interior, bathroomsMinimum: e.target.value})}
        />
        </div>

        <div className="text-input-wrapper">
        <label htmlFor="minSize">No less than</label>
        <input
        type="text"
        id="minSize"
        name="minSize"
        value={interior.minSize}
        style={{}}
        onChange={(e) => setInterior({...interior, minSize: e.target.value})}
        />
        <p className="suffix">sq. ft.</p>
</div>
<div className="text-input-wrapper">
        <label htmlFor="maxSize">but no more than</label>
        <input
        type="text"
        id="maxSize"
        name="maxSize"
        value={interior.maxSize}
        style={{}}
        onChange={(e) => setInterior({...interior, maxSize: e.target.value})}
        />
         <p className="suffix">sq. ft.</p>

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

export default InteriorBasics;