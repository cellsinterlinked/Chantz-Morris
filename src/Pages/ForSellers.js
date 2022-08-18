import React from 'react';
import './ForSellers.css';
import './Landing.css';
import './AllPage.css';
import { Parallax, Background } from 'react-parallax';
import HouseFront from '../Resources/SellersHouse.jpg';
import NavBar from '../Nav/NavBar';
import Footer from '../Nav/Footer';
import Seller1 from '../Resources/Sellers tab_closing.jpg';
import Seller2 from '../Resources/sellers tab_market strategy .jpg';
import Seller3 from '../Resources/Sellers tab_open house(2).jpg';
import Seller4 from '../Resources/Sellers tab_preparing the house.jpg';

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
      <Parallax className="testBanner" strength={500}>
        <Background className="custom-bg">
          <div className="fuckImage_container">
            <img src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838119/Realty/AdobeStock_51710890_qztgod.jpg"} alt="fill murray" className="fuckImage" />
            <div className="image-cover"></div>
          </div>
        </Background>

        <div className="height-controller">
          <NavBar />
          <div style={introStyle} className="pageHead">
            <h1>Selling Your Home</h1>
          </div>
        </div>
      </Parallax>
      {/* <div className="sellerTitle">
        <h1>Selling Your Home</h1>
      </div> */}
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
          <a href="#sellerStep1">Step 1: Find a Realtor You Trust</a>
          <a href="#sellerStep2">Step 2: Determine Value of Home</a>
          <a href="#sellerStep3">Step 3: Prepare the House</a>
          <a href="#sellerStep4">Step 4: Develop a Marketing Plan</a>
          <a href="#sellerStep5">Step 5: Show the House Off</a>
          <a href="#sellerStep6">Step 6: Offer/ Negotiate</a>
          <a href="#sellerStep7">Step 7: Signing the Purchase Agreement</a>
          <a href="#sellerStep8">Step 8: Closing</a>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep1">Find a Realtor You Trust</p>
          <div className="title_flare"></div>
        </div>
{/* 
        <div className="title-pizzazz" /> */}

        <div className="sellerResourceBox">
          <p>
            Having a realtor you trust and enjoy working with is incredibly
            important to your home selling experience. Initially, you should
            speak to several realtors, simply getting to know them. Don’t sign
            anything with any realtor, until you find the one you trust and want
            to work with. Once you find the realtor that you are confident in,
            you have kickstarted your home selling journey.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep2">Determine Value of Home</p>
          <div className="title_flare"></div>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="sellerResourceBox">
          <p>
            To determine the value of the home, your agent will complete a
            comprehensive comparative market analysis. They will use recently
            sold homes within a certain radius from your property, with the same
            qualities and features as yours, to arrive at a range of values.
            After the analysis is complete and it has been presented, you will
            choose a listing price.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep3">Prepare the House</p>
          <div className="title_flare"></div>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="sellerResourceBox2">
          <img style={{ float: 'left' }} src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838120/Realty/AdobeStock_493842425_w5xald.jpg"} alt="" />
          <div className="sellerResourceText">
            The goal of preparing the house is to amaze buyers and have them
            excited as they take their first step through the front door. As
            soon as they enter, you want them envisioning the house as their
            own.
            <br />
            <br />
            To achieve this goal, homeowners should be doing anything and
            everything from fixing small repairs, cleaning the interior and
            exterior, and even sprucing up the curb appeal. Taking time to rid
            of any foul odors, cleaning carpet stains, or even washing baseboard
            trimming and doors can make an impact on a homebuyer’s decision.
            <br />
            <br />
            According to Home Staging Statistics, 94% of staged homes sell on an
            average of 29 days or less. Home staging is a great way to get the
            desired reaction out of a buyer. Instead of walking into an empty
            and hollowed out house, buyers walk into a warm and inviting home.
            This allows them to envision the space and see what purposes it can
            offer.
          </div>
          {/* <p>
          According to Home Staging Statistics, 94% of staged homes sell on an average of 29 days or less. Home
staging is a great way to get the desired reaction out of a buyer. Instead of walking into an empty and
hollowed out house, buyers walk into a warm and inviting home. This allows them to envision the space
and see what purposes it can offer.
          </p> */}
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep4">Develop a Marketing Plan</p>
          <div className="title_flare"></div>
        </div>
{/* 
        <div className="title-pizzazz" /> */}

        <div className="sellerResourceBox2">
          <img style={{ float: 'right' }} src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838119/Realty/AdobeStock_504990437_mtbvwl.jpg"} alt="" />
          <div className="sellerResourceText">
            The first step in developing a market plan is having professional
            pictures taken. Once the pictures have been taken and edited, your
            agent will create a listing on the local MLS. This allows other real
            estate brokers to see the listing, with the goal of connecting
            buyers and sellers.
            <br />
            <br />
            Your agent will utilize multiple marketing tactics that may consist
            of “Home For Sale” signs, mailers, the local newspaper, promotions
            on other real estate websites, social media, brochures, and the list
            goes on. When developing the marketing plan, your agent will
            determine which tactics are best suited to market the property.
          </div>
        </div>

        {/* <div className="sellerParagraphHead">
          <p id="sellerStep5">Show the House Off</p>
        </div>

        <div className="title-pizzazz" />

        <div className="sellerResourceBox2">
          <img style={{ float: 'left' }} src={Seller3} alt="" />
          <div className="sellerResourceText">
            Aside from posting pictures on social media and the posted listing
            on the MLS, the home can be shown off a couple other ways. To make
            the property easily accessible to buyer agents wanting to show the
            home, a key lock box can be used. This creates convenience for both
            your agent and the buying agent as it avoids scheduling conflicts.
            In addition, an open house can be held. This gives the chance for
            potential buyers, neighbors, or just onlookers to check out the
            house. The more people touring the home, the better. Word of mouth
            is a great way to help the property gain attention.
          </div>
        </div> */}

        <div className="sellerParagraphHead">
          <p id="sellerStep6">Offer/ Negotiate</p>
          <div className="title_flare"></div>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="sellerResourceBox">
          There are three ways you can respond to an offer:
          <br />
          <br />- You can accept
          <p>
            &#x2022; If the offer is accepted, it means your goals have been met
            and you liked the offer they made
          </p>
          - Make a counteroffer
          <p>
            {' '}
            &#x2022; In most cases, if the offer is not accepted the appropriate
            response is to make a counteroffer, initiating the negotiation
            process. Once a counteroffer is made, the original offer is negated.
          </p>
          -Reject
          <p>
            &#x2022; In some situations, you may reject the offer completely and
            wait for a new offer. It’s helpful to know that other items of
            negotiation can include personal belongings, items of value, closing
            costs, and even home warranties.
          </p>
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep7">Signing the Purchase Agreement</p>
          <div className="title_flare"></div>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="sellerResourceBox">
          <p>
            After you have accepted the offer, or come to an agreement in
            negotiations, you will sign the home purchase agreement that was
            prepared by the buyer’s agent. A purchase agreement is a binding
            contract that outlines the terms and conditions of the sale.
          </p>
          <img style={{ float: 'right' }} src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660839623/Realty/AdobeStock_87438799_yfpptb.jpg"} alt="" />
        </div>

        <div className="sellerParagraphHead">
          <p id="sellerStep8">Closing</p>
          <div className="title_flare"></div>
        </div>

        {/* <div className="title-pizzazz" /> */}

        <div className="sellerResourceBox2">
          <img style={{ float: 'right' }} src={"https://res.cloudinary.com/dbnapmpvm/image/upload/v1660838119/Realty/AdobeStock_513713991_d6r0nh.jpg"} alt="" />
          <div className="sellerResourceText">
            Closing time is when you will transfer ownership to the buyer,
            receive funds, and pay off any liens. To do this, all relevant
            paperwork and funds must be exchanged and typically takes place at a
            title company, brokerage office or an attorney’s office. In
            addition, any repairs agreed upon must be completed prior and items
            such as keys or garage door openers must be turned over. Closing
            time is generally an easy process and the seller has very little to
            do.
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ForSellers;
