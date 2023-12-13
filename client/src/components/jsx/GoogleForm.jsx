import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/GoogleForm.css';
import '../styles/Heading.css';

const GoogleForm = () => {
    const { eventName } = useParams();
    return (
        <>
            <div className='beautify-heading'>
                <h1>{eventName ? `Registration for ${eventName}` : 'Registration'}</h1>
            </div>
            <div className='container-googleform'>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLScEk7Q8__umCT6VKOPGH5wjb20KR4FUHzGEwg12v2raRftMCg/viewform?embedded=true"
                    title="event registration form"
                    width="800"
                    height="1000"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                >
                    Loading…
                </iframe>
            </div>
        </>
    );
};

export default GoogleForm;
