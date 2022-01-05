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
                <img src={Cozy} alt="fill murray" className="fuckImage" />
                <div className="image-cover"></div>
              </div>
            </Background>
          
          
          
          <div className="height-controller">
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>Finding Your Dream Home</h1>
            </div>
          </div>
       
      </Parallax>
      <div className="buyerTitle">
        <h1>Deciding To Buy A Home</h1>
      </div>
      <div className="buyer-resources1-container">
        <div className="buyerResourceBox">
          <p>
          A home is generally one of the most expensive purchases a person makes in their lifetime. As buyers
begin their journey, it is easy to feel uncertain and intimidated. When making such a huge financial
decision, it is crucial buyers are completely aware of their actions. Having a real estate agent at your side
can reduce the stress of the home buying experience and help guide buyers to make well-informed
decisions.
          </p>
        </div>
        <div className="buyerResourceBox3">
        <div className="buyerLinkBox">
          <a href="#step1">Step 1: Where it Begins</a>
          {/* <a href="#step2">Step 2: How Much House Can You Afford?</a> */}
          <a href="#step2">Step 2: Getting Pre-approved by a Lender</a>
          <a href="#step3">Step 3: Choose a Home</a>
          <a href="#step4">Step 4: Make an Offer</a>
          <a href="#step5">Step 5: Get a Home Inspection</a>
          <a href="#step6">Step 6: Home Appraisal</a>
          <a href="#step7">Step 7: Closing Time</a>
        </div>
       
        </div>

        <div className="buyerParagraphHead">
          <p id="step1">Where It Begins</p>
        </div>

        <div className="title-pizzazz" />

        <div className="buyerResourceBox">
          <p >To begin the process, you should contact a local real estate agent who is familiar with the market. When
you talk to the agent be sure to ask any questions you might have. Once you have found an agent you
like and trust, they will assist you in finding the home that best fits your wants and needs. </p>
        </div>
        {/* <div className="buyerParagraphHead">
          <p id="step2">How Much Can You Afford</p>
        </div>
        <div className="buyerResourceBox2">
            <img style={{float: "right"}}src={Afford} alt="" />
          <div className="buyerResourceText">
            Determining how much you can afford is dependent on your own
            financial situation. There are several factors involved when
            figuring your budget such as: household income, monthly
            expenditures, money available for down payment, interest rates, and
            the type of loan. A great way to figure how much you can afford is
            by using an affordability calculator, which is easily accessible
            online. One provider of this Zillow provides a great calculator that
            is available to all and can be found here.
          </div>
          
         
        </div> */}
        <div className="buyerParagraphHead">
          <p id="step2">Getting Pre-Approved By A Lender</p>
        </div>

        <div className="title-pizzazz" />

        <div className="buyerResourceBox2">
        <img style={{float: "left"}}src={Approved} alt="" />
          <div className="buyerResourceText" >
          While getting pre-approved is not required, it is a good idea. It is best to get pre-approved by a lender
before you go home shopping because it determines your budget and displays to sellers that you’re a
serious buyer. To get pre-approved with a lender of your choice, you will need to verify information such
as: income, employment, debt, and assets. When choosing a lender, the options are endless. Some
lenders in the area are:
        </div>
        </div>
        <div className="buyerLinkBox">
          <h1>Jennings County</h1>
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
          <h1>Jefferson County</h1>
          <a 
            rel="noreferrer"
            target="_blank" 
            href="https://genevafi.com/rising-sun-branch">
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
          <h1>Jackson County</h1>
          <a 
            rel="noreferrer"
            target="_blank" 
            href="https://www.bawfg.com/branch-list/">
            Bailey & Wood Mortgage Lender
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://integritymtgs.com/seymour-in-loan-officers/"
          >
            Integrity Mortgage Group
          </a>
          <a 
            rel="noreferrer"
            target="_blank"
            href="https://www.jcbank.com/">
            Jackson County Bank
          </a>
          <h1>Bartholemew County</h1>
          <a 
            rel="noreferrer"
            target="_blank" 
            href="https://www.bawfg.com/branch-list/">
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
          <h1>GreenWood</h1>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.5stonesmortgage.com/"
          >Five Stone Mortgage</a>
        </div>
        
        <div className="buyerParagraphHead">
          <p id="step3">Choosing A Home</p>
        </div>

        <div className="title-pizzazz" />

        <div className="buyerResourceBox">
          <p>
            Finding the right home can be the most challenging part of the home
            buying process because no two properties are the same. Every home
            offers its own uniqueness, so it is of the utmost importance buyers
            are not rushed in their search for the perfect home. As your agent,
            it is my job to remain objective and provide my real estate
            expertise. It is my goal to help you find exactly what you are
            looking for.
          </p>
          <br />
          <p>
            Download the{' '}
            <a href={homeList} download>
              “Homebuying Wishlist”
            </a>{' '}
            to help narrow down exactly what you’re searching for.{' '}
          </p>
        </div>
        <div className="buyerParagraphHead">
          <p id="step4">Make An Offer</p>
        </div>

        <div className="title-pizzazz" />

        <div className="buyerResourceBox2">
     
          <div className="buyerResourceText">
            Once you have found the perfect home, I will complete a comparative
            market analysis comparing similar properties to determine a fair
            value. Once fair value is establish we will structure the offer and
            begin the negotiation process.
          </div>
        </div>
        <div className="buyerParagraphHead">
          <p id="step5">Get A Home Inspection</p>
        </div>

        <div className="title-pizzazz" />

        <div className="buyerResourceBox2">
        <img style={{float: "left", marginBottom: "0px"}}src={Inspector} alt="" />
          <div className="buyerResourceText">
            It is very wise to seek an inspection from a licensed home inspector
            to ensure the property is free from structural damage, environmental
            hazards such as radon, wood-eating bugs, or any small repairs.
            Purchase agreements are usually contingent upon a home inspection.
            This means you may renegotiate the offer or withdraw completely if
            the inspection reports any notable material defects.
            Both you and the seller will receive the home inspection report.
            After you have reviewed the report, it will be up to you to decide
            if any issues need to be addressed before proceeding to the closing
            of the sale. Prior to closing, you will be able to make a final walk
            through, giving you the chance to confirm agreed-upon repairs have
            been made.
          </div>
        </div>
        <div className="buyerParagraphHead">
          <p id="step6">Home Appraisal</p>
        </div>

        <div className="title-pizzazz" />

        <div className="buyerResourceBox">
          <p>
            Before the lender will submit to the loan, they will hire a
            third-party company to have the property appraised. The purpose of
            the appraisal is to determine the value of the house you are buying.
            The lender will use the appraisal to ensure the loan amount is
            matched to the value of the property.
          </p>
        </div>
        <div className="buyerParagraphHead">
          <p id="step7">Closing Time</p>
        </div>

        <div className="title-pizzazz" />
        
        <div className="buyerResourceBox2">
            <img style={{float: "left"}}src={Closing} alt="" />
          <div className="buyerResourceText">
        
            Closing time is typically the easiest part of the process. This is
            when you will review and sign all loan documents for your new home.
            Some of the costs you may need to provide are closing costs, a down
            payment, prepaid interest, insurance, and taxes. This is also when
            your lender will distribute funds to the closing agent.
          
          </div>
        </div>
      </div>
      <div className="pageBreak" />
      <Footer />
    </div>
  );
};

export default ForBuyers;
