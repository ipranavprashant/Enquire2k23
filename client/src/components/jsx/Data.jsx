import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../utils/constants';
const Data = () => {
    const [infos, setInfos] = useState([]);
    useEffect(() => {
        handleFetch();
    }, [])

    const handleFetch = async () => {
        try {
            const res = await fetch(`${BASE_URL}/show-registrations`);
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }
            const data = await res.json();
            setInfos(data.gotRegistration);
        }
        catch (error) {
            console.log("error");
        }
    }

    return (
        <>
            <div>
                Fetch API Data:
                {
                    infos.map((info) => (
                <div key={info._id}>
                    <h4>{info.name}</h4>
                    <h4>{info.email}</h4>
                    <h4>{info.college}</h4>
                    <h4>{info.mobilenumber}</h4>
                    <h4>{info.date}</h4>
                    <br />
                </div>
                ))
                }
            </div>
        </>
    )
}

export default Data