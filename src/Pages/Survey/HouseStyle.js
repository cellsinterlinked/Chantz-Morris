import React, {useState} from 'react'
import './SurveyStyle.css'


const HouseStyle = ({style, setStyle, page, setPage}) => {


const [error, setError] = useState("")


  const handleCheckbox = (e, id) => {
    setStyle({...style, [id]: e.target.checked})
     
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (Object.values(style).indexOf(true) > -1) {
      console.log("At least one is selected");
      setPage(page + 1)
   } else {
     return setError("Please check the box for at least one kind of style")
   }
  
  }

  const prevHandler = (e) => {
    e.preventDefault()
    setPage(page - 1)
  }




  return (
    <form className="basics-wrapper">
       <div className="fadeContainer">
<h3 className="extra-label">What style of house appeals to you?</h3>

<div className="checkbox-input-wrapper">

        <input
        type="checkbox"
        checked={style.contemporary}
        id="contemporary"
        name="contemporary"
        value={style.contemporary}
        style={{}}
        onChange={(e) => handleCheckbox(e, "contemporary")}
        />
        <label htmlFor="contemporary">Contemporary</label>
        </div>
        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={style.traditional}
        id="traditional"
        name="traditional"
        value={style.traditional}
        style={{}}
        onChange={(e) => handleCheckbox(e, "traditional")}
        />
        <label htmlFor="traditional">Traditional</label>
        </div>
        <div className="checkbox-input-wrapper">

        <input
        type="checkbox"
        checked={style.southwestern}
        id="southwestern"
        name="southwestern"
        value={style.southwestern}
        style={{}}
        onChange={(e) => handleCheckbox(e, "southwestern")}
        />
        <label htmlFor="southwestern">Southwestern</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={style.colonial}
        id="colonial"
        name="colonial"
        value={style.colonial}
        style={{}}
        onChange={(e) => handleCheckbox(e, "colonial")}
        />
        <label htmlFor="colonial">Colonial</label>
        </div>

        <div className="checkbox-input-wrapper">
        <input
        type="checkbox"
        checked={style.noPreference}
        id="noPreference"
        name="noPreference"
        value={style.noPreference}
        style={{}}
        onChange={(e) => handleCheckbox(e, "noPreference")}
        />
        <label htmlFor="noPreference">No preference</label>
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
export default HouseStyle

