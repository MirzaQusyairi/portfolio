import React from 'react';
import './portfolio.css';

//import images 
import img1 from '../../assets/niccah.png';
import img2 from '../../assets/golang.png';
import img3 from '../../assets/hms.jpg';



const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Recent Work</h5>
            <h2>Portfolio</h2>
            <div className='container portfolio-container'>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img3} alt='' />
                    </div>
                    <h3>Hospital Management System - Backend</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/MirzaQusyairi/Hospital-Management-System' className='btn' target='_blank'>Github</a>
                        <a href='#' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img1} alt='' />
                    </div>
                    <h3>NICCAH - Digital Wedding Invitation</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/MirzaQusyairi/niccah' className='btn' target='_blank'>Github</a>
                        <a href='https://niccah.netlify.app/' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>
                <article className='portfolio-item'>
                    <div className='portfolio-img'>
                        <img src={img2} alt='' />
                    </div>
                    <h3>RentalKuy - Backend</h3>
                    <div className='portfolio-btn'>
                        <a href='https://github.com/MirzaQusyairi/rentalkuy-ca' className='btn' target='_blank'>Github</a>
                        <a href='#' className='btn btn-primary' target='_blank'>Application</a>
                    </div>
                </article>

            </div>
        </section>
    )
};

export default Portfolio;