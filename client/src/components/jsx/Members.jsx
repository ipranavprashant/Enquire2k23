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

//B21 Executives
import Linda_Mary_Zacharia from "../../assets/members/2022-2023/Harikrishnan N.jpg";
import Harikrishnan_N from "../../assets/members/2022-2023/Harikrishnan N.jpg";
import Aabid_Mohamed from "../../assets/members/2022-2023/Aabid Mohamed.jpg";
import Lakshmipriya_S from "../../assets/members/2022-2023/Lakshmi Priya.S.jpeg";
import Tilottama_Basu from "../../assets/members/2022-2023/Tilottama Basu.jpg";
import S_Sudhagar from "../../assets/members/2022-2023/S Sudhagar.jpeg";
import Akash_EK from "../../assets/members/2022-2023/Akash E K.jpg";
import Aswath_PR from "../../assets/members/2022-2023/ASWATH P R.jpg";
import Joel_George_John from "../../assets/members/2022-2023/Joel George John.jpg";
import K_Venkat_Bharath from "../../assets/members/2022-2023/Joel George John.jpg";
import Ananthu_Krishnan from "../../assets/members/2022-2023/Ananthu.jpg";
import Aswin_Sanilkumar from "../../assets/members/2022-2023/Aswin Sanilkumar.jpg";
import Shaik_Nagurbasha from "../../assets/members/2022-2023/Shaik Nagurbasha.jpg";
import Yathul_P_Deep_Rermal from "../../assets/members/2022-2023/Yathul P Deep Rermal.jpg";
import Albert_T_Alex from "../../assets/members/2022-2023/Albert T Alex.jpg";
import P_E_Thanseehu_Rahman from "../../assets/members/2022-2023/Thanseehu Rahman.jpg";
import Pranav_Prashant from "../../assets/members/2022-2023/Pranav_Prashant.jpg";

//B21 Members
import Junaid_Ashraf from "../../assets/members/2022-2023/Junaid Ashraf.jpg";
import M_Bhanu_Prasad from "../../assets/members/2022-2023/M BHANU PRASAD.jpg";

//B22 Members
import Adil from "../../assets/members/2023-2024/ADIL B220005EE.jpg";
import Amarjith_T_K from "../../assets/members/2023-2024/AMARJITH T K.jpeg";
import Anupoju_Shree_Vignesh from "../../assets/members/2023-2024/ANUPOJU SHREE VIGNESH.jpg";
import Aravind_Anil from "../../assets/members/2023-2024/ARAVIND ANIL.jpg";
import Arya_R_Krishnan from "../../assets/members/2023-2024/ARYA R KRISHNAN.jpg";
import Ashwin_A_Nair from "../../assets/members/2023-2024/Ashwin A Nair.jpg";
import Astha from "../../assets/members/2023-2024/Astha.jpg";
import Bharadwaj_VP from "../../assets/members/2023-2024/Bharadwaj V P.jpg";
import Bysani_Karthik from "../../assets/members/2023-2024/BYSANI KARTHIK.jpg";
import Deepthi_Das from "../../assets/members/2023-2024/Deepthi Das M.jpg";
import Edala_Harshitha_Satya from "../../assets/members/2023-2024/EDALA HARSHITHA SATYA.jpg";
import Fayis_Rahman from "../../assets/members/2023-2024/FAYIS RAHMAN THADATHIL.jpg";
import Gaurav_Kumar from "../../assets/members/2023-2024/GAURAV KUMAR.jpg";
import Gokhul_G from "../../assets/members/2023-2024/GOKHUL G.jpg";
import Govind_N from "../../assets/members/2023-2024/Govind N.jpg";
import Jyotsna_Raja from "../../assets/members/2023-2024/JYOTSNA RAJA.jpg";
import Kathiravan_P from "../../assets/members/2023-2024/KATHIRAVAN P.jpg";
import Mohammed_Irfan_TM from "../../assets/members/2023-2024/MOHAMMED IRFAN T M.jpg";
import Muhammed_Shanis from "../../assets/members/2023-2024/MUHAMMED SHANIS.jpg";
import Mullapudi_Pujitha from "../../assets/members/2023-2024/MULLAPUDI PUJITHA.jpg";
import Mutta_Divya_Sri from "../../assets/members/2023-2024/MUTTA DIVYA SRI.jpg";
import Nakhireddi_Omkar from "../../assets/members/2023-2024/NAKHIREDDI OMKAR.jpeg";
import Nirmal_Fageria from "../../assets/members/2023-2024/NIRMAL FAGERIA.jpg";
import Pranaya_TP from "../../assets/members/2023-2024/PRANAYA T P.jpg";
import Smriti from "../../assets/members/2023-2024/SMRITI B220067EC.jpg";

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
      image: Linda_Mary_Zacharia
    },
    {
      id: 2,
      name: "Harikrishnan N",
      position: "Quizzing Hometeam Captain",
      image: Harikrishnan_N
    },
    {
      id: 3,
      name: "Aabid Mohamed A",
      position: "Joint Secretary",
      image: Aabid_Mohamed
    },
    {
      id: 4,
      name: "Lakshmipriya A",
      position: "Assistant Secretary",
      image: Lakshmipriya_S
    },
    {
      id: 5,
      name: "Tilottama Basu",
      position: "Assistant Secretary",
      image: Tilottama_Basu
    },
    {
      id: 6,
      name: "S Sudhagar",
      position: "Treasurer",
      image: S_Sudhagar
    },
    {
      id: 7,
      name: "Akash E K",
      position: "Treasurer",
      image: Akash_EK
    },
    {
      id: 8,
      name: "Aswath P R",
      position: "Event Coordinator",
      image: Aswath_PR
    },
    {
      id: 9,
      name: "Joel George John",
      position: "Event Coordinator",
      image: Joel_George_John
    },
    {
      id: 10,
      name: "K Venkat Bharath",
      position: "Content Head",
      image: K_Venkat_Bharath
    },
    {
      id: 11,
      name: "Ananthu Krishnan U",
      position: "Design Head",
      image: Ananthu_Krishnan
    },
    {
      id: 12,
      name: "Aswin S",
      position: "Media Head",
      image: Aswin_Sanilkumar
    },
    {
      id: 13,
      name: "Shaik Nagur Basha",
      position: "PRC Head",
      image: Shaik_Nagurbasha
    },
    {
      id: 14,
      name: "Yathul P Deep",
      position: "PRC Head",
      image: Yathul_P_Deep_Rermal
    },
    {
      id: 15,
      name: "Albert T Alex",
      position: "Marketing Head",
      image: Albert_T_Alex
    },
    {
      id: 16,
      name: "P E Thanseehu Rahman",
      position: "Marketing Head",
      image: P_E_Thanseehu_Rahman
    },
    {
      id: 17,
      name: "Pranav Prashant",
      position: "Tech Head",
      image: Pranav_Prashant
    },
    {
      id: 18,
      name: "Junaid Ashraf",
      position: "Member",
      image: Junaid_Ashraf
    },
    {
      id: 19,
      name: "M Bhanu Prasad",
      position: "Member",
      image: M_Bhanu_Prasad
    },
    {
      id: 20,
      name: "Adil",
      position: "Member",
      image: Adil
    },
    {
      id: 21,
      name: "Amarjith T K",
      position: "Member",
      image: Amarjith_T_K
    },
    {
      id: 22,
      name: "Anupoju Shree Vignesh",
      position: "Member",
      image: Anupoju_Shree_Vignesh
    },
    {
      id: 23,
      name: "Aravind Anil",
      position: "Member",
      image: Aravind_Anil
    },
    {
      id: 24,
      name: "Arya R Krishnan",
      position: "Member",
      image: Arya_R_Krishnan
    },
    {
      id: 25,
      name: "Ashwin A Nair",
      position: "Member",
      image: Ashwin_A_Nair
    },
    {
      id: 26,
      name: "Astha",
      position: "Member",
      image: Astha
    },
    {
      id: 27,
      name: "Bharadwaj V P",
      position: "Member",
      image: Bharadwaj_VP
    },
    {
      id: 28,
      name: "Bysani Karthik",
      position: "Member",
      image: Bysani_Karthik
    },
    {
      id: 29,
      name: "Deepthi Das",
      position: "Member",
      image: Deepthi_Das
    },
    {
      id: 30,
      name: "Edala Harshitha Satya",
      position: "Member",
      image: Edala_Harshitha_Satya
    },
    {
      id: 31,
      name: "Fayis Rahman",
      position: "Member",
      image: Fayis_Rahman
    },
    {
      id: 32,
      name: "Gaurav Kumar",
      position: "Member",
      image: Gaurav_Kumar
    },
    {
      id: 33,
      name: "Gokhul G",
      position: "Member",
      image: Gokhul_G
    },
    {
      id: 34,
      name: "Govind N",
      position: "Member",
      image: Govind_N
    },
    {
      id: 35,
      name: "Jyotsna Raja",
      position: "Member",
      image: Jyotsna_Raja
    },
    {
      id: 36,
      name: "Kathiravan P",
      position: "Member",
      image: Kathiravan_P
    },
    {
      id: 37,
      name: "Mohammed Irfan TM",
      position: "Member",
      image: Mohammed_Irfan_TM
    },
    {
      id: 38,
      name: "Muhammed Shanis",
      position: "Member",
      image: Muhammed_Shanis
    },
    {
      id: 39,
      name: "Mullapudi Pujitha",
      position: "Member",
      image: Mullapudi_Pujitha
    },
    {
      id: 40,
      name: "Mutta Divya Sri",
      position: "Member",
      image: Mutta_Divya_Sri
    },
    {
      id: 41,
      name: "Nakhireddi Omkar",
      position: "Member",
      image: Nakhireddi_Omkar
    },
    {
      id: 42,
      name: "Nirmal Fageria",
      position: "Member",
      image: Nirmal_Fageria
    },
    {
      id: 43,
      name: "Pranaya TP",
      position: "Member",
      image: Pranaya_TP
    },
    {
      id: 44,
      name: "Smriti",
      position: "Member",
      image: Smriti
    }
  ]

  // Filtering event cards based on the search term
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
                    loading='lazy'
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