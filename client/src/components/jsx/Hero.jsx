import React from "react";
import { Link } from "react-scroll";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="beautify-heading">
            <h1>Welcome to Enquire!</h1>
          </div>
          <div className="title-hero">
            <p>We are the official trivia club of NIT Calicut</p>
            <br />
            <p>Explore the world of knowledge and challenge your intellect!</p>
            <br />
            <br />
          </div>
          <Link
            to="Events"
            smooth={true}
            duration={500}
            className="button button-accent"
          >
            Explore Events
          </Link>
        </div>
      </section>
    </>
  );
};

export default Hero;
