import React, { useState } from 'react';
import '../styles/Members.css';
import '../styles/Heading.css'

//Executives Images
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

const Executives = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const executives = [
        {
            id: 1,
            name: "Linda Mary Zacharia",
            position: "Secretary",
            image: AbhijithB_Mohan_Alst_Secretary
        },
        {
            id: 2,
            name: "Harikrishnan N",
            position: "Quizzing Hometeam Captain",
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
    const filteredPeople = executives.filter((m) =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <div className='beautify-heading'>
                <h1>Executives</h1>
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
            </div>
        </>
    );
};

export default Executives;