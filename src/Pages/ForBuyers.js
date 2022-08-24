import React from 'react';
import { Parallax, Background } from 'react-parallax';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import Cozy from '../Resources/cozy2.jpeg';
import './Landing.css';
import './AllPage.css';
import './ForBuyers.css';
import homeList from '../Resources/home.pdf';
import Approved from '../Resources/Buyers_tab approved.png';
import Closing from '../Resources/Buyers tab_closing.jpg';
import Inspector from '../Resources/inspector.jpg';
import { NavLink } from 'react-router-dom';
import Trust from '../Resources/Trust.jpeg';

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const ForBuyers = (props) => {
  return (
    <div className="landingContainer">
      <Parallax className="testBanner" strength={600}>
        <Background className="custom-bg">
          <div className="fuckImage_container">
            <img src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838119/Realty/AdobeStock_45978705_kxq9eg.jpg"} alt="fill murray" className="fuckImage" />
            <div className="image-cover"></div>
          </div>
        </Background>

        <div className="height-controller">
          <NavBar />
          <div style={introStyle} className="pageHead">
            <h1>Deciding to Buy a Home</h1>
          </div>
        </div>
      </Parallax>
      <div className="buyerTitle">
        <h1>Deciding To Buy A Home
        {/* <div className="title_flare4"></div> */}
        </h1>


      </div>
      <div className="questionnaire-wrapper">
        <h3>
          What are you looking for in a home? Get started with our{' '}
          <strong>simple questionaire!</strong>
        </h3>
        <NavLink to="/checklist" exact style={{ textDecoration: 'none' }}>
          <button className="questionnaire-button">Click Here</button>
        </NavLink>
      </div>
      <div className="buyer-resources1-container">
        <div className="buyerResourceBox">
          <p>
            A home is generally one of the most expensive purchases a person
            makes in their lifetime. As buyers begin their journey, it is easy
            to feel uncertain and intimidated. When making such a huge financial
            decision, it is crucial buyers are completely aware of their
            actions. Having a real estate agent at your side can reduce the
            stress of the home buying experience and help guide buyers to make
            well-informed decisions.
          </p>
        </div>
        <div className="buyerResourceBox3">
          <div className="buyerLinkBox">
            <a href="#step1">Step 1: Find a Realtor You Trust</a>
            <a href="#step2">
              Step 2: Find a Lender you Trust, Get Pre-Approved
            </a>
            <a href="#step3">Step 3: Choosing a Home</a>
            <a href="#step4">Step 4: Make an Offer</a>
            <a href="#step5">Step 5: Get a Home Inspection</a>
            <a href="#step6">Step 6: Home Appraisal</a>
            <a href="#step7">Step 7: Closing</a>
          </div>
        </div>

        <div className="buyerParagraphHead">
          <p id="step1">Find a Realtor You Trust
          {/* <div className="title_flare"></div> */}
          
          </p>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="buyerResourceBox">
          <p>
            Having a realtor you trust and enjoy working with is incredibly
            important to your home buying experience. Initially, you should
            speak to several realtors, simply getting to know them. Don’t sign
            anything with any realtor, until you find the one you trust and want
            to work with. Once you’ve found the one, let it be known you’ve
            officially committed yourself to an agent. Not being transparent to
            any realtor you’ve talked to that you are officially working with a
            different realtor, could lead to uncomfortable situations
            surrounding procuring cause. Be upfront, be honest.
          </p>
        <img
            style={{ float: 'left', marginBottom: '0px' }}
            src={Trust}
            alt=""
          />
        </div>

        <div className="buyerParagraphHead">
          <p id="step2">Find a Lender you Trust, Get Pre-Approved
          {/* <div className="title_flare" ></div> */}
          
          </p>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="buyerResourceBox2">
          {/* <img style={{ float: 'left' }} src={Approved} alt="" /> */}
          <div className="buyerResourceText">
            While getting pre-approved is not required, it is a good idea. It is
            best to get pre-approved by a lender before you start looking for a
            home because it determines your budget and displays to sellers that
            you’re a serious buyer. To get pre-approved with a lender of your
            choice, you will typically verify information such as:
            <p>&#x2022; Income</p>
            <p>&#x2022; Employment</p>
            <p>&#x2022; Debt</p>
            <p>&#x2022; Assets</p>
            This may vary by lender, but you will typically need to provide:
            <p>&#x2022; Driver's license</p>
            <p>&#x2022; Bank statements for the last month</p>
            <p>&#x2022; Paycheck stubs</p>
            <p>&#x2022; W2</p>
          </div>
        </div>


        <div className="buyerParagraphHead">
          <p id="step3">Choosing A Home
          {/* <div className="title_flare"></div> */}
          
          </p>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="buyerResourceBox2">
        <img
            style={{ float: 'left', marginBottom: '0px' }}
            src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838857/Realty/AdobeStock_320575850_esiaof.jpg"}
            alt=""
          />
          <div className="buyerResourceText">
            Finding the right home can be the most challenging part of the home
            buying process because no two properties are the same. Every home
            offers its own uniqueness, so it is of the utmost importance buyers
            are not rushed in their search for the perfect home. As your real
            estate team, it is our job to remain objective and provide you our
            real estate expertise. It is our goal to help you find exactly what
            you are looking for.
          </div>
          <br />
          <p>
            Fill out our {/* <a href={homeList} download> */}
            <a href={'/checklist'}>“Homebuying Wishlist”</a> to help narrow down
            exactly what you’re searching for.{' '}
          </p>
        </div>
        <div className="buyerParagraphHead">
          <p id="step4">Make An Offer
          {/* <div className="title_flare"></div> */}
          
          </p>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="buyerResourceBox2">
          <div className="buyerResourceText">
            Once you have found the perfect home, we will complete a comparative
            market analysis (CMA) comparing similar properties to determine a
            fair value. Once fair value is established, we will structure the
            offer and begin the negotiation process.
          </div>
        </div>
        <div className="buyerParagraphHead">
          <p id="step5">Get A Home Inspection
          {/* <div className="title_flare"></div> */}
          
          </p>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="buyerResourceBox2">
          <img
            style={{ float: 'left', marginBottom: '0px' }}
            src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838998/Realty/AdobeStock_296782477_yjwxeu.jpg"}
            alt=""
          />
          <div className="buyerResourceText">
            It is highly recommended to get to an inspection from a licensed
            home inspector to ensure the property is free from structural
            damage, environmental hazards such as radon, or wood-eating insects.
            Purchase agreements are usually contingent upon a home inspection.
            <br />
            <br />
            This means you may renegotiate the offer or withdraw completely if
            the inspection reports any notable material defects. Both you and
            the seller will receive the home inspection report. After you have
            reviewed the report, it will be up to you to decide if any issues
            need to be addressed before proceeding to the closing of the sale.
            Prior to closing, you will be able to make a final walk through,
            giving you the chance to confirm agreed-upon repairs have been made.
          </div>
        </div>
        <div className="buyerParagraphHead">
          <p id="step6">Home Appraisal
          {/* <div className="title_flare"></div> */}
          
          </p>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="buyerResourceBox">
          <p>
            Before the lender will submit to the loan, an appraisal will need to
            be completed. The purpose of the appraisal is to determine the
            market value of the subject property. The lender will use the
            appraisal report to ensure the amount their lending does not exceed
            the value of the property.
          </p>
        <img
            style={{ float: 'right', marginBottom: '0px' }}
            src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838119/Realty/AdobeStock_136507807_ts6jcy.jpg"}
            alt=""
          />
        </div>
        <div className="buyerParagraphHead">
          <p id="step7">Closing
          {/* <div className="title_flare"></div> */}
          
          </p>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="buyerResourceBox2">
          <img style={{ float: 'left' }} src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838119/Realty/AdobeStock_247260977_vqmt3s.jpg"} alt="" />
          <div className="buyerResourceText">
            Closing time is typically the easiest part of the process. This is
            when you will review and sign all loan documents for your new home.
            Some costs associated with closing are financing costs, a down
            payment, prepaid interest, insurance, title fees and taxes. It is
            always important to make sure you have a valid driver's license at
            the time of closing. During the buying process, it is important to
            keep your personal finances in good standing. Avoid taking out any
            loans that may impact the overall purchase.
          </div>
        </div>
      </div>
      <div className="pageBreak" />
      <Footer />
    </div>
  );
};

export default ForBuyers;
