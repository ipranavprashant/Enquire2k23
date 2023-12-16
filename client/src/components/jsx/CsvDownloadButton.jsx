import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../utils/constants';
import '../styles/CsvDownloadButton.css';
import '../styles/Heading.css';
import { useNavigate } from 'react-router-dom';
import Admin from './Admin';

const CsvDownloadButton = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const isAuthenticated = localStorage.getItem('authToken');

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate("/admin");
        window.location.reload(true);
    };


    const fetchDataFromBackend = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(`${BASE_URL}/show-registrations`);
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }
            const fetchedData = await response.json();
            setData(fetchedData.gotRegistration);
        } catch (error) {
            console.error('Error fetching data:', error);
            setError('Error fetching data. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const downloadCSV = () => {
        if (data.length > 0) {
            const csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(convertToCSV(data));
            const link = document.createElement('a');

            link.setAttribute('href', csvContent);
            link.setAttribute('download', 'MyData.csv');
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const convertToCSV = (data) => {
        const header = Object.keys(data[0]).join(',');
        const rows = data.map((obj) => Object.values(obj).join(','));
        return header + '\n' + rows.join('\n');
    };

    useEffect(() => {
        fetchDataFromBackend();
    }, []);

    if (!isAuthenticated)
        return <Admin />
    return (
        <div>
            <div className="beautify-heading">
                <h1>Registrations</h1>
            </div>
            <div className='to-align'>
                <button className="button  button-accent" onClick={downloadCSV} disabled={isLoading || data.length === 0}>
                    Download CSV
                </button>&nbsp;&nbsp;
                <button className="button  button-accent" onClick={handleLogout} disabled={isLoading || data.length === 0}>
                    Logout
                </button>
            </div>
            <div className="csv-download-container">
                {data.length > 0 ? (
                    <div className="data-card-container">
                        {data.map((registration, index) => (
                            <div key={index} className="data-card">
                                <h3><b>Name:</b> {registration.name}</h3>
                                <p><b>Email:</b> {registration.email}</p>
                                <p><b>College:</b> {registration.college}</p>
                                <p><b>Phone number:</b> {registration.mobilenumber}</p>
                                <p><b>Date Registered:</b> {registration.date}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>zzz... No registrations yet.</p>
                )}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
        </div>
    );
};

export default CsvDownloadButton;
