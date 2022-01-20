import React, {useState} from 'react'
import './SurveyStyle.css'


const HouseLot = ({lot, setLot, page, setPage}) => {



  const handleCheckbox = (e, id) => {
    setLot({...lot, [id]: e.target.checked})
     
  }


  const submitHandler = (e) => {
    e.preventDefault()
    setPage(page + 1)
  }

  const prevHandler = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }

  return(
    <form className="basics-wrapper">
       <div className="fadeContainer">
    <h3 className="extra-label">What do you want the lot to have?</h3>
      <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.extraParking}
        id="extraParking"
        name="extraParking"
        value={lot.extraParking}
        style={{}}
        onChange={(e) => handleCheckbox(e, "extraParking")}
        />
        <label htmlFor="extraParking">Extra Parking</label>
        </div>
        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.fencedYard}
        id="fencedYard"
        name="fencedYard"
        value={lot.fencedYard}
        style={{}}
        onChange={(e) => handleCheckbox(e, "fencedYard")}
        />
        <label htmlFor="fencedYard">Fenced Yard</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.carport}
        id="carport"
        name="carport"
        value={lot.carport}
        style={{}}
        onChange={(e) => handleCheckbox(e, "carport")}
        />
        <label htmlFor="carport">Carport</label>
</div> 
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.pool}
        id="pool"
        name="pool"
        value={lot.pool}
        style={{}}
        onChange={(e) => handleCheckbox(e, "pool")}
        />
        <label htmlFor="pool">Pool</label>
        </div>
        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.largeYard}
        id="largeYard"
        name="largeYard"
        value={lot.largeYard}
        style={{}}
        onChange={(e) => handleCheckbox(e, "largeYard")}
        />
        <label htmlFor="largeYard">Large Yard</label>
        </div>
        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.view}
        id="view"
        name="view"
        value={lot.view}
        style={{}}
        onChange={(e) => handleCheckbox(e, "view")}
        
        />
        <label htmlFor="view">Special View</label>
        </div>
        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.garage}
        id="garage"
        name="garage"
        value={lot.garage}
        style={{}}
        onChange={(e) => handleCheckbox(e, "garage")}
        />
        <label htmlFor="garage">Garage</label>
        </div>
        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.patioDeck}
        id="patioDeck"
        name="patioDeck"
        value={lot.patioDeck}
        style={{}}
        onChange={(e) => handleCheckbox(e, "patioDeck")}
        
        />
        <label htmlFor="patioDeck">Patio/deck</label>
        </div>

 <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.spa}
        id="spa"
        name="spa"
        value={lot.spa}
        style={{}}
        onChange={(e) => handleCheckbox(e, "spa")}
        />
        <label htmlFor="spa">Outdoor spa</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={lot.smallYard}
        id="smallYard"
        name="smallYard"
        value={lot.smallYard}
        style={{}}
        onChange={(e) => handleCheckbox(e, "smallYard")}
        />
        <label htmlFor="smallYard">Small yard</label>
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

export default HouseLot
