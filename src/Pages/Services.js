import React from 'react';
import Footer from '../Nav/Footer';
import NavBar from '../Nav/NavBar';
import './Landing.css';
import './AllPage.css';
import './ForBuyers.css';
import './Services.css';
import { Parallax, Background } from 'react-parallax';
import pic from '../Resources/Services.jpeg';
import { FiCheck } from 'react-icons/fi';

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const Services = () => {
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
            <h1>ACM Property Management, LLC</h1>
          </div>
        </div>
      </Parallax>
      <div className="service-title">
        <h1>Services and Rates</h1>
        <div className="lineBreak" style={{ marginBottom: '1rem' }} />
        <p>
          At ACM Property Management, LLC, transparency and honesty is key. We
          value your time, properties, and business. Here’s what you need to
          know:
        </p>
        <div className="terms-container">
        <p>NO Hidden Fees</p>
        <li>Rest assured there are no sneaky fees lurking around the corner</li>

        </div>
        <br />
        <div className="terms-container">
        <p> NO Contract</p>
        <li>
          ACM Property Management LLC wants landlords and investors to utilize
          their services because they are of value, not because of a locked-in
          contract.
        </li>

        </div>
        <br />
        <div className="terms-container">
        <p> Signed Non-Disclosure Agreements</p>

        <li>
          Our team signs a legally binding Non-Disclosure Agreement with you.
          Trust is key and your business is private, we take it a step further
          to ensure your privacy is maintained and your trust is earned.
        </li>
        </div>
        <p>
          An exceptional service array, paired with a unique rate structure,
          allows ACM Property Management LLC to offer the flexibility landlords
          and investors search for in property managers.{' '}
        </p>
      </div>

      <section className="tableContainer">
        <div className="grid-bold">
          <h1>Basic</h1>
          <div></div>
          <section>
            <h2>8</h2>
            <h3>%</h3>
          </section>
          <p>of monthly rent collected</p>
          <div></div>
          <p className="marginT">Management Fee</p>
        </div>
        <div className="grid-bold">
          <h1>Standard</h1>
          <div></div>
          <section>
            <h2>9</h2>
            <h3>%</h3>
          </section>
          <p>of monthly rent collected</p>
          <div></div>
          <p className="marginT">Management Fee</p>
        </div>
        <div className="grid-bold">
          <h1>Premium</h1>
          <div></div>
          <section>
            <h2>10</h2>
            <h3>%</h3>
          </section>
          <p>of monthly rent collected</p>
          <div></div>
          <p className="marginT">Management Fee</p>
        </div>
        <div className="grid-box top-round">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rent Collections</p>
        </div>
        <div className="grid-box top-round">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rent Collections</p>
        </div>{' '}
        <div className="grid-box top-round">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rent Collections</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Owner and Tenant Portal Access</p>
        </div>{' '}
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Owner and Tenant Portal Access</p>
        </div>{' '}
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Owner and Tenant Portal Access</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rent Initial Property Setup</p>
        </div>{' '}
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rent Initial Property Setup</p>
        </div>{' '}
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rent Initial Property Setup</p>
        </div>
        <div className="grid-box-three blue bottom-round ">
          <div>
            <h1>2</h1>
          </div>
          <p>Choose 2 From Below</p>
        </div>
        <div className="grid-box-three blue bottom-round">
          <div>
            <h1>3</h1>
          </div>
          <p>Choose 3 From Below</p>
        </div>
        <div className="grid-box blue ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>All Included</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Easy Online Payment</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Easy Online Payment</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Easy Online Payment</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Maintenance Management</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Maintenance Management</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Maintenance Management</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move in inspection</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move in inspection</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move in inspection</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move out inspection</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move out inspection</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move out inspection</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Digital Lease Signing</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Digital Lease Signing</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Digital Lease Signing</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Comprehensive Tenant Screening</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Comprehensive Tenant Screening</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Comprehensive Tenant Screening</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Prepared Lease upon request</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Prepared Lease upon request</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Prepared Lease upon request</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Vacancy Listings</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Vacancy Listings</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Vacancy Listings</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Enforcement / Evictions</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Enforcement / Evictions</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Enforcement / Evictions</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>24/7 Emergency Hotline</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>24/7 Emergency Hotline</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>24/7 Emergency Hotline</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Monthly Financial Reports</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Monthly Financial Reports</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Monthly Financial Reports</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Year End Statement</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Year End Statement</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Year End Statement</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Electronic Deposits of Rent Proceeds</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Electronic Deposits of Rent Proceeds</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Electronic Deposits of Rent Proceeds</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Utility Coordination</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Utility Coordination</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Utility Coordination</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Renewal</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Renewal</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Renewal</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rental Market Analysis</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rental Market Analysis</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Rental Market Analysis</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Annual Property Check</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Annual Property Check</p>
        </div>
        <div className="grid-box bottom-round ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Annual Property Check</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
