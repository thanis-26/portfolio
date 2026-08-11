import React from "react";
import "../App.css";
import profileImage from "../assets/Buffalo Jen.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="about-content-container">
        <div className="about-img">
          <div className="img-container">
            <img src={profileImage} alt="Thanis Annal Jenifer Kennady" />
            <div className="img-overlay">
              <p className="hover-text">Salesforce builder in action... ✨</p>
              <p className="hover-subtext">Usually one Flow away from making a process much easier.</p>
            </div>
          </div>
        </div>
        <div className="about-text">
          <h2>WHO AM I?</h2>
          <p>I’m Thanis Annal Jenifer Kennady. I spend most of my day turning “Can Salesforce do this?” into “Yes, and it is already in testing.”</p>
          <p>I enjoy the space where business problems meet technical possibilities. Give me a complicated process, a few stakeholder conversations, and a Salesforce org, and I will happily map the logic, remove the unnecessary clicks, and build something people actually want to use.</p>
          <p>My toolkit includes Agentforce, Einstein, Flows, Apex, SOQL, SOSL, Lightning Web Components, CRM Analytics, Copado, Git, SFDX, and several Salesforce clouds. I can speak with business teams about requirements in the morning, troubleshoot automation in the afternoon, and still have enough energy to explain why we should test before deploying to production.</p>
          <p>I currently support the New Jersey Turnpike Authority as its sole Salesforce resource through Trigyn Technologies. The work is serious, but my approach is simple: listen carefully, build thoughtfully, secure everything, and never make users click six times when two clicks will do.</p>
          <p>Behind the certifications and dashboards, I am naturally curious, slightly obsessed with clean automation, and always looking for the next process that Salesforce can make smarter.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
