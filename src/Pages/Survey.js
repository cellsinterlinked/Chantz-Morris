import React, { useState } from 'react';
import HouseKind from './Survey/HouseKind';
import HouseStyle from './Survey/HouseStyle';
import HouseRenovation from './Survey/HouseRenovation';
import Personal from './Survey/Personal';
import HouseBasics from './Survey/HouseBasics';
import HouseAccess from './Survey/HouseAccess';
import HouseAnimals from './Survey/HouseAnimals';
import HouseLot from './Survey/HouseLot';
import InteriorBasics from './Survey/InteriorBasics';
import InteriorFeatures from './Survey/InteriorFeatures';
import CommunityFeatures from './Survey/CommunityFeatures';
import './Survey.css';
import Img from '../Resources/surveyBackground.jpeg';
import emailjs from 'emailjs-com';
import Axios from 'axios';
import NavBar from '../Nav/NavBar';
import Finalize from './Survey/Finalize';
import Modal from '../Reusable/Modals/Modal';
import { NavLink } from 'react-router-dom';

const Survey = () => {
  const [personal, setPersonal] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const [basics, setBasics] = useState({
    part: '',
    range: { high: '', low: '' },
    school: '',
    old: '',
  });

  const [kind, setKind] = useState({
    oneStory: false,
    twoStory: false,
    splitFoyer: false,
    biLevel: false,
    triLevel: false,
    mobileHome: false,
    condo: false,
  });

  const [style, setStyle] = useState({
    contemporary: false,
    traditional: false,
    southwestern: false,
    colonial: false,
    noPreference: false,
  });

  const [renovation, setRenovation] = useState({
    renovationOption: 'none',
  });

  const [access, setAccess] = useState({
    accessOption: 'none',
    accessDetails: '',
  });

  const [animals, setAnimals] = useState({
    animalOption: 'none',
    animalDetails: '',
  });

  const [lot, setLot] = useState({
    extraParking: false,
    fencedYard: false,
    carport: false,
    pool: false,
    largeYard: false,
    view: false,
    garage: false,
    patioDeck: false,
    spa: false,
    smallYard: false,
  });

  const [interior, setInterior] = useState({
    bedroomsMinimum: '',
    bathroomsMinimum: '',
    minSize: '',
    maxSize: '',
  });

  const [interiorFeatures, setInteriorFeatures] = useState({
    airConditioning: false,
    hardwoodFloors: false,
    seperateDining: false,
    familyRoom: false,
    seperateDen: false,
    seperateLaundry: false,
    noSteps: false,
    windows: false,
    other: false,
    carpet: false,
    kitchen: false,
    formalRoom: false,
    greatRoom: false,
    basement: false,
    fireplace: false,
    intSpa: false,
    ingroundPool: false,
    intDetails: '',
  });

  const [community, setCommunity] = useState({
    association: 'false',
    communityPool: false,
    golfCourse: false,
    basketball: false,
    tennis: false,
    gated: false,
    activities: false,
    specialFeatures: '',
  });

  const [page, setPage] = useState(12);

  const [clicked, setClicked] = useState(false)

  const [error, setError] = useState(null)

  const confirmError = () => {
    setError(null)
  }

  
  const finalDataHandler = () => {
    // setClicked(true)
    var data = {
      service_id: 'service_4rkj86x',
      template_id: 'template_0apq26u',
      user_id: 'user_hbc7uXk6VzJ9iJYYOUNTt',
      template_params: {
        ...personal,
        ...basics,
        ...kind,
        ...style,
        ...renovation,
        ...access,
        ...animals,
        ...lot,
        ...interior,
        ...interiorFeatures,
        ...community,
        highRange: basics.range.high,
        lowRange: basics.range.low,
      }
    };
    Axios.post('https://api.emailjs.com/api/v1.0/email/send', data)
    .then(response => {
      setClicked(true)
      console.log(response)
    })
    .catch(error => {
      console.log(error)
      setError(error)
    })
  };

  return (
    <div className="survey-wrapper">
      <Modal
        show={error}
        onCancel={confirmError}
        header="Oops, there was an error! Please try again later. "
        footerClass="deleteFooter"
        footer={
          <>
          <button onClick={confirmError}>
          <NavLink to="/buyers" exact style={{ textDecoration: 'none' }}>
          <p>OK</p>
          </NavLink>
          </button> 
          </>
        }
        ></Modal>
      <div className={page === 10 || page === 11 ? "survey-backdrop-long" : "survey-backdrop"}>
        <img src={Img} about="alt" />
      </div>
     <NavBar navStyle={"navChange"} linkStyle={"navChange"} menuStyle={"navChange"} dark={"dark"} />
      {page === 1 && (
        <Personal
          personal={personal}
          setPersonal={setPersonal}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 2 && (
        <HouseBasics
          basics={basics}
          setBasics={setBasics}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 3 && (
        <HouseKind
          setKind={setKind}
          kind={kind}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 4 && (
        <HouseStyle
          setStyle={setStyle}
          style={style}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 5 && (
        <HouseRenovation
          setRenovation={setRenovation}
          renovation={renovation}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 6 && (
        <HouseAccess
          setAccess={setAccess}
          access={access}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 7 && (
        <HouseAnimals
          setAnimals={setAnimals}
          animals={animals}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 8 && (
        <HouseLot setLot={setLot} lot={lot} setPage={setPage} page={page} />
      )}

      {page === 9 && (
        <InteriorBasics
          setInterior={setInterior}
          interior={interior}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 10 && (
        <InteriorFeatures
          setInteriorFeatures={setInteriorFeatures}
          interiorFeatures={interiorFeatures}
          setPage={setPage}
          page={page}
        />
      )}

      {page === 11 && (
        <CommunityFeatures
          setCommunity={setCommunity}
          community={community}
          setPage={setPage}
          page={page}
          finalDataHandler={finalDataHandler}
        />
      )}

      {page === 12 && (
        <Finalize clicked={clicked} setClicked={setClicked} finalDataHandler={finalDataHandler}/>
      )}
    </div>
  );
};

export default Survey;
