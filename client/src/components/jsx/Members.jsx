import React, { useState } from 'react';
import '../styles/Members.css';
import '../styles/Heading.css'

//Alumni Images
import AbhijithB_Mohan_Alst_Secretary from "../../assets/members/2021-2022/Abhijith B Mohan__Assistant Secretary.png";
import Abhiram_K_R from "../../assets/members/2021-2022/Abhiram K R.png";
import Abhishek_Gautam from "../../assets/members/2021-2022/Abhishek Gautam .png";
import Abin_Gigo_Joseph_Treasurer from "../../assets/members/2021-2022/Abin Gigo Joseph__Treasurer.png";
import Abiraj_P_Y_Design_Head from "../../assets/members/2021-2022/Abiraj P Y__Design Head.png";
import Adithya_Ankam from "../../assets/members/2021-2022/Adithya Ankam.png";
import Akhil_R_Kurup from "../../assets/members/2021-2022/Akhil R Kurup.png";
import Aleena_Ann_George_Marketing_Head from "../../assets/members/2021-2022/Aleena Ann George__Marketing Head.png";
import Asit_Kumar from "../../assets/members/2021-2022/Asit Kumar.png";
import Bandi_Kapil_Kaushik from "../../assets/members/2021-2022/Bandi Kapil Kaushik.png";
import Bhavin_P_V_Social_Media_Head from "../../assets/members/2021-2022/Bhavin P V__Social Media Head.png";
import Chinthalapudi_Hari_Prasad from "../../assets/members/2021-2022/Chinthalapudi Hari Prasad.jpg";
import Chitturi_Sakshvith_Sanjeev from "../../assets/members/2021-2022/Chitturi Sakshvith Sanjeev.png";
import Deviprasad_V_R from "../../assets/members/2021-2022/Deviprasad V R .png";
import Emily_Eldose from "../../assets/members/2021-2022/Emily Eldose.png";
import Gautham_Krishna_Joint_Secretary from "../../assets/members/2021-2022/Gautham Krishna__Joint Secretary.png";
import Gayathri from "../../assets/members/2021-2022/Gayathri.png";
import Goru_Harshitha_Content_Head from "../../assets/members/2021-2022/Goru Harshitha__Content Head.png";
import Gunda_Chandana_Treasurer from "../../assets/members/2021-2022/Gunda Chandana__Treasurer.png";
import Harinarayanan_K from "../../assets/members/2021-2022/Harinarayanan K.png";
import Ivin_Issac_Georgi from "../../assets/members/2021-2022/Ivin Issac Georgi.png";
import Jhansyharshitha_Vankayalapati_Marketing_Head from "../../assets/members/2021-2022/Jhansyharshitha Vankayalapati__Marketing Head.png";
import Kancharakuntla_Reethu_Reddy from "../../assets/members/2021-2022/Kancharakuntla Reethu Reddy.png";
import Madhav_Prabhu from "../../assets/members/2021-2022/Madhav Prabhu.png";
import Neelima_M_Asst_Secretary from "../../assets/members/2021-2022/Neelima M__Assistant Secretary.png";
import Nikhil_Sreeraj from "../../assets/members/2021-2022/Nikhil Sreeraj.png";
import Niranjan_Manoj from "../../assets/members/2021-2022/Niranjan Manoj .png";
import Panasa_Teja_Technical_Head from "../../assets/members/2021-2022/Panasa Teja__Technical Head.png";
import Parvathi_Mohan_PRC_Head from "../../assets/members/2021-2022/Parvathi Mohan__PRC Head.png";
import Peddireddy_HemaVarsha from "../../assets/members/2021-2022/Peddireddy HemaVarsha .png";
import Ritu_Anne_Koshy from "../../assets/members/2021-2022/Ritu Anne Koshy.png";
import Ruben_Sinu from "../../assets/members/2021-2022/Ruben Sinu.png";
import S_Jaivardhan from "../../assets/members/2021-2022/S Jaivardhan.png";
import Satyam_Gupta from "../../assets/members/2021-2022/Satyam Gupta .png";
import Shijin_P_P from "../../assets/members/2021-2022/Shijin P P.png";
import Shrishti_Singh from "../../assets/members/2021-2022/Shrishti Singh.png";
import Sidharth_Deepesh from "../../assets/members/2021-2022/Sidharth Deepesh.png";
import Sinjitha from "../../assets/members/2021-2022/Sinjitha.png";
import Subhash_Madhav from "../../assets/members/2021-2022/Subhash Madhav.png";
import Suvishal_Kumar_Secretary from "../../assets/members/2021-2022/Suvishal Kumar__Secretary.jpg";

//current people images
//B21
// import Pranav_Prashant from "../../assets/members/2022-2023/Pranav_Prashant_Tech_Head.jpg"
//B22

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
      name: "Abhijith B Mohan",
      position: "Alumni",
      image: AbhijithB_Mohan_Alst_Secretary
    },
    {
      id: 2,
      name: "Abhiram K R",
      position: "Alumni",
      image: Abhiram_K_R
    },
    {
      id: 3,
      name: "Abhishek Gautam",
      position: "Alumni",
      image: Abhishek_Gautam
    },
    {
      id: 4,
      name: "Abin Gigo Joseph",
      position: "Alumni",
      image: Abin_Gigo_Joseph_Treasurer
    },
    {
      id: 5,
      name: "Abiraj P Y",
      position: "Alumni",
      image: Abiraj_P_Y_Design_Head
    },
    {
      id: 6,
      name: "Adithya Ankam",
      position: "Alumni",
      image: Adithya_Ankam
    },
    {
      id: 7,
      name: "Akhil R Kurup",
      position: "Alumni",
      image: Akhil_R_Kurup
    },
    {
      id: 8,
      name: "Aleena Ann George",
      position: "Alumni",
      image: Aleena_Ann_George_Marketing_Head
    },
    {
      id: 9,
      name: "Asit Kumar",
      position: "Alumni",
      image: Asit_Kumar
    },
    {
      id: 10,
      name: "Bandi Kapil Kaushik",
      position: "Alumni",
      image: Bandi_Kapil_Kaushik
    },
    {
      id: 11,
      name: "Bhavin P V Social",
      position: "Alumni",
      image: Bhavin_P_V_Social_Media_Head
    },
    {
      id: 12,
      name: "Chinthalapudi Hari Prasad",
      position: "Alumni",
      image: Chinthalapudi_Hari_Prasad
    },
    {
      id: 13,
      name: "Chitturi Sakshvith Sanjeev",
      position: "Alumni",
      image: Chitturi_Sakshvith_Sanjeev
    },
    {
      id: 14,
      name: "Deviprasad V R",
      position: "Alumni",
      image: Deviprasad_V_R
    },
    {
      id: 15,
      name: "Emily Eldose",
      position: "Alumni",
      image: Emily_Eldose
    },
    {
      id: 16,
      name: "Gautham Krishna",
      position: "Alumni",
      image: Gautham_Krishna_Joint_Secretary
    },
    {
      id: 17,
      name: "Gayathri",
      position: "Alumni",
      image: Gayathri
    },
    {
      id: 18,
      name: "Goru Harshitha",
      position: "Alumni",
      image: Goru_Harshitha_Content_Head
    },
    {
      id: 19,
      name: "Gunda Chandana",
      position: "Alumni",
      image: Gunda_Chandana_Treasurer
    },
    {
      id: 20,
      name: "Harinarayanan K",
      position: "Alumni",
      image: Harinarayanan_K
    },
    {
      id: 21,
      name: "Ivin Issac Georgi",
      position: "Alumni",
      image: Ivin_Issac_Georgi
    },
    {
      id: 22,
      name: "Jhansyharshitha Vankayalapati",
      position: "Alumni",
      image: Jhansyharshitha_Vankayalapati_Marketing_Head
    },
    {
      id: 23,
      name: "Kancharakuntla Reethu Reddy",
      position: "Alumni",
      image: Kancharakuntla_Reethu_Reddy
    },
    {
      id: 24,
      name: "Madhav Prabhu",
      position: "Alumni",
      image: Madhav_Prabhu
    },
    {
      id: 25,
      name: "Neelima M",
      position: "Alumni",
      image: Neelima_M_Asst_Secretary
    },
    {
      id: 26,
      name: "Nikhil Sreeraj",
      position: "Alumni",
      image: Nikhil_Sreeraj
    },
    {
      id: 27,
      name: "Niranjan Manoj",
      position: "Alumni",
      image: Niranjan_Manoj
    },
    {
      id: 28,
      name: "Panasa Teja",
      position: "Alumni",
      image: Panasa_Teja_Technical_Head
    },
    {
      id: 29,
      name: "Parvathi Mohan",
      position: "Alumni",
      image: Parvathi_Mohan_PRC_Head
    },
    {
      id: 30,
      name: "Peddireddy HemaVarsha",
      position: "Alumni",
      image: Peddireddy_HemaVarsha
    },
    {
      id: 31,
      name: "Ritu Anne Koshy",
      position: "Alumni",
      image: Ritu_Anne_Koshy
    },
    {
      id: 32,
      name: "Ruben Sinu",
      position: "Alumni",
      image: Ruben_Sinu
    },
    {
      id: 33,
      name: "S Jaivardhan",
      position: "Alumni",
      image: S_Jaivardhan
    },
    {
      id: 34,
      name: "Satyam Gupta",
      position: "Alumni",
      image: Satyam_Gupta
    },
    {
      id: 35,
      name: "Shijin P P",
      position: "Alumni",
      image: Shijin_P_P
    },
    {
      id: 36,
      name: "Shrishti Singh",
      position: "Alumni",
      image: Shrishti_Singh
    },
    {
      id: 37,
      name: "Sidharth Deepesh",
      position: "Alumni",
      image: Sidharth_Deepesh
    },
    {
      id: 38,
      name: "Sinjitha",
      position: "Alumni",
      image: Sinjitha
    },
    {
      id: 39,
      name: "Subhash Madhav",
      position: "Alumni",
      image: Subhash_Madhav
    },
    {
      id: 40,
      name: "Suvishal Kumar",
      position: "Alumni",
      image: Suvishal_Kumar_Secretary
    }
  ]

  const member = [
    {
      id: 1,
      name: "Linda Mary Zacharia",
      position: "Secretary",
      image: AbhijithB_Mohan_Alst_Secretary
    },
    {
      id: 2,
      name: "Harikrishnan N",
      position: "Quiz Head & Quizzing Hometeam Captain",
      image: Abhiram_K_R
    },
    {
      id: 3,
      name: "Aabid Mohamed A",
      position: "Joint Secretary",
      image: Abhishek_Gautam
    },
    {
      id: 4,
      name: "Lakshmipriya A",
      position: "Assistant Secretary",
      image: Abin_Gigo_Joseph_Treasurer
    },
    {
      id: 5,
      name: "Tilottama Basu",
      position: "Assistant Secretary",
      image: Abin_Gigo_Joseph_Treasurer
    },
    {
      id: 6,
      name: "S Sudhagar",
      position: "Treasurer",
      image: Adithya_Ankam
    },
    {
      id: 7,
      name: "Akash E K",
      position: "Treasurer",
      image: Akhil_R_Kurup
    },
    {
      id: 8,
      name: "Aswath P R",
      position: "Event Coordinator",
      image: Aleena_Ann_George_Marketing_Head
    },
    {
      id: 9,
      name: "Joel George John",
      position: "Event Coordinator",
      image: Asit_Kumar
    },
    {
      id: 10,
      name: "K Venkat Bharath",
      position: "Content Head",
      image: Bandi_Kapil_Kaushik
    },
    {
      id: 11,
      name: "Ananthu Krishnan U",
      position: "Design Head",
      image: Bhavin_P_V_Social_Media_Head
    },
    {
      id: 12,
      name: "Aswin S",
      position: "Media Head",
      image: Chinthalapudi_Hari_Prasad
    },
    {
      id: 13,
      name: "Shaik Nagur Basha",
      position: "PRC Head",
      image: Chitturi_Sakshvith_Sanjeev
    },
    {
      id: 14,
      name: "Yathul P Deep",
      position: "PRC Head",
      image: Deviprasad_V_R
    },
    {
      id: 15,
      name: "Albert T Alex",
      position: "Marketing Heads",
      image: Emily_Eldose
    },
    {
      id: 16,
      name: "P E Thanseehu Rahman",
      position: "Marketing Head",
      image: Gautham_Krishna_Joint_Secretary
    },
    {
      id: 17,
      name: "Pranav Prashant",
      position: "Tech Head",
      image: Gayathri
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