import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = ({ language }) => {
    // console.log(language);
    const { name, logo, id } = language;
    return (
        <div className='single-card'>
            <img src={logo} alt='logo' />
            <div className='card-info'>
                <p>{name}</p>
                <p><Link
                    to={`/language/${id}`}
                >Start Quiz</Link></p>
            </div>

        </div>
    );
};

export default Card;