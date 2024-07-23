import React from 'react';
import './projects.css';

import project1 from '../../image/projects/project1.png';
import project2 from '../../image/projects/project2.png';
import project3 from '../../image/projects/project3.png';
import project4 from '../../image/projects/project4.png';
import project5 from '../../image/projects/project5.png';

const projects = [
    {
        id: 1,
        image: project1,
        title: 'Dobu Martial Arts',
        description: 'A website for DoBu Martial Arts, a martial arts gym offering various classes, fitness training, and self-defense courses',
        github: 'https://github.com/bbJerr/DoBuWebsite',
    },
    {
        id: 2,
        image: project2,
        title: 'Enomy Finances',
        description: 'A financial website which offers services such as currency conversions and personalized investment plans.',
        github: 'https://github.com/bbJerr/EnomyFinances',
    },
    {
        id: 3,
        image: project3,
        title: 'Used Car Sales Portal',
        description: 'A website for selling, booking, and bidding quality pre-owned vehicles.',
        github: 'https://github.com/bbJerr/UsedCarSales',
    },
    {
        id: 4,
        image: project4,
        title: 'Rae Angelas Delectables',
        description: 'A catering website which offers you a variety of food menu and services.',
        github: 'https://github.com/bbJerr/RaeAngelasDelectables',
    },
    {
        id: 5,
        image: project5,
        title: 'Meals on Wheels',
        description: 'A website for a charity organization called Merry Meals. This website is dedicated to providing meals to the sick and elderly.',
        github: 'https://github.com/schrodinger41/merrymeals',
    },
];

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.308 3.438 9.794 8.205 11.388.598.111.82-.261.82-.577 0-.287-.011-1.053-.016-2.067-3.338.727-4.043-1.607-4.043-1.607-.548-1.39-1.339-1.762-1.339-1.762-1.093-.748.083-.734.083-.734 1.209.085 1.841 1.24 1.841 1.24 1.073 1.84 2.81 1.307 3.493.999.108-.777.42-1.307.764-1.607-2.664-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.379 1.237-3.22-.124-.303-.536-1.528.117-3.179 0 0 1.012-.323 3.313 1.23.963-.268 1.996-.4 3.016-.404 1.018.004 2.052.136 3.015.404 2.302-1.553 3.313-1.23 3.313-1.23.653 1.651.241 2.876.118 3.179.77.84 1.237 1.91 1.237 3.22 0 4.606-2.805 5.624-5.475 5.92.432.372.817 1.103.817 2.224 0 1.606-.015 2.897-.015 3.29 0 .319.222.692.827.575C20.562 22.091 24 17.606 24 12.297 24 5.67 18.627.297 12 .297z"/>
    </svg>
);

const Projects = () => {
    return (
        <section className="projects" id="projects">
            <h2 className="heading">Projects</h2>
            <div className="projects-container">
                {projects.map(project => (
                    <div key={project.id} className="project">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-description">{project.description}</p>
                        <a href={project.github} className="btn-proj" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon /> GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
