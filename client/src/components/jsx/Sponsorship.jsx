import React, { useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import "../styles/Sponsorship.css";
import "../styles/Contact.css";
import "../styles/Heading.css";
import whoarewe from "../../assets/sponsorshipdocs/whoarewe.pdf";
import whatcanweoffer from "../../assets/sponsorshipdocs/whatcanweoffer.pdf";
import Marquee from "./Marquee";
import Reach from "./Reach";
import SuccessCard from "./SuccessCard";
import { BASE_URL, NITC_LOCATION } from "../utils/constants";

const Sponsorship = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobilenumber: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/sponsorship`, formData);
      console.log("Message sent successfully:", response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container-contactus">
      <div className="innerwrap">
        <section className="section1 clearfix">
          <div className="beautify-heading">
            <h1>Sponsorship</h1>
          </div>
          <p>
            While the club has made it a habit to host quality quizzes round the
            calendar, the support we've had over the years from our sponsors has
            been the driving force behind the successful organization of the
            events. It's for this single reason that we value sponsorship at a
            high level, without which the events would never be a reality. Do
            see the following documents to understand the benefits of sponsoring
            us:
          </p>

          <div className="pdf-links">
            <a href={whoarewe} download>
              <button className="pdf-button">Marketing Brochure</button>
            </a>
            <a href={whatcanweoffer} download>
              <button className="pdf-button">General Proposal Scheme</button>
            </a>
          </div>
        </section>
        <div className="beautify-heading vertical-gap">
          <h1>Our Previous Sponsors</h1>
        </div>
        <Marquee />
        <div className="beautify-heading vertical-gap">
          <h1>Our Reach</h1>
        </div>
        <Reach />
        <div className="beautify-heading vertical-gap">
          <h1>React out to us</h1>
        </div>
        <p className="to-centre">
          Or e-mail us at <span>&nbsp;</span>
          <a href="mailto:enquireclub@nitc.ac.in">enquireclub@nitc.ac.in</a>
        </p>
        <section className="section2 clearfix">
          <div className="col2 column1 first">
            <iframe
              className="map"
              src={NITC_LOCATION}
              title="club-location"
              width="600"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col2 column2 last">
            <div className="sec2innercont"></div>
            <div className="sec2contactform">
              {isLoading ? (
                <div className="loading-container">
                  <div className="pacman">
                    <PacmanLoader color={"#36D7B7"} size={35} />
                  </div>
                  <br />
                  <h4 className="to-centre">Loading...</h4>
                </div>
              ) : (
                <>
                  {isSubmitted ? (
                    <SuccessCard message="Thanks for contacting us!" />
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <div className="clearfix">
                        <input
                          className="col2 first"
                          type="text"
                          name="firstname"
                          placeholder="First Name"
                          onChange={handleChange}
                          value={formData.firstname}
                          required
                        />
                        <input
                          className="col2 last"
                          type="text"
                          name="lastname"
                          placeholder="Last Name"
                          onChange={handleChange}
                          value={formData.lastname}
                          required
                        />
                      </div>
                      <div className="clearfix">
                        <input
                          className="col2 first"
                          type="email"
                          name="email"
                          placeholder="Email"
                          onChange={handleChange}
                          value={formData.email}
                          required
                        />
                        <input
                          className="col2 last"
                          type="text"
                          name="mobilenumber"
                          placeholder="Contact Number"
                          onChange={handleChange}
                          value={formData.mobilenumber}
                          required
                        />
                      </div>
                      <div className="clearfix">
                        <textarea
                          name="message"
                          id=""
                          cols="30"
                          rows="7"
                          placeholder="Your message here..."
                          onChange={handleChange}
                          value={formData.message}
                          required
                        ></textarea>
                      </div>
                      <div className="clearfix">
                        <input type="submit" value="Send" />
                      </div>
                    </form>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsorship;
