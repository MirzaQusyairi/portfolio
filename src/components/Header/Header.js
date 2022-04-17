import React from 'react';
import Me from '../../assets/me(one).png'
// import Resume from '../../assets/My-resume-2022.pdf';
import Socials from './Socials';
import './header.css';

const Header = () => {
    return (
        <header id='header'>
            <div className='container header-container'>
                <h1>Mohammad Mirza Qusyairi</h1>
                <h4 className='text-light'>Student | Editor | Fullstack Developer</h4>
                <Socials />
                <div className='me'>
                    <img src={Me} alt='me' />
                </div>
                <a href='#' download className='resume'>Download Resume</a>
            </div>
        </header>
    )
};

export default Header; 