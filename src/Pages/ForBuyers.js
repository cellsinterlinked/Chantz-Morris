import React from 'react';
import { Parallax } from 'react-parallax';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import Cozy from '../Resources/cozy2.jpg';
import './Landing.css';
import './AllPage.css';
import './ForBuyers.css';
import Test from '../Resources/house0.jpg';
import TinyHouse from '../Resources/tinyHouse.jpg';
import Infographic from '../Resources/Preview.jpg';
import homeList from '../Resources/home.pdf';
import Afford from '../Resources/Buyers tab_ how much can I afford.jpg';
import Approved from '../Resources/Buyers_tab approved.png';
import Closing from '../Resources/Buyers tab_closing.jpg';
import Thinking from '../Resources/Buyers tab_thinking of buying.jpg';

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
    <div className="buyers-Container">
      <Parallax bgImage={Cozy} strength={600}>
        <div className="image-cover">
          <div style={{ height: 600 }}>
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>Finding Your Dream Home</h1>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="buyerTitle">
        <h1>Deciding To Buy A Home</h1>
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

        <div className="buyerLinkBox">
          <a href="#step1">Step 1: Where it Begins</a>
          <a href="#step2">Step 2: How Much House Can You Afford?</a>
          <a href="#step3">Step 3: Getting Pre-approved by a Lender</a>
          <a href="#step4">Step 4: Choose a Home</a>
          <a href="#step5">Step 5: Make an Offer</a>
          <a href="#step6">Step 6: Get a Home Inspection</a>
          <a href="#step7">Step 7:Select Your Loan/ Appraisal</a>
          <a href="#step8">Step 8: Closing Time</a>
        </div>

        <div className="buyerParagraphHead">
          <p id="step1">Where It Begins</p>
        </div>
        <div className="buyerResourceBox">
          <p>
            The purchasing process begins before you decide to make that first
            call with your local real estate agent. As a homebuyer, you should
            start your research as soon as possible and familiarize yourself
            with resources that offer real estate listings and housing trends.
            This information can be found in the local newspaper, listing
            magazines and online.
          </p>
        </div>
        <div className="buyerParagraphHead">
          <p id="step2">How Much Can You Afford</p>
        </div>
        <div className="buyerResourceBox">
          <p>
            Determining how much you can afford is dependent on your own
            financial situation. There are several factors involved when
            figuring your budget such as: household income, monthly
            expenditures, money available for down payment, interest rates, and
            the type of loan. A great way to figure how much you can afford is
            by using an affordability calculator, which is easily accessible
            online. One provider of this Zillow provides a great calculator that
            is available to all and can be found here.
          </p>
          <div className="resourceBoxImage">
            <img src={Afford} alt="" />
          </div>
        </div>
        <div className="buyerParagraphHead">
          <p id="step3">Getting Pre-Approved By A Lender</p>
        </div>
        <div className="buyerResourceBox">
          <p>
            While getting pre-approved is not required, it is a good idea. It is
            best to get pre-approved by a lender before you go home shopping
            because it determines your budget and displays to sellers that
            you’re a serious buyer. To get pre-approved with a lender of your
            choice, you will need to verify information such as: income,
            employment, debt, and assets. To help find the lender that suits you
            the best, you can visit a local mortgage broker. Some of our local
            mortgage lenders include:
          </p>
        </div>
        <div className="buyerLinkBox">
          <h1>Jennings County</h1>
          <a
            target="_blank"
            href="https://www.bankatfirst.com/content/first-financial-bank/home.html?utm_source=yext&amp;utm_medium=locallisting&amp;utm_campaign=listing_all"
          >
            First Financial Bank
          </a>
          <a
            target="_blank"
            href="https://www.oldnational.com/bank-branch/1420-n-state-st-north-vernon-indiana"
          >
            Old National Bank
          </a>
          <a
            target="_blank"
            href="https://www.marinerfinance.com/locations/indiana/mariner-finance-location-in-north-vernon-in/?utm_source=google&amp;utm_medium=gmb_directories&amp;utm_campaign=directories"
          >
            Mariner Finance{' '}
          </a>
          <h1>Jefferson County</h1>
          <a target="_blank" href="https://genevafi.com/rising-sun-branch">
            Geneva Financial
          </a>
          <a
            target="_blank"
            href="https://www.centra.org/?utm_source=gmb&amp;utm_medium=organic&amp;utm_campaign=madison&amp;y_source=1_MTU1NDU1NDgtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl"
          >
            Centra Credit Union{' '}
          </a>
          <a
            target="_blank"
            href="https://germanamerican.com/locations/IN/Madison/430-clifty-drive/"
          >
            German American Bank{' '}
          </a>
          <h1>Jackson County</h1>
          <a target="_blank" href="https://www.bawfg.com/branch-list/">
            Bailey & Wood Mortgage Lender
          </a>
          <a
            target="_blank"
            href="https://integritymtgs.com/seymour-in-loan-officers/"
          >
            Integrity Mortgage Group
          </a>
          <a target="_blank" href="https://www.jcbank.com/">
            Jackson County Bank
          </a>
          <h1>Bartholemew County</h1>
          <a target="_blank" href="https://www.bawfg.com/branch-list/">
            Bailey & Wood Mortgage Lender
          </a>
          <a
            target="_blank"
            href="https://www.hallmarkhomemortgage.com/meet-our-team/columbus-in"
          >
            Hallmark Home Mortgage
          </a>
          <a
            target="_blank"
            href="https://www.ruoff.com/lending-centers/columbus"
          >
            Ruoff Mortgage
          </a>
        </div>
        <div className="buyerResourceBox">
          <div className="resourceBoxImage">
            <img src={Approved} alt="" />
          </div>
        </div>
        <div className="buyerParagraphHead">
          <p id="step4">Choosing A Home</p>
        </div>
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
          <p id="step5">Make An Offer</p>
        </div>
        <div className="buyerResourceBox">
          <p>
            Once you have found the perfect home, I will complete a comparative
            market analysis, comparing similar properties to determine a fair
            value. Once fair value is establish we will structure the offer and
            begin the negotiation process.
          </p>
        </div>
        <div className="buyerParagraphHead">
          <p id="step6">Get A Home Inspection</p>
        </div>
        <div className="buyerResourceBox">
          <p>
            It is very wise to seek an inspection from a licensed home inspector
            to ensure the property is free from structural damage, environmental
            hazards such as radon, wood-eating bugs, or any small repairs.
            Purchase agreements are usually contingent upon a home inspection.
            This means you may renegotiate the offer or withdraw completely if
            the inspection reports any notable material defects.
          </p>
          <br />
          <p>
            Both you and the seller will receive the home inspection report.
            After you have reviewed the report, it will be up to you to decide
            if any issues need to be addressed, before proceeding to the closing
            of the sale. Prior to closing, you will be able to make a final walk
            through, giving you the chance to confirm agreed-upon repairs have
            been made.
          </p>
        </div>
        <div className="buyerParagraphHead">
          <p id="step7">Select Your Loan/ Home Appraisal</p>
        </div>
        <div className="buyerResourceBox">
          <p>
            You have no obligations to any one lender and can shop around for
            the best priced loan program. As you begin your search it is helpful
            to understand different types of loans and down payment assistance
            programs that are available to first time homebuyers. The lender you
            choose will be able to assist you throughout the entire process and
            answer all questions about obtaining a loan.
          </p>
          <p>
            Before the lender will submit to the loan, they will hire a
            third-party company to have the property appraised. The purpose of
            the appraisal is to determine the value of the house you are buying.
            The lender will use the appraisal to ensure the loan amount is
            matched to the value of the property.
          </p>
        </div>
        <div className="buyerParagraphHead">
          <p id="step8">Closing Time</p>
        </div>
        <div className="buyerResourceBox">
          <p>
            Closing time is typically the easiest part of the process. This is
            when you will review and sign all loan documents for your new home.
            Some of the costs you may need to provide are closing costs, a down
            payment, prepaid interest, insurance, and taxes. This is also when
            your lender will distribute funds to the closing agent.{' '}
          </p>
          <div className="resourceBoxImage">
            <img src={Closing} alt="" />
          </div>
        </div>
      </div>
      <div className="pageBreak" />
      <Footer />
    </div>
  );
};

export default ForBuyers;
