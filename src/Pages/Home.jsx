import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Home() {
  const roles = ["SALESFORCE ADMINISTRATOR.", "SALESFORCE BUSINESS ANALYST.", "PLATFORM DEVELOPER.", "AGENTFORCE SPECIALIST."];
  return <section className="hero-section" id="home"><div className="hero-content"><h1><span className="intro">HELLO, I'M </span><span className="name">THANIS ANNAL JENIFER KENNADY.</span></h1><h2>I'M A{" "}<span className="typewriter"><Typewriter words={roles} loop cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} delaySpeed={1500}/></span></h2><p className="tagline">⚡ 3+ years turning business requirements into secure, AI powered Salesforce platforms across GovCloud, Health Cloud, Sales Cloud, Service Cloud, and Marketing Cloud, from stakeholder discovery and BRDs to Agentforce, Flows, Apex, and enterprise security.</p></div></section>;
}
export default Home;


