import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-content-container">
        {/* Profile Image with Hover */}
        <div className="about-img">
          <div className="img-container">
            <img src="/src/assets/Buffalo Jen.jpg" alt="Jen" />
            <div className="img-overlay">
              <p className="hover-text">Hover to reveal... ✨</p>
              <p className="hover-subtext">A future Software Engineer hire in action.</p>
            </div>
          </div>
        </div>

        {/* About Text */}
        <div className="about-text">
          <h2>WHO AM I?</h2>
          <p>
            The name’s Thanis Annal Jenifer — and yes, I may have over-engineered this page out of sheer joy to tell my story. 
          </p>
          <p>
            I recently graduated with a Master’s in Management Information Systems from the University at Buffalo. Previously, I worked at Cognizant, where I built intelligent Salesforce automations using Flows, crafted scalable Apex logic, developed Visualforce pages, and delivered tailored CRM solutions for pharmaceutical clients.
          </p>
          <p>
            I thrive at the intersection of logic and creativity—whether that’s building Lightning Web Components (LWC), customizing objects, writing clean Apex classes, or designing seamless front-end interfaces in React. My favorite kind of work? Turning chaos into clarity through automation, optimized UX, and insightful dashboards.
          </p>
        
        </div>
      </div>
    </div>
  );
}

export default About;
