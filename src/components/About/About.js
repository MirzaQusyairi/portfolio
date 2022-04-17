import React from 'react';
import './about.css';
import Img from '../../assets/me.jpg'

// import icons 
import { MdWorkOutline } from 'react-icons/md';
import { BsClipboardData } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';


const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className='container about-container'>
                <div className='about-me'>
                    <div className='about-img'>
                        <img src={Img} alt='about me image' />
                    </div>
                </div>
                <div className='about-content'>
                    <div className='about-cards'>
                        <article className='about-card'>
                            <MdWorkOutline size={30} className='about-icon' />
                            <h5>Experience</h5>
                            <small>2+ Years</small>
                        </article>
                        <article className='about-card'>
                            <BsClipboardData size={30}  className='about-icon' />
                            <h5>Projects</h5>
                            <small>5+ Completed</small>
                        </article>
                    </div>
                    <p className='about-detail'>
                        My name is <b>Mohammad Mirza Qusyairi</b>. You can call me <b>Mirza</b>. I am currently studying at Telkom University majoring in Informatics. Proficient in PHP, HTML, CSS, JavaScript and ReactJS. I am interested in UI/UX Design, Editing Photo & Video
                    </p>
                </div>
            </div>
        </section>
    )
};

export default About;

