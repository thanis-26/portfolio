import React from "react";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const roles = [
    "SALESFORCE ADMINISTRATOR.",
    "SALESFORCE DEVELOPER.",
    "SALESFORCE CONSULTANT.",
    "AGILE PRACTITIONER.",
    "REACT DEVELOPER.",
    "FRONT-END ENGINEER.",
    "SOFTWARE ENGINEER.",
    ];

  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1>
          <span className="intro">HELLO, I'M </span>
          <span className="name">THANIS ANNAL JENIFER KENNADY.</span>
        </h1>
        <h2>
          I'M A{" "}
          <span className="typewriter">
            <Typewriter
              words={roles}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>
        <p className="tagline">
        ⚡ From Apex to 🔌 APIs to ⚛️ React — translating logic into experiences that move the business forward.
        </p>
      </div>
    </section>
  );
}

export default Home;
