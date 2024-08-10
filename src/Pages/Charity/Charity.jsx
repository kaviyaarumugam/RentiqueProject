import React from 'react';
import Children from './charityimg/children.png';
import './Charity.css';
import ngo1 from './charityimg/Ngo1.png'
import ngo2 from './charityimg/Ngo2.png'

const Charity = () => {
  return (
    <div>
      <div className="charity-img">
        <img src={Children} alt="Children" />
        <div className="charity-text-overlay">
        </div>
      </div>
      <div className="charity-about">
        <center>
          <h1>About the Program</h1>
          <p>
            We, at Chic for Charity, have always been firm believers in fashion for all. But somewhere in the midst of bringing luxury designers
            to every person, we forget that there are those in the world who don’t even have the luxury of comfortable clothing.<br /><br />
            So here we are, pushing the boundaries to believe in clothing for all; and we’d like your support in our initiative to help those in
            need to be able to lead a deservedly comfortable life.<br /><br />
            Browse through our display of an exquisite collection of outfits available to rent for a cause. In addition to renting, we encourage
            you to send in your unused clothes, which will be donated to orphanages in collaboration with our NGO partners.
          </p>
        </center>
      </div>
      
      <div className="workflow-timeline">
        <h1>How it works</h1>
        <div className="workflow-container">
          <div className="workflow-item">
            <div className="workflow-icon">👗</div>
            <div className="workflow-text">
              <h3>Rent the Cloth</h3>
              <p>Choose from our wide range of luxury outfits.</p>
            </div>
          </div>
          <div className="workflow-item">
            <div className="workflow-icon">✨</div>
            <div className="workflow-text">
              <h3>Flaunt It</h3>
              <p>Enjoy wearing high-end fashion at a fraction of the cost.</p>
            </div>
          </div>
          <div className="workflow-item">
            <div className="workflow-icon">👕</div>
            <div className="workflow-text">
              <h3>Give Unused Clothes</h3>
              <p>Send in your unused clothes along with the return.</p>
            </div>
          </div>
          <div className="workflow-item">
            <div className="workflow-icon">💳</div>
            <div className="workflow-text">
              <h3>Get a Small Credit</h3>
              <p>Receive a small credit along with your refund.</p>
            </div>
          </div>
          <div className="workflow-item">
            <div className="workflow-icon">🎁</div>
            <div className="workflow-text">
              <h3>Donate to Orphanage</h3>
              <p>Your unused clothes will be donated to orphanages through our NGO partners.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="ngo">
         <center><h1>NGO Partners</h1></center>
         <div className="ngo-container">
         <div className="ngo-des">
          <img src={ngo1} alt="ngopartner"/>
          <p>INGOUDE Foundation saves lives and helps millions of people find the way to a better life worldwide.</p>
         </div>
         <div className="ngo-des">
          <img src={ngo2} alt="ngopartner"/>
          <p>Foundation for Initiatives in Development and Education for All is a NGO with
          initiatives focused on the development of underprivileged children, youth and women.</p>
         </div>
         </div>
      </div>
    </div>
  );
}

export default Charity;
