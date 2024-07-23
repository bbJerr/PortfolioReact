import React, { useEffect } from 'react';
import './about.css';

import aboutImage from '../../image/aboutImg.png';
import skill1 from '../../image/skills/skill1.png';
import skill2 from '../../image/skills/skill2.png';
import skill3 from '../../image/skills/skill3.png';
import skill4 from '../../image/skills/skill4.png';
import skill5 from '../../image/skills/skill5.png';
import skill6 from '../../image/skills/skill6.png';
import skill7 from '../../image/skills/skill7.png';
import skill8 from '../../image/skills/skill8.png';


const barStyle = {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '3rem',
    background: 'var(--text-primary)',
    boxShadow: '0 4px 10px var(--text-primary)',
    transition: '0.3s',
    color: 'var(--accent)'
};

const About = () => {

    useEffect(() => {
        const aboutImageElement = document.querySelector('.about-image img');

        const handleMouseMove = (event) => {
            const rect = aboutImageElement.getBoundingClientRect();
            const offsetX = event.clientX - rect.left;
            const offsetY = event.clientY - rect.top;
            const rotateX = ((offsetY / rect.height) - 0.5) * 20;
            const rotateY = ((offsetX / rect.width) - 0.5) * -20;

            aboutImageElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        };

        const handleMouseEnter = () => {
            aboutImageElement.addEventListener('mousemove', handleMouseMove);
        };

        const handleMouseLeave = () => {
            aboutImageElement.removeEventListener('mousemove', handleMouseMove);
            aboutImageElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'; // Reset transform on leave
        };

        aboutImageElement.addEventListener('mouseenter', handleMouseEnter);
        aboutImageElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            aboutImageElement.removeEventListener('mouseenter', handleMouseEnter);
            aboutImageElement.removeEventListener('mouseleave', handleMouseLeave);
            aboutImageElement.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div>
            <div className="about" id="about">
                <div className="about-image">
                    <img src={aboutImage} alt="Home image" />
                </div>   
                <div className="about-info">     
                <h2>Get to Know Me</h2>
                <h3>Software Engineer</h3>
                <p>
                Aspiring full-stack developer and dedicated software engineering student with a strong foundation in programming principles and a passion 
                for creating efficient, user-friendly applications. Currently expanding my skills in both front-end and back-end development through academic 
                coursework and personal projects.
                </p>
                <div className="personal-info">
                    <h3>Personal Information</h3>
                    <ul>
                        <li><span>Name: </span>Jerra Kirsten R. Javier</li>
                        <li><span>Age: </span>19</li>
                        <li><span>Address: </span>Cebu, Philippines</li>
                        <li><span>Email: </span>jerrakirstenr22@gmail.com</li>
                        <li><span>Contact No: </span>+63 967 012 2399</li>
                    </ul>
                </div>
                </div>      
            </div>

            <div className="skills" id="skills">
                <h2 className="heading">Skills</h2>
                <div className="container">
                    <div className="row" id="skillContainer">
                        <div className="bar" style={barStyle}>
                            <div className="info">
                                <img src={skill1} alt="skill1" />
                                <span>HTML</span>
                                {/* <div className="progress">
                                    <div className="progress-bar" style={{width: '90%'}}>90%</div>
                                </div> */}
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <img src={skill2} alt="skill2" />
                                <span>CSS</span>
                                {/* <div className="progress">
                                    <div className="progress-bar" style={{width: '90%'}}>80%</div>
                                </div> */}
                            </div>
                        </div>
                        <div className="bar" style={barStyle}>
                            <div className="info">
                                <img src={skill3} alt="skill3" />
                                <span>JavaScript</span>
                                {/* <div className="progress">
                                    <div className="progress-bar" style={{width: '90%'}}>65%</div>
                                </div> */}
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <img src={skill4} alt="skill4" />
                                <span>Java</span>
                                {/* <div className="progress">
                                    <div className="progress-bar" style={{width: '90%'}}>50%</div>
                                </div> */}
                            </div>
                        </div>
                        <div className="bar" style={barStyle}>
                            <div className="info">
                                <img src={skill5} alt="skill5" />
                                <span>MySQL</span>
                                {/* <div className="progress">
                                    <div className="progress-bar" style={{width: '90%'}}>75%</div>
                                </div> */}
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <img src={skill6} alt="skill6" />
                                <span>Spring</span>
                                {/* <div className="progress">
                                    <div className="progress-bar" style={{width: '90%'}}>70%</div>
                                </div> */}
                            </div>
                        </div>
                        <div className="bar"  style={barStyle}>
                            <div className="info">
                                <img src={skill7} alt="skill7" />
                                <span>Bootstrap</span>
                                {/* <div className="progress">
                                    <div className="progress-bar" style={{width: '90%'}}>85%</div>
                                </div> */}
                            </div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <img src={skill8} alt="skill8" />
                                <span>Figma</span>
                                {/* <div className="progress">
                                    <div className="progress-bar" style={{width: '90%'}}>80%</div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="education" id="education">
                <h2 className="heading">My <span>Education</span></h2>
                <div className="timeline">
                    <div className="container right">
                        <div className="content">
                            <div className="tag">
                                <h2>Lithan Academy - Singapore <span className="year"><br/>(2023-current)</span></h2>
                            </div>
                            <div className="decs">
                                <p>Currently studying Software Engineering at Lithan Academy, an institution renowned for its digital skills training 
                                    in areas such as digital marketing, data analytics, and software development.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container left">
                        <div className="content">
                            <div className="tag">
                                <h2>University of Cebu - Banilad <span className="year"><br/>(2023-current)</span></h2>
                            </div>
                            <div className="decs">
                                <p>Enrolled in the BSIT-SE (Bachelor of Science in Information Technology Specialized in Software Engineering) program 
                                    at the University of Cebu, Banilad, focusing on advanced software development techniques and technologies.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container right">
                        <div className="content">
                            <div className="tag">
                                <h2>Academia de San Jose <span className="year"><br/>(2011-2023)</span></h2>
                            </div>
                            <div className="decs">
                                <p>Completed grade school to senior high school at Academia de San Jose, Mandaue City, Philippines. Achieved consistent 
                                    academic excellence and graduated 8th overall in my batch.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
