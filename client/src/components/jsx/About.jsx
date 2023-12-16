import React from "react";
import "../styles/About.css";
import "../styles/Contact.css";
import "../styles/Heading.css";

const About = () => {
  return (
    <>
      <div className="beautify-heading">
        <h1>About Us</h1>
      </div>
      <div className="about-container gap">
        <div className="about-content">
          <h1 className="about-heading">Our Legacy</h1>

          <div className="about-section">
            <p className="about-paragraph">
              We are the brainchild of a dedicated group of quizzers at NIT
              Calicut. Established in 2002, we are synonymous with our signature
              events during Tathva and Ragam, and Enquire Quiz Leagues. We
              conduct about 20 quizzes every year. Enquire Quiz Club, being the
              quiz club of NITC, holds quizzes across the state and works to
              expand its frontier every year. Besides the presence of alumni in
              IIMs and other national level institutes, Enquire has conducted
              quizzes at KQA events. Enquire has also consistently maintained
              its position as the biggest quiz club in the state.
            </p>
          </div>

          <h1 className="about-heading gap">Enquire Quiz League</h1>

          <div className="about-section">
            <p className="about-paragraph">
              The Enquire quiz league is the flagship event that Enquire offers.
              With a gathering of ardent quizzers and knowledge enthusiasts
              carrying forth an 8 year old legacy, started in Kochi, aspired by
              a like minded team. Initiated to stand as a beacon of knowledge
              and awareness, EQL today, conducts quizzes across the state
              drawing a crowd of around 300 participants and increasing by the
              year. This year, EQL comes to you, bigger and better, with its 8th
              edition, producing brain cracking challenges and offering prizes
              worth ₹ 30,000
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
