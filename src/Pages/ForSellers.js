import React from 'react';
import './ForSellers.css';
import './Landing.css';
import './AllPage.css';
import { Parallax } from 'react-parallax';
import HouseFront from '../Resources/houseFront.jpg';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import BackYard from '../Resources/backYard.jpg';
import SellerInfographic from '../Resources/sellerInfographic.jpg';

const introStyle = {
  left: '50%',
  top: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  color: 'white',
  maxWidth: '40rem',
  textAlign: 'center',
};

const ForSellers = (props) => {
  return (
    <div className="sellers-Container">
      <Parallax bgImage={HouseFront} strength={500}>
        <div className="image-cover">
          <div style={{ height: 600 }}>
            <NavBar />
            <div style={introStyle} className="pageHead">
              <h1>I'm Here for You</h1>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="sellerTitle">
        <h1>Selling Your Home</h1>
      </div>
      <div className="seller-resources1-container">
        <div className="sellerResourceBox">
          <p>
            So, you have decided to sell your home and take the plunge into the
            real estate market! It may feel like you have just strapped yourself
            into a chaotic and hectic rollercoaster ride, but it doesn’t have to
            be that way. Selling your home can be simplified in just eight
            steps.
          </p>
        </div>
        <div className="sellerLinkBox">
          <a href="#sellerStep1">
            Step 1: Contact your local Modglin Group Agent
          </a>
          <a href="#sellerStep2">Step 2: Determine Value of Home</a>
          <a href="#sellerStep3">Step 3: Prepare the House</a>
          <a href="#sellerStep4">Step 4: Develop a Marketing Plan</a>
          <a href="#sellerStep5">Step 5: Show the House Off</a>
          <a href="#sellerStep6">Step 6: Offer/ Negotiate</a>
          <a href="#sellerStep7">Step 7: Signing the Purchase Agreement</a>
          <a href="#sellerStep8">Step 8: Closing</a>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep1">Contact your local Modglin Group Agent</p>
        </div>

        <div className="sellerResourceBox">
          <p>
            Call or arrange a time to meet with your local Modglin Group agent
            to explain your real estate needs and goals. Selling your home can
            be one of the most stressful experiences and that’s why the Modglin
            Group trains their agents with clients in mind. Having a Modglin
            Group agent at your side from start to close will most certainly
            alleviate some of the stress that comes along with selling your
            home.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep2">Determine Value of Home</p>
        </div>

        <div className="sellerResourceBox">
          <p>
            To determine the value of the home, your agent will complete a
            comprehensive comparative market analysis. They will use recently
            sold homes within in a certain radius from your property, with the
            same qualities and features as yours, to arrive at a range of
            values. After the analysis is complete and it has been presented, a
            listing price will be chosen.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep3">Prepare the House</p>
        </div>

        <div className="sellerResourceBox">
          <p>
            The goal of preparing the house is to amaze buyers and have them
            excited as they take their first step through the front door. As
            soon as they enter, you want them envisioning the house as their
            own. To achieve this goal, homeowners should be doing anything and
            everything from fixing small repairs, cleaning the interior and
            exterior, and even sprucing up the curb appeal. Taking time to rid
            of any foul odors, cleaning carpet stains, or even washing baseboard
            trimming and doors can make an impact on a homebuyer’s decision.
          </p>
          <p>
            The goal of preparing the house is to amaze buyers and have them
            excited as they take their first step through the front door. As
            soon as they enter, you want them envisioning the house as their
            own. To achieve this goal, homeowners should be doing anything and
            everything from fixing small repairs, cleaning the interior and
            exterior, and even sprucing up the curb appeal. Taking time to rid
            of any foul odors, cleaning carpet stains, or even washing baseboard
            trimming and doors can make an impact on a homebuyer’s decision.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep4">Develop a Marketing Plan</p>
        </div>

        <div className="sellerResourceBox">
          <p>
            The first step in developing a market plan is having professional
            pictures taken. Once the pictures have been taken and edited, your
            agent will create a listing on the local MLS. This allows other real
            estate brokers to see the listing, with the goal of connecting
            buyers and sellers. Your agent will utilize multiple marketing
            tactics that may consist of “Home For Sale” signs, mailers, the
            local newspaper, promotions on other real estate websites, social
            media, brochures, and the list goes on. When developing the
            marketing plan, your agent will determine which tactics are best
            suited to market the property.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep5">Show the House Off</p>
        </div>

        <div className="sellerResourceBox">
          <p>
            Aside from posting pictures on social media and the posted listing
            on the MLS, the home can be shown off a couple other ways. To make
            the property easily accessible to buyer agents wanting to show the
            home, a key lock box can be used. This creates convenience for both
            your agent and the buying agent as it avoids scheduling conflicts.
            In addition, an open house can be held. This gives the chance for
            potential buyers, neighbors, or just onlookers to check out the
            house. The more people touring the home, the better. Word of mouth
            is a great way to help the property gain attention.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep6">Offer/ Negotiate</p>
        </div>

        <div className="sellerResourceBox">
          <p>
            There are three ways you can respond to an offer, you can accept,
            make a counteroffer, or reject. If the offer is accepted, it means
            your goals have been met and liked the offer they made. In most
            cases, if the offer is not accepted the appropriate response is to
            make a counteroffer, initiating the negotiation process. Once a
            counteroffer is made, the original offer is negated. In some
            situations, you may reject the offer completely and wait for a new
            offer. It’s helpful to know that other items of negotiation can
            include personal belongings, items of value, closing costs, and even
            home warranties.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep7">Signing the Purchase Agreement</p>
        </div>

        <div className="sellerResourceBox">
          <p>
            After you have accepted the offer you will sign the home purchase
            agreement that was prepared by the buyer’s agent. A purchase
            agreement is a binding contract that outlines the terms and
            conditions of the sale.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep8">Closing</p>
        </div>

        <div className="sellerResourceBox">
          <p>
            Closing time is when you will transfer ownership to the buyer,
            receive funds, and pay off any mortgages. To do this, all relevant
            paperwork and funds must be exchanged and typically takes place at
            the title company. In addition, any repairs agreed upon must be
            completed prior and items such as keys or garage door openers must
            be turned over. Closing time is generally an easy process and the
            seller has very little to do.
          </p>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ForSellers;
