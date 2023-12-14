import React from 'react';

const SuccessCard = (props) => {
    return (
        <div className="card">
            <div style={{ borderRadius: '200px', height: '200px', width: '200px', background: '#F8FAF5', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {/* Inline SVG for checkmark */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="#9ABC66">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 18 21 6l-1.41-1.41L9 16.17z" />
                </svg>
            </div>
            <h1 style={{ color: '#88B04B', fontWeight: 600, fontSize: '25px', marginBottom: '10px', display: 'flex', justifyContent: 'center', textAlign:'center'}}>{props.message}</h1>
        </div>
    );
};

export default SuccessCard;
