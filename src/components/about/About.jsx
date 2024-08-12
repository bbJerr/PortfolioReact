import React, { useState, useEffect } from 'react';
import './about.css';

const About = () => {
    const [view, setView] = useState('technical');

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
            aboutImageElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        };

        aboutImageElement.addEventListener('mouseenter', handleMouseEnter);
        aboutImageElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            aboutImageElement.removeEventListener('mouseenter', handleMouseEnter);
            aboutImageElement.removeEventListener('mouseleave', handleMouseLeave);
            aboutImageElement.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const technicalSkills = [
        { name: 'HTML', img: 'skills/tech-skill1.png' },
        { name: 'CSS', img: 'skills/tech-skill2.png' },
        { name: 'JavaScript', img: 'skills/tech-skill3.png' },
        { name: 'Java', img: 'skills/tech-skill4.png' },
        { name: 'MySQL', img: 'skills/tech-skill5.png' },
        { name: 'Spring', img: 'skills/tech-skill6.png' },
        { name: 'Bootstrap', img: 'skills/tech-skill7.png' },
        { name: 'Figma', img: 'skills/tech-skill8.png' },
        { name: 'React', img: 'skills/tech-skill9.png' },
    ];

    const softSkills = [
        { name: 'Communication', img: 'skills/soft-skill1.png' },
        { name: 'Teamwork', img: 'skills/soft-skill2.png' },
        { name: 'Problem Solving', img: 'skills/soft-skill3.png' },
        { name: 'Adaptability', img: 'skills/soft-skill4.png' },
        { name: 'Time Management', img: 'skills/soft-skill5.png' },
        { name: 'Creativity', img: 'skills/soft-skill6.png' },
    ];

    const renderSkills = (skills) => {
        return skills.map((skill, index) => {
            const isOdd = index % 2 !== 0;
    
            const barStyle = isOdd
                ? {
                    marginBottom: '15px',
                    padding: '10px',
                    borderRadius: '3rem',
                    background: 'var(--text-primary)',
                    boxShadow: '0 4px 10px var(--text-primary)',
                    transition: '0.3s',
                    color: 'var(--accent)',
                }
                : {};
    
            return (
                <div className="bar" style={barStyle} key={index}>
                    <div className="info">
                        <img src={skill.img} alt={skill.name} />
                        <span>{skill.name}</span>
                    </div>
                </div>
            );
        });
    };

    return (
        <div>
            <div className="about" id="about">
                <div className="about-image">
                    <img src='about.png' alt="Home image" />
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
                <div className="toggle-buttons">
                    <button
                        onClick={() => setView('technical')}
                        className={view === 'technical' ? 'active' : ''}
                    >
                        Technical Skills
                    </button>
                    <button
                        onClick={() => setView('soft')}
                        className={view === 'soft' ? 'active' : ''}
                    >
                        Soft Skills
                    </button>
                </div>
                <div className="container">
                    <div className="row" id="skillContainer">
                        {view === 'technical' ? renderSkills(technicalSkills) : renderSkills(softSkills)}
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
