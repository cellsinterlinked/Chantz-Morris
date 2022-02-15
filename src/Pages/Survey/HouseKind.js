import React, {useState} from 'react'
import './SurveyStyle.css'


const HouseKind = ({kind, setKind, page, setPage}) => {

 const [error, setError] = useState("")



  const handleCheckbox = (e, id) => {
    setKind({...kind, [id]: e.target.checked})
     
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (Object.values(kind).indexOf(true) > -1) {
      console.log("At least one is selected");
      setPage(page + 1)
   } else {
     return setError("Please check the box for at least one kind of house")
   }

  }

  const prevHandler = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }





  return (
    <form className="basics-wrapper">
       <div className="fadeContainer">
<h3 style={{marginBottom: "2rem"}} className="extra-label">What kind of houses would you be willing to see?</h3>

        <div className="checkbox-input-wrapper">

        <input
        type="checkbox"
        checked={kind.oneStory}
        id="oneStory"
        name="oneStory"
        value={kind.oneStory}
        style={{}}
        onChange={(e) => handleCheckbox(e, "oneStory")}
        />
        <label htmlFor="oneStory">One Story</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={kind.twoStory}
        id="twoStory"
        name="twoStory"
        value={kind.twoStory}
        style={{}}
        onChange={(e) => handleCheckbox(e, "twoStory")}
        />
        <label htmlFor="twoStory">Two Story</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={kind.splitFoyer}
        id="splitFoyer"
        name="splitFoyer"
        value={kind.splitFoyer}
        style={{}}
        onChange={(e) => handleCheckbox(e, "splitFoyer")}
        />
        <label htmlFor="splitFoyer">Split Foyer</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={kind.biLevel}
        id="biLevel"
        name="biLevel"
        value={kind.biLevel}
        style={{}}
        onChange={(e) => handleCheckbox(e, "biLevel")}
        />
        <label htmlFor="biLevel">Bi-level</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={kind.triLevel}
        id="triLevel"
        name="triLevel"
        value={kind.triLevel}
        style={{}}
        onChange={(e) => handleCheckbox(e, "triLevel")}
        />
        <label htmlFor="triLevel">Tri-level</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={kind.mobileHome}
        id="mobileHome"
        name="mobileHome"
        value={kind.mobileHome}
        style={{}}
        onChange={(e) => handleCheckbox(e, "mobileHome")}
        
        />
        <label htmlFor="mobileHome">Mobile Home</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={kind.condo}
        id="condo"
        name="condo"
        value={kind.condo}
        style={{}}
        onChange={(e) => handleCheckbox(e, "condo")}
        />
        <label htmlFor="condo">Townhouse or condo</label>
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
export default HouseKind

