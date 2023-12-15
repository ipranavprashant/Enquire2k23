import React, { useState } from 'react';
import executiveData from '../utils/executiveData';
import '../styles/Members.css';
import '../styles/Heading.css'

const Executives = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPeople = executiveData.filter((m) =>
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