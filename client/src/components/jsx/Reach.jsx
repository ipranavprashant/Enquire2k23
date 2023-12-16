import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import "../styles/Reach.css";

const ReachComponent = () => {
  return (
    <div className="reach-container">
      <div className="reach-info">
        <SchoolIcon style={{ fontSize: 50 }} />
      </div>

      <div className="followers-container">
        <span className="icon">&#x2665;</span>
        <p className="reach-text">
          Large number of schools and colleges within and outside of Kerala
        </p>
        <span className="icon">&#x2665;</span>
      </div>

      <div className="followers-container">
        <span className="icon">&#x2665;</span>
        <p className="reach-text">
          Cumulative of more than 10k followers across all our socials
        </p>
        <span className="icon">&#x2665;</span>
      </div>

      <div className="followers-container">
        <span className="icon">&#x2665;</span>
        <p className="reach-text">
          More than 30,000 students in more than 15 districts
        </p>
        <span className="icon">&#x2665;</span>
      </div>
    </div>
  );
};

export default ReachComponent;
