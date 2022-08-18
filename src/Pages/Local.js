import React, { useState } from 'react';
import Footer from '../Nav/Footer';
import NavBar from '../Nav/NavBar';
import './Landing.css';
import './AllPage.css';
import './ForBuyers.css';
import './Local.css';
import { Parallax, Background } from 'react-parallax';
import pic from '../Resources/columbus.jpeg';
import map from '../Resources/Indiana.jpg';
import { BiArrowBack } from 'react-icons/bi';

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const Local = () => {
  const [county, setCounty] = useState();

  console.log(county);

  return (
    <div className="landingContainer">
      <Parallax className="testBanner" strength={600}>
        <Background className="custom-bg">
          <div className="fuckImage_container">
            <img src={pic} alt="fill murray" className="fuckImage" />
            <div className="image-cover"></div>
          </div>
        </Background>

        <div className="height-controller">
          <NavBar />
          <div style={introStyle} className="pageHead">
            <h1>Local Services</h1>
          </div>
        </div>
      </Parallax>

      {!county && (
        <p className="map-instruct">
          Using the map below, click to find a list of local services, ranging
          from lenders to inspectors to maintenance. This is NOT an
          all-encompassing list, and we encourage you to thoroughly research
          companies.
        </p>
      )}
      {/* {!county && (
        <div
          className="lineBreak"
          style={{ marginBottom: '3rem', maxWidth: '45rem' }}
        />
      )} */}

      <section className={!county ? 'map-container' : 'map-container-hidden'}>
        <img alt="indiana map" src={map} />
        <p id="jennings" onClick={() => setCounty('jennings')}>
          Jennings
        </p>
        <p id="jackson" onClick={() => setCounty('jackson')}>
          Jackson
        </p>
        <p id="bartholemew" onClick={() => setCounty('bartholemew')}>
          Bartholemew
        </p>
        <p id="jefferson" onClick={() => setCounty('jefferson')}>
          Jefferson
        </p>
      </section>

      {county === 'jennings' && (
        <div className="buyerLinkBox">
          <div className="back-map-container">
            <button className="back-map-button" onClick={() => setCounty()}>
              <BiArrowBack className="back-map-arrow" />
              BACK TO MAP
            </button>
          </div>
          <h1>Jennings County</h1>
          <div
            className="lineBreak"
            style={{ marginBottom: '3rem', maxWidth: '45rem' }}
          />
          <h3 className="local-head">Lenders</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.bankatfirst.com/content/first-financial-bank/home.html?utm_source=yext&amp;utm_medium=locallisting&amp;utm_campaign=listing_all"
          >
            First Financial Bank
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.oldnational.com/bank-branch/1420-n-state-st-north-vernon-indiana"
          >
            Old National Bank
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.marinerfinance.com/locations/indiana/mariner-finance-location-in-north-vernon-in/?utm_source=google&amp;utm_medium=gmb_directories&amp;utm_campaign=directories"
          >
            Mariner Finance{' '}
          </a>

          <h3 className="local-head">Inspectors</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.kloekerinspections.com/"
          >
            Kloeker Inspections
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="http://thehousecriticllc.com/"
          >
            The House Critic, LLC
          </a>
          <h3 className="local-head">Title Companies</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.northvernonabstract.com/"
          >
            North Vernon Abstract
          </a>
          <a rel="noreferrer" target="_blank" href="https://qualitytitle.com/">
            Quality Title
          </a>
          <h3 className="local-head">HVAC</h3>
          <a rel="noreferrer" target="_blank" href="http://aironehvac.com/">
            Air One Heating and Cooling
          </a>
          <a rel="noreferrer" target="_blank" href="https://hallheating.net/">
            Hall Heating and Air Conditioning
          </a>
          <h3 className="local-head">Insurance Companies</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.laymaninsurance.com/"
          >
            Layman Hummel Insurance
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.isubright.com/">
            ISU - Bright Agency
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.coveredbymartin.com/meet-our-team"
          >
            Martin Insurance
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.infarmbureau.com/offices/Jennings/North%20Vernon"
          >
            Indiana Farm Bureau Insurance
          </a>
          <h3 className="local-head">Electricians</h3>
          <p className="no-link">Prime Electric Inc: (812) 346-4882</p>
          <a rel="noreferrer" target="_blank" href="http://www.biehleinc.com/">
            Biehle Electric
          </a>
          <h3 className="local-head">
            Contractors/ Home Maintenance and Repair
          </h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://down-home-handyman.business.site/"
          >
            Down Home Handyman
          </a>
          <p className="no-link">
            Woodall's Roofing & Home Improvement, Inc: (812) 346-8039
          </p>

          {/* <div
            className="lineBreak"
            style={{ marginBottom: '3rem', maxWidth: '45rem' }}
          /> */}
        </div>
      )}

      {county === 'jefferson' && (
        <div className="buyerLinkBox">
          <div className="back-map-container">
            <button className="back-map-button" onClick={() => setCounty()}>
              <BiArrowBack className="back-map-arrow" />
              BACK TO MAP
            </button>
          </div>

          <h1>Jefferson County</h1>
          <div
            className="lineBreak"
            style={{ marginBottom: '3rem', maxWidth: '45rem' }}
          />
          <h3 className="local-head">Lenders</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://genevafi.com/rising-sun-branch"
          >
            Geneva Financial
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.centra.org/?utm_source=gmb&amp;utm_medium=organic&amp;utm_campaign=madison&amp;y_source=1_MTU1NDU1NDgtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl"
          >
            Centra Credit Union{' '}
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://germanamerican.com/locations/IN/Madison/430-clifty-drive/"
          >
            German American Bank{' '}
          </a>

          <h3 className="local-head">Inspectors</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.ffhinspections.com/services"
          >
            Foundation First Home Inspections
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://homepro4inspect.com/"
          >
            Home Pro Inspections
          </a>
          <h3 className="local-head">Title Companies</h3>
          <a rel="noreferrer" target="_blank" href="https://www.jclt.com/">
            Jefferson County Land Title
          </a>
          <a rel="noreferrer" target="_blank" href="https://nntg.com/">
            Near North Title Group
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://madisonlandtitle.com/"
          >
            Madison Land Title
          </a>
          <h3 className="local-head">HVAC</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.crawleyhvac.com/"
          >
            Crawley Heating & Cooling LLC.
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.crawleyhvac.com/"
          >
            OOHVACS LLC.
          </a>
          <h3 className="local-head">Insurance Companies</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.laymaninsurance.com/"
          >
            Layman Hummel Insurance
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.rlsinsurancegroup.com/"
          >
            RLS Insurance Agency, Inc
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="http://mysecurityinsurance.com/"
          >
            Security Insurance Agency, Inc
          </a>
          <h3 className="local-head">Electricians</h3>
          <p className="no-link">Brighter Way Electric; (812)-803-3753</p>
          <p className="no-link">3C Electrical LLC; 812-571-0837</p>
          <h3 className="local-head">
            Contractors/ Home Maintenance and Repair
          </h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://can-do-maintenance-corporate-office.business.site/"
          >
            Can Do Maintenance
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://goins-lawn-care.business.site/?utm_source=gmb&utm_medium=referral"
          >
            Goins Lawncare/Handyman Services LLC
          </a>
          {/* <div
            className="lineBreak"
            style={{ marginBottom: '3rem', maxWidth: '45rem' }}
          /> */}
        </div>
      )}

      {county === 'jackson' && (
        <div className="buyerLinkBox">
          <div className="back-map-container">
            <button className="back-map-button" onClick={() => setCounty()}>
              <BiArrowBack className="back-map-arrow" />
              BACK TO MAP
            </button>
          </div>
          <h1>Jackson County</h1>
          <div
            className="lineBreak"
            style={{ marginBottom: '3rem', maxWidth: '45rem' }}
          />
          <h3 className="local-head">Lenders</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.bawfg.com/branch-list/"
          >
            Bailey & Wood Mortgage Lender
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://integritymtgs.com/seymour-in-loan-officers/"
          >
            Integrity Mortgage Group
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.jcbank.com/">
            Jackson County Bank
          </a>
          <h3 className="local-head">Inspectors</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.kloekerinspections.com/"
          >
            Kloeker Inspections
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.greathomeinspector.net/index.html"
          >
            Excellent Home Inspection Services
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://homepro4inspect.com/"
          >
            Home Pro Inspections
          </a>
          <h3 className="local-head">Title Companies</h3>
          <a rel="noreferrer" target="_blank" href="https://qualitytitle.com/">
            Quality Title
          </a>
          <a rel="noreferrer" target="_blank" href="http://dandeabstract.com/">
            D & E Abstract and Title Co., LLC
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.northvernonabstract.com/"
          >
            North Vernon Abstract
          </a>
          <h3 className="local-head">HVAC</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.reliablecomfort.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB%20Listing%20Seymour"
          >
            Reliable Comfort
          </a>
          <a rel="noreferrer" target="_blank" href="http://beachhvacllc.com/">
            Beach Heating & Air Conditioning
          </a>
          <h3 className="local-head">Insurance Companies</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.infarmbureau.com/offices/Jackson/Seymour"
          >
            Indiana Farm Bureau Insurance
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.shepherdins.com/find-us/"
          >
            Shepherd Insurance
          </a>

          <h3 className="local-head">Electricians</h3>

          <a rel="noreferrer" target="_blank" href="https://bodeelectric.com/">
            Bode Electric
          </a>
          <a rel="noreferrer" target="_blank" href="http://www.biehleinc.com/">
            Biehle Electric
          </a>
          <h3 className="local-head">
            Contractors/ Home Maintenance and Repair
          </h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="http://schwartzcontracting.com/"
          >
            Rob & Theresa Schwartz Contracting
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://home-remodeling-service.business.site/?utm_source=gmb&utm_medium=referral#details"
          >
            Home Remodeling Service
          </a>

          {/* <div
            className="lineBreak"
            style={{ marginBottom: '3rem', maxWidth: '45rem' }}
          /> */}
        </div>
      )}

      {county === 'bartholemew' && (
        <div className="buyerLinkBox">
          <div className="back-map-container">
            <button className="back-map-button" onClick={() => setCounty()}>
              <BiArrowBack className="back-map-arrow" />
              BACK TO MAP
            </button>
          </div>
          <h1>Bartholemew County</h1>
          <div
            className="lineBreak"
            style={{ marginBottom: '3rem', maxWidth: '45rem' }}
          />
          <h3 className="local-head">Lenders</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.bawfg.com/branch-list/"
          >
            Bailey & Wood Mortgage Lender
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.hallmarkhomemortgage.com/meet-our-team/columbus-in"
          >
            Hallmark Home Mortgage
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.ruoff.com/lending-centers/columbus"
          >
            Ruoff Mortgage
          </a>
          {/* <h1>GreenWood</h1>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.5stonesmortgage.com/"
        >
          Five Stone Mortgage
        </a> */}

          <h3 className="local-head">Inspectors</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.homeinspekt.com/"
          >
            Inspekt
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.accuratein.com/"
          >
            Accurate Home Inspections
          </a>
          <h3 className="local-head">Title Companies</h3>
          <a rel="noreferrer" target="_blank" href="https://qualitytitle.com/">
            Quality Title
          </a>
          <a rel="noreferrer" target="_blank" href="https://stindy.com/">
            Security Title Services
          </a>
          <h3 className="local-head">HVAC</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://advantageheatingandair.com/"
          >
            Advantage Heating and Air Inc
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.reliablecomfort.com/?utm_source=google&utm_medium=organic&utm_campaign=GMB%20Listing%20Columbus"
          >
            Reliable Comfort
          </a>
          <h3 className="local-head">Insurance Companies</h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.zellerinsurance.com/coverage/"
          >
            Zeller Insurance, LLC
          </a>
          <a rel="noreferrer" target="_blank" href="https://www.amfam.com/">
            American Family Insurance
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.infarmbureau.com/"
          >
            Indiana Farm Bureau Insurance
          </a>
          <h3 className="local-head">Electricians</h3>

          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.cmrelectric.net/residential/"
          >
            CMR Electric
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://waynemeyerelectric.com/"
          >
            Wayne Meyer Electric, LLC
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.cmrelectric.net/residential/"
          >
            HNF Electric
          </a>
          <h3 className="local-head">
            Contractors/ Home Maintenance and Repair
          </h3>
          <a
            rel="noreferrer"
            target="_blank"
            href="http://mmresidentialmaintenance.com/"
          >
            M&M Residential Maintenance
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://rbr-construction-llc.business.site/?utm_source=gmb&utm_medium=referral"
          >
            RBR Construction LLC
          </a>
          <a rel="noreferrer" target="_blank" href="https://jhjhandyman.com/">
            JHJ Handyman
          </a>

          {/* <div
            className="lineBreak"
            style={{ marginBottom: '3rem', maxWidth: '45rem' }}
          /> */}
        </div>
      )}

      {/* <a
            rel="noreferrer"
            target="_blank"
            href=""
          >
           name
          </a> */}

      <Footer />
    </div>
  );
};

export default Local;
