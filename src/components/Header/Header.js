import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='nav-container'>
            <div className='logo-container'>
                <img src='https://img.freepik.com/premium-vector/quiz-logo_2728-12.jpg?w=2000' alt='logo-img' />
            </div>

            <div className='route-container'>
                <Link to='/'>Home</Link>
                <Link to='/quiz'>Quiz</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </nav>
    );
};

export default Header;