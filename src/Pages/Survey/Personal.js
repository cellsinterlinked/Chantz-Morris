import React, {useState} from 'react'
import './SurveyStyle.css'
import validator from 'validator'

const Personal = ({personal, setPersonal, setPage, page}) => {

const [error, setError] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if(personal.name.length < 2) {
      return setError("Please enter your full name.")
    } else if (personal.address.length < 5) {
      return setError("Please put full address.")
    } else if(personal.phone.length < 10) {
      return setError("Please list a 10 digit phone number to reach you.")
    } else if (!validator.isEmail(personal.email)) {
      return setError("Please leave us a valid email address.")
    } else {
      setPage(page + 1)

    }
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

<div className="error_container">
    {error && <p>{error}</p>}
    </div>

    </div>
    <div className="survey-button-container">
      <button className="survey-button" onClick={submitHandler} type="submit">
        <p>NEXT</p>
      </button>

    </div>
    </div>
  </form>
  )
}

export default Personal;