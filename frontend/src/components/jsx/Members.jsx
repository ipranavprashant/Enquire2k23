import React, { useState } from 'react';
// import Image from 'next/image';
import '../styles/Members.css'; // Make sure to provide the correct path
// import Aabid from "@/public/images/Team/Aabid Mohamed.jpg"

import Abin from "../../assets/members/EnquireLogo.jpeg";
import Afraz from "../../assets/members/EnquireLogo.jpeg";
import Alen from "../../assets/members/EnquireLogo.jpeg";
import Aravind from "../../assets/members/EnquireLogo.jpeg";
import Arjun from "../../assets/members/EnquireLogo.jpeg";
import Bhukya from "../../assets/members/EnquireLogo.jpeg";
import Cliford from "../../assets/members/EnquireLogo.jpeg";
import Hadif from "../../assets/members/EnquireLogo.jpeg";
import Hemanth from "../../assets/members/EnquireLogo.jpeg";
import JoelJohn from "../../assets/members/EnquireLogo.jpeg";
import John from "../../assets/members/EnquireLogo.jpeg";
import Juby from "../../assets/members/EnquireLogo.jpeg";
import Madhav from "../../assets/members/EnquireLogo.jpeg";
import Afthab from "../../assets/members/EnquireLogo.jpeg";
import Jaseem from "../../assets/members/EnquireLogo.jpeg";
import Neena from "../../assets/members/EnquireLogo.jpeg";
import Piyush from "../../assets/members/EnquireLogo.jpeg";
import Pranav from "../../assets/members/EnquireLogo.jpeg";
import PranavNair from "../../assets/members/EnquireLogo.jpeg";
import Rajat from "../../assets/members/EnquireLogo.jpeg";
import Simmon from "../../assets/members/EnquireLogo.jpeg";
import Sinadin from "../../assets/members/EnquireLogo.jpeg";
import Sree from "../../assets/members/EnquireLogo.jpeg";
import Vedasree from "../../assets/members/EnquireLogo.jpeg";
import Vimal from "../../assets/members/EnquireLogo.jpeg";
import Ameen from "../../assets/members/EnquireLogo.jpeg";
import Unnati from "../../assets/members/EnquireLogo.jpeg";
import Nazim from "../../assets/members/EnquireLogo.jpeg";
import Chacko from "../../assets/members/EnquireLogo.jpeg";
import Nithin from "../../assets/members/EnquireLogo.jpeg";
import Vysakh from "../../assets/members/EnquireLogo.jpeg";


const Members = () => {
  const [members, setMembers] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMembers = () => {
    setMembers(true);
    // Scroll to the top of the page when switching to Members
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAlumni = () => {
    setMembers(false);
    // Scroll to the top of the page when switching to Alumni
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const alumni = [
    {
      id: 1,
      name: "Abin Latheef",
      position: "Alumni",
      image: Abin
    },
    {
      id: 2,
      name: "Aravind I M",
      position: "Alumni",
      image: Aravind
    },
    {
      id: 3,
      name: "Arjun M Murali",
      position: "Alumni",
      image: Arjun
    },
    {
      id: 4,
      name: "Cliford",
      position: "Alumni",
      image: Cliford
    },
    {
      id: 5,
      name: "Hadif Yassin Hameed",
      position: "Alumni",
      image: Hadif
    },
    {
      id: 6,
      name: "John D",
      position: "Alumni",
      image: John
    },
    {
      id: 7,
      name: "Muhammed Jaseem",
      position: "Alumni",
      image: Jaseem
    },
    {
      id: 8,
      name: "Rajat",
      position: "Alumni",
      image: Rajat
    },
    {
      id: 9,
      name: "Sinadin Shan",
      position: "Alumni",
      image: Sinadin
    },
    {
      id: 10,
      name: "Vimal Joseph",
      position: "Alumni",
      image: Vimal
    },
    {
      id: 11,
      name: "Nazim Jabir",
      position: "Alumni",
      image: Nazim
    },
    {
      id: 12,
      name: "Nithin Puthalath",
      position: "Alumni",
      image: Nithin
    }
  ]

  const member = [
    {
      id: 1,
      name: "Mohamed Afthab",
      position: "Secretary",
      image: Afthab
    },
    {
      id: 2,
      name: "Madhav Prabhu C M",
      position: "Joint Secretary",
      image: Madhav
    },
    {
      id: 3,
      name: "Mohammed Ameen",
      position: "Treasurer",
      image: Ameen
    },
    {
      id: 4,
      name: "Vysakh Premkumar",
      position: "Mentor",
      image: Vysakh
    },
    {
      id: 5,
      name: "Sreevalsan S",
      position: "Event Coordinator",
      image: Sree
    },
    {
      id: 6,
      name: "Neena M S",
      position: "Content and Outreach",
      image: Neena
    },
    {
      id: 7,
      name: "Hemanth Chodisetti",
      position: "Content and Outreach",
      image: Hemanth
    },
    {
      id: 8,
      name: "Afraz Ahmed",
      position: "Marketing Head",
      image: Afraz
    },
    {
      id: 9,
      name: "Joel George John",
      position: "Media Head",
      image: JoelJohn
    },
    {
      id: 10,
      name: "Alen Antony",
      position: "Member",
      image: Alen
    },
    {
      id: 11,
      name: "Unnati",
      position: "Member",
      image: Unnati
    },
    {
      id: 12,
      name: "Bhukya Chetan Ram",
      position: "Member",
      image: Bhukya
    },
    {
      id: 13,
      name: "Juby Johnson",
      position: "Member",
      image: Juby
    },
    {
      id: 14,
      name: "Piyush Soni",
      position: "Member",
      image: Piyush
    },
    {
      id: 15,
      name: "Pranav Prashant",
      position: "Member",
      image: Pranav
    },
    {
      id: 16,
      name: "Pranav R Nair",
      position: "Member",
      image: PranavNair
    },
    {
      id: 17,
      name: "Simmon Mathew Shaji",
      position: "Member",
      image: Simmon
    },
    {
      id: 18,
      name: "Vedasree Rodi",
      position: "Member",
      image: Vedasree
    },
    {
      id: 19,
      name: "Chacko James",
      position: "Member",
      image: Chacko
    }
  ]

  // Filter event cards based on the search term
  const filteredMembers = member.filter((m) =>
  m.name.toLowerCase().includes(searchTerm.toLowerCase())
);


  const filteredAlumni = alumni.filter((a) =>
  a.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const filteredPeople = members ? filteredMembers : filteredAlumni;

return (
  <>
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