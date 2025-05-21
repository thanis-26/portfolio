import React from "react";
import "../App.css";

function Contact() {
  return (
    <section className="contact-wrapper">
      <div className="contact-content">
        <p className="contact-heading">Interested in working together?</p>
        <p className="contact-heading">Do you have exciting opportunities for me?</p>
        <a href="mailto:thanisj04@gmail.com" className="contact-button">
          SAY <span className="highlight-text">HI!</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
