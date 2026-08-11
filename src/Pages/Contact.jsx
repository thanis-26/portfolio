import React from "react";
import "../App.css";
const resumeUrl = `${import.meta.env.BASE_URL}Thanis_Annal_Jenifer_Kennady_Resume.docx`;
function Contact() { return <section className="contact-wrapper"><div className="contact-content"><p className="contact-heading">Need a Salesforce professional who can own the outcome?</p><p className="contact-heading">Let’s build a secure, scalable platform your users will love.</p><a href="mailto:thanisj04@gmail.com" className="contact-button">SAY <span className="highlight-text">HI!</span></a><a href={resumeUrl} download className="contact-button">DOWNLOAD <span className="highlight-text">RESUME</span></a></div></section>; }
export default Contact;
