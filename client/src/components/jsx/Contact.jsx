import React, { useState } from "react";
import axios from "axios";
import { PacmanLoader } from "react-spinners";
import "../styles/Contact.css";
import "../styles/Heading.css";
import SuccessCard from "./SuccessCard";
import { BASE_URL, NITC_LOCATION } from "../utils/constants";

const ContactUs = () => {
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
      const response = await axios.post(`${BASE_URL}/contact`, formData);
      console.log("Message sent successfully:", response.data);
      setIsSubmitted(true);
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        mobilenumber: "",
        message: "",
      });
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
            <h1>Contact Us</h1>
            <p>
              Or e-mail us at{" "}
              <a href="mailto:enquireclub@nitc.ac.in">enquireclub@nitc.ac.in</a>
            </p>
          </div>
        </section>

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

export default ContactUs;
