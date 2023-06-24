import React from 'react';
import './Card.css';

const Card = ({ language }) => {
    console.log(language);
    const { name, logo } = language;
    return (
        <div className='single-card'>
            <img src={logo} alt='logo' />
            <div className='card-info'>
                <p>{name}</p>
                <button >Start Practice </button>
            </div>

        </div>
    );
};

export default Card;