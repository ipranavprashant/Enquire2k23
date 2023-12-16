import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import EnquireLogo from "../../assets/EnquireLogo.jpeg";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !document.querySelector(".nav__list").contains(e.target) &&
        !document.querySelector(".nav-toggle").contains(e.target)
      ) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const closeNav = () => {
    setIsExpanded(false);
  };

  return (
    <div className={`container-navbar ${scrolling ? "translucent" : ""}`}>
      <header className="site-header">
        <div className="header__content--flow">
          <section className="header-content--left">
            <NavLink to="/" className="brand-logo" onClick={scrollToTop}>
              <img
                src={EnquireLogo}
                alt="logo"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
              <span className="logo-text">Enquire Quiz Club</span>
            </NavLink>
            <button className="nav-toggle" onClick={handleToggle}>
              <span className="toggle--icon"></span>
            </button>
          </section>
          <section className="header-content--right">
            <nav className="header-nav" role="navigation">
              <div
                className={`nav__list ${isExpanded ? "expanded" : ""}`}
                aria-expanded={isExpanded}
              >
                <li className="list-item">
                  <NavLink
                    to="/"
                    className="nav__link"
                    activeclassname="active"
                    onClick={() => {
                      scrollToTop();
                      closeNav();
                    }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink
                    to="/about"
                    className="nav__link"
                    activeclassname="active"
                    onClick={() => {
                      scrollToTop();
                      closeNav();
                    }}
                  >
                    About
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink
                    to="/events"
                    className="nav__link"
                    activeclassname="active"
                    onClick={() => {
                      scrollToTop();
                      closeNav();
                    }}
                  >
                    Events
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink
                    to="/members"
                    className="nav__link"
                    activeclassname="active"
                    onClick={() => {
                      scrollToTop();
                      closeNav();
                    }}
                  >
                    Members
                  </NavLink>
                </li>
                <li className="list-item">
                  <NavLink
                    to="/contactus"
                    className="nav__link"
                    activeclassname="active"
                    onClick={() => {
                      scrollToTop();
                      closeNav();
                    }}
                  >
                    Contact Us
                  </NavLink>
                </li>
              </div>
            </nav>
          </section>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
