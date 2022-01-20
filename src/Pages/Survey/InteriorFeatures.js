import React, {useState} from 'react'
import './SurveyStyle.css'


const InteriorFeatures = ({interiorFeatures, setInteriorFeatures, page, setPage}) => {

 






  const handleCheckbox = (e, id) => {
    setInteriorFeatures({...interiorFeatures, [id]: e.target.checked})
     
  }

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
<h3 style={{marginTop: "4rem"}}className="extra-label">What features would you like your house to have?</h3>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.airConditioning}
        id="airConditioning"
        name="airConditioning"
        value={interiorFeatures.airConditioning}
        style={{}}
        onChange={(e) => handleCheckbox(e, "airConditioning")}
        />
        <label htmlFor="airConditioning">Air Conditioning</label>
        </div>

      
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.hardwoodFloors}
        id="hardwoodFloors"
        name="hardwoodFloors"
        value={interiorFeatures.hardwoodFloors}
        style={{}}
        onChange={(e) => handleCheckbox(e, "hardwoodFloors")}
        />
        <label htmlFor="hardwoodFloors">Hardwood floors</label>
        </div>  

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.seperateDining}
        id="seperateDining"
        name="seperateDining"
        value={interiorFeatures.seperateDining}
        style={{}}
        onChange={(e) => handleCheckbox(e, "seperateDining")}
        />
        <label htmlFor="seperateDining">Seperate dining room</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.familyRoom}
        id="familyRoom"
        name="familyRoom"
        value={interiorFeatures.familyRoom}
        style={{}}
        onChange={(e) => handleCheckbox(e, "familyRoom")}
        />
        <label htmlFor="familyRoom">Family room</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.seperateDen}
        id="seperateDen"
        name="seperateDen"
        value={interiorFeatures.seperateDen}
        style={{}}
        onChange={(e) => handleCheckbox(e, "seperateDen")}
        />
        <label htmlFor="seperateDen">Seperate den/ library</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.seperateLaundry}
        id="seperateLaundry"
        name="seperateLaundry"
        value={interiorFeatures.seperateLaundry}
        style={{}}
        onChange={(e) => handleCheckbox(e, "seperateLaundry")}
        
        />
        <label htmlFor="seperateLaundry">Seperate laundry room</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.noSteps}
        id="noSteps"
        name="noSteps"
        value={interiorFeatures.noSteps}
        style={{}}
        onChange={(e) => handleCheckbox(e, "noSteps")}
        />
        <label htmlFor="noSteps">No interior steps</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.windows}
        id="windows"
        name="windows"
        value={interiorFeatures.windows}
        style={{}}
        onChange={(e) => handleCheckbox(e, "windows")}
        />
        <label htmlFor="windows">Lots of windows</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.carpet}
        id="carpet"
        name="carpet"
        value={interiorFeatures.carpet}
        style={{}}
        onChange={(e) => handleCheckbox(e, "carpet")}
        />
        <label htmlFor="carpet">Wall-to-wall carpet</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.kitchen}
        id="kitchen"
        name="kitchen"
        value={interiorFeatures.kitchen}
        style={{}}
        onChange={(e) => handleCheckbox(e, "kitchen")}
        />
        <label htmlFor="kitchen">Eat-in kitchen</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.formalRoom}
        id="formalRoom"
        name="formalRoom"
        value={interiorFeatures.formalRoom}
        style={{}}
        onChange={(e) => handleCheckbox(e, "formalRoom")}
        />
        <label htmlFor="formalRoom">Formal living room</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.greatRoom}
        id="greatRoom"
        name="greatRoom"
        value={interiorFeatures.greatRoom}
        style={{}}
        onChange={(e) => handleCheckbox(e, "greatRoom")}
        />
        <label htmlFor="greatRoom">Greatroom</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.basement}
        id="basement"
        name="basement"
        value={interiorFeatures.basement}
        style={{}}
        onChange={(e) => handleCheckbox(e, "basement")}
        
        />
        <label htmlFor="basement">Basement</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.fireplace}
        id="fireplace"
        name="fireplace"
        value={interiorFeatures.fireplace}
        style={{}}
        onChange={(e) => handleCheckbox(e, "fireplace")}
        />
        <label htmlFor="fireplace">Fireplace</label>
</div>

<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.intSpa}
        id="intSpa"
        name="intSpa"
        value={interiorFeatures.intSpa}
        style={{}}
        onChange={(e) => handleCheckbox(e, "intSpa")}
        />
        <label htmlFor="spa">Spa in bathroom</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.ingroundPool}
        id="ingroundPool"
        name="ingroundPool"
        value={interiorFeatures.ingroundPool}
        style={{}}
        onChange={(e) => handleCheckbox(e, "ingroundPool")}
        
        />
        <label htmlFor="ingroundPool">Inground pool</label>
</div>
<div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={interiorFeatures.other}
        id="other"
        name="other"
        value={interiorFeatures.other}
        style={{}}
        onChange={(e) => handleCheckbox(e, "other")}
        />
        <label htmlFor="other">Other</label>
</div>
<div className="text-input-wrapper">
        <label htmlFor="condo">List others below</label>
        <textarea
        type="text"
        id="intDetails"
        name="intDetails"
        value={interiorFeatures.intDetails}
        style={{}}
        onChange={(e) => setInteriorFeatures({...interiorFeatures, intDetails: e.target.value})}
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

  )
}
export default InteriorFeatures

