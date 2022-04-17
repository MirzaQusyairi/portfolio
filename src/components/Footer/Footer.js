import React from 'react';
import {FaHeart} from 'react-icons/fa';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-container'>
                <a href='#header' className='footer-icon'> Made with <FaHeart className='icon'/>  By. MirzaQusyairi</a>
            </div>
        </footer>
    )
};

export default Footer; 