import React, {useState} from 'react'
import './SurveyStyle.css'

const Personal = ({personal, setPersonal, setPage, page}) => {



  const submitHandler = (e) => {
    e.preventDefault()
    setPage(page + 1)
  }


  return (
    <form className="basics-wrapper">
      <div className="fadeContainer">
      <h1>Homebuying Wishlist</h1>
      <div className="text-input-wrapper">
      <label htmlFor="name">Full Name</label>
    <input
    type="text"
    id="name"
    name="name"
    value={personal.name}
    style={{}}
    onChange={(e) => setPersonal({...personal, name: e.target.value})}
    />

      </div>
      <div className="text-input-wrapper">
<label htmlFor="address">Address</label>
    <input
    type="text"
    id="address"
    name="address"
    value={personal.address}
    style={{}}
    onChange={(e) => setPersonal({...personal, address: e.target.value})}
    />
    </div>

    <div className="text-input-wrapper">

<label htmlFor="phone">Phone Number</label>
    <input
    type="text"
    id="phone"
    name="phone"
    value={personal.phone}
    style={{}}
    onChange={(e) => setPersonal({...personal, phone: e.target.value})}
    />
    </div>
    <div className="text-input-wrapper">
<label htmlFor="surveyEmail">Email</label>
    <input
    type="text"
    id="surveyEmail"
    name="surveyEmail"
    value={personal.email}
    style={{}}
    onChange={(e) => setPersonal({...personal, email: e.target.value})}
    />
    </div>
    <div className="survey-button-container">
      <button className="survey-button" onClick={submitHandler}>
        <p>NEXT</p>
      </button>

    </div>
    </div>
  </form>
  )
}

export default Personal;