import React, { useState } from 'react';
import Footer from '../Nav/Footer';
import NavBar from '../Nav/NavBar';
import './Landing.css';
import './AllPage.css';
import './ForBuyers.css';
import './Services.css';
import { Parallax, Background } from 'react-parallax';
import pic from '../Resources/Services.jpeg';
import { FiCheck } from 'react-icons/fi';
import Modal from '../Nav/VideoModal';

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
  const [video1Active, setVideo1Active] = useState(false);
  const [video2Active, setVideo2Active] = useState(false);
  const video1Toggle = () => {
    setVideo1Active(true);
  };
  const video2Toggle = () => {
    setVideo2Active(true);
  };

  const videoCancel = () => {
    setVideo2Active(false);
    setVideo1Active(false);
  };

  return (
    <div className="landingContainer">
      {video1Active && (
        <Modal
          video="https://res.cloudinary.com/acm-property-management/video/upload/v1660852994/Tenant_Portal_qfinxk.mp4"
          show={video1Active === true}
          onCancel={videoCancel}
        />
      )}
      {video2Active && (
        <Modal
          video="https://res.cloudinary.com/acm-property-management/video/upload/v1660852970/Owner_Portal_oku2dx.mp4"
          show={video2Active === true}
          onCancel={videoCancel}
        />
      )}
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
          <li>
            Rest assured there are no sneaky fees lurking around the corner
          </li>
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
        <br />
        <div className="terms-container">
          <p> Access to Professional Software</p>

          <li>
            We want the best for you, your tenants, and us. Because of this, we use the industry's best property management software solution.
          </li>
          <div className="videoWrapper">
            <div className="mediaWrapper">
            <p>Tenant Portal Demonstration</p>
            <div className="videoThumb">
            <img className="thumb" alt="" src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1660872263/Realty/Tentant_fwugp1.png" ></img>
            <button onClick={video1Toggle} className="playButton">
            <div className="triangle">

            </div>
            </button>
            </div>
            </div>
            <div className="mediaWrapper">
            <p>Owner Portal Demonstration</p>
            <div className="videoThumb">
            <img className="thumb" alt="" src="https://res.cloudinary.com/dbnapmpvm/image/upload/v1660872263/Realty/Owner_nsjvx6.png" ></img>

            <button className="playButton" onClick={video2Toggle}>
              <div className="triangle">

              </div>
            </button>
            </div>
            </div>


          </div>
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
            <h2>6</h2>
            <h3>%</h3>
          </section>
          <p>of monthly rent collected</p>
          <p>$45 minimum fee</p>
          <div></div>
          <p className="marginT">Management Fee</p>
        </div>
        <div className="grid-bold">
          <h1>Standard</h1>
          <div></div>
          <section>
            <h2>8</h2>
            <h3>%</h3>
          </section>
          <p>of monthly rent collected</p>
          <p>$45 minimum fee</p>
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
          <p>$45 minimum fee</p>
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
          <p>Legal Compliance</p>
        </div>{' '}
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Legal Compliance</p>
        </div>{' '}
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Legal Compliance</p>
        </div>
        {/* <div className="grid-box-three blue bottom-round ">
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
        </div> */}
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move In/Out Inspection</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move In/Out Inspection</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Move In/Out Inspection</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Financial Reporting</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Financial Reporting</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Financial Reporting</p>
        </div>
        <div className="grid-box ">
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
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Renewal</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Digital Doc Signing</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Digital Doc Signing</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Digital Doc Signing</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Prepared Lease</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Prepared Lease</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Prepared Lease</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Vacancy Listing</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Vacancy Listing</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Vacancy Listing</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Tenant Screening</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Tenant Screening</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Tenant Screening</p>
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
          <p>Lease Enforcement</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Enforcement</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Lease Enforcement</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Periodic Inspections</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Periodic Inspections</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Periodic Inspections</p>
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
          <p>Eviction Process</p>
        </div>
        <div className="grid-box-two ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Eviction Process</p>
        </div>
        <div className="grid-box ">
          <div>
            <FiCheck className="check-icon" />
          </div>
          <p>Eviction Process</p>
        </div>
        {/* <div className="grid-box-two ">
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
        </div> */}
      </section>

      <Footer />
    </div>
  );
};

export default Services;
