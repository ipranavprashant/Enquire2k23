import React, { useState } from 'react';
import '../styles/Members.css';
import '../styles/Heading.css'

//Executive's Images
import Linda_Mary_Zacharia from "../../assets/members/2022-2023/Harikrishnan N.jpg";
import Harikrishnan_N from "../../assets/members/2022-2023/Harikrishnan N.jpg";
import Aabid_Mohamed from "../../assets/members/2022-2023/Aabid Mohamed.jpg";
import Lakshmipriya_S from "../../assets/members/2022-2023/Lakshmi Priya.S.jpeg";
import Tilottama_Basu from "../../assets/members/2022-2023/Lakshmi Priya.S.jpeg";
import S_Sudhagar from "../../assets/members/2022-2023/S Sudhagar.jpeg";
import Akash_EK from "../../assets/members/2022-2023/Akash E K.jpg";
import Aswath_PR from "../../assets/members/2022-2023/ASWATH P R.jpg";
import Joel_George_John from "../../assets/members/2022-2023/Joel George John.jpg";
import K_Venkat_Bharath from "../../assets/members/2022-2023/Joel George John.jpg";
import Ananthu_Krishnan from "../../assets/members/2022-2023/Joel George John.jpg";
import Aswin_Sanilkumar from "../../assets/members/2022-2023/Aswin Sanilkumar.jpg";
import Shaik_Nagurbasha from "../../assets/members/2022-2023/Shaik Nagurbasha.jpg";
import Yathul_P_Deep_Rermal from "../../assets/members/2022-2023/Yathul P Deep Rermal.jpg";
import Albert_T_Alex from "../../assets/members/2022-2023/Yathul P Deep Rermal.jpg";
import P_E_Thanseehu_Rahman from "../../assets/members/2022-2023/Yathul P Deep Rermal.jpg";
import Pranav_Prashant from "../../assets/members/2022-2023/Pranav Prashant.jpg";

const Executives = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const executives = [
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
            position: "Marketing Heads",
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