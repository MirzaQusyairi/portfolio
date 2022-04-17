import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Socials = () => {
    return (
        <div className='socials'>
            <a href='https://id.linkedin.com/in/mirzaqusyairi' target='_blank'><BsLinkedin size={25}/></a>
            <a href='https://github.com/MirzaQusyairi' target='_blank'><FaGithub size={25}/></a>
            <a href='https://dribbble.com/mirzaq' target='_blank'><FiDribbble size={25}/></a>
            <a href='https://instagram.com/mirzaqusyairii' target='_blank'><FaInstagram size={25}/></a>
            <a href='https://twitter.com/mirzayah' target='_blank'><FaTwitter size={25}/></a>
        </div>
    )
};

export default Socials; 