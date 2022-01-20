import React, {useState} from 'react'
import './SurveyStyle.css'

const HouseBasics = ({basics, setBasics, page, setPage}) => {


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
      <h1>The Basics</h1>
      <div className="text-input-wrapper">
        <label htmlFor="part">What part of town do you want to live in?</label>
      <input
        type="text"
        id="part"
        name="part"
        value={basics.part}
        style={{}}
        onChange={(e) => setBasics({...basics, part: e.target.value})}
        />
        </div>

        <h3 className="extra-label">What is your price range?</h3>
        <div className="text-input-wrapper">
          <label htmlFor="rangeHigh">No higher than:</label>
        <input
        type="text"
        id="rangeHigh"
        name="rangeHigh"
        value={basics.range.high}
        style={{}}
        onChange={(e) => setBasics({...basics, range: {...basics.range, high: e.target.value}})}
        />
        </div>

        <div className="text-input-wrapper">
          <label htmlFor="rangelow">No lower than:</label>
        <input
        type="text"
        id="rangelow"
        name="rangelow"
        value={basics.range.low}
        style={{}}
        onChange={(e) => setBasics({...basics, range: {...basics.range, low: e.target.value}})}
        />
        </div>

        <div className="text-input-wrapper">
          <label htmlFor="school">Are schools a factor and if so, what do you need to take into consideration (specific school system, within walking distance, etc.)</label>
        <input
        type="text"
        id="school"
        name="school"
        value={basics.school}
        style={{}}
        onChange={(e) => setBasics({...basics, school: e.target.value})}
        />
        </div>

        <div className="text-input-wrapper">
          <label htmlFor="old">Do you want an older home or a newer home?</label>
        <input
        type="text"
        id="old"
        name="old"
        value={basics.old}
        style={{}}
        onChange={(e) => setBasics({...basics, old: e.target.value})}
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

export default HouseBasics