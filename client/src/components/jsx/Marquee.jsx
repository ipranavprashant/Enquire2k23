import React from 'react';
import '../styles/Marquee.css'; // Add your CSS styles for the marquee

const Marquee = () => {
  const logos = ['Forbes', 'Inc', 'Nat_Geo', 'Red_Cross', 'Discovery_Channel', 'REI', 'Fortune'];

  return (
    <div className="marquee">
      <section className="marquee-content">
        {logos.map((company, index) => (
          <a key={index} className="marquee-block">
            <img
              className="marquee-logo"
              src={`https://cdn.shopify.com/s/files/1/0789/1333/files/${company}.svg?v=1593719066`}
              alt={company}
            />
          </a>
        ))}
      </section>
      <section className="marquee-content">
        {logos.map((company, index) => (
          <a key={index} className="marquee-block">
            <img
              className="marquee-logo"
              src={`https://cdn.shopify.com/s/files/1/0789/1333/files/${company}.svg?v=1593719066`}
              alt={company}
            />
          </a>
        ))}
      </section>
    </div>
  );
};

export default Marquee;
