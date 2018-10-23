import React from 'react';

import './style.css'

const Card = ({numero, palo}) => (
    <div className="card">
        <div className="status status-sup">
            <span>{ numero }</span>
        </div>
        <div className="status status-inf">
            <span>{ numero }</span>
        </div>
    </div>
);

export default Card;