import React, { useState } from 'react';
import membersData from '../utils/memberData'
import alumniData from '../utils/alumniData';
import '../styles/Members.css';
import '../styles/Heading.css'

const Members = () => {
  const [members, setMembers] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMembers = () => {
    setMembers(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAlumni = () => {
    setMembers(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Filtering event cards based on the search term
  const filteredMembers = membersData.filter((m) =>
    m.name.toLowerCase().includes(searchTerm.toLowerCase())
  );


  const filteredAlumni = alumniData.filter((a) =>
    a.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // const listOfRestaurants=listOfRestaurants.filter((res)=>
  // res.data.avgRating>4
  // );

  const filteredPeople = members ? filteredMembers : filteredAlumni;
  const headingText = members ? 'Members' : 'Alumni';

  return (
    <>
      <div className='beautify-heading'>
        <h1>{headingText}</h1>
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-box"
      />
      <div className="people-container">
        <div className="people-list">
          {filteredPeople.length > 0 ? (
            filteredPeople.map((person) => (
              <div key={person.id} className="member-card">
                <div className="image-wrapper-members">
                  <img
                    className="avatar"
                    src={person.image}
                    alt="profile"
                    width={150}
                    height={150}
                  />
                </div>
                <h2 className="member-name">{person.name}</h2>
                <p className="member-position">{person.position}</p>
              </div>
            ))
          ) : (
            <p className="no-members-message">
              Zzz... No members found. Check back later or try a different search.
            </p>
          )}
        </div>
        <div className="people-nav">
          <button
            className={`nav-button ${members ? 'nav-active' : ''}`}
            onClick={toggleMembers}
          >
            Members
          </button>
          <button
            className={`nav-button ${!members ? 'nav-active' : ''}`}
            onClick={toggleAlumni}
          >
            Alumni
          </button>
        </div>
      </div>
    </>
  );
};

export default Members;