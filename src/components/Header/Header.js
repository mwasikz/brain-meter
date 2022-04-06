import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './logo.png'

const Header = () => {
    return (

        <div className='header drop-shadow-lg shadow-lg ' >
            <Link to='/' className='title '>
                <img src={logo} className='w-80' />
            </Link>
        </div>

    )
}

export default Header