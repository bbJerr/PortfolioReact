import React from 'react';
import './projects.css';

const projects = [
    {
        id: 1,
        image: 'projects/project1.png',
        title: 'Dobu Martial Arts',
        description: 'A website for DoBu Martial Arts, a martial arts gym offering various classes, fitness training, and self-defense courses',
        languages: ['HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/bbJerr/DoBuWebsite',
    },
    {
        id: 2,
        image: 'projects/project2.png',
        title: 'Enomy Finances',
        description: 'A financial website which offers services such as currency conversions and personalized investment plans.',
        languages: ['Java', 'CSS', 'MySQL', 'Spring'],
        github: 'https://github.com/bbJerr/EnomyFinances',
    },
    {
        id: 3,
        image: 'projects/project3.png',
        title: 'Used Car Sales Portal',
        description: 'A website for selling, booking, and bidding quality pre-owned vehicles.',
        languages: ['Java', 'CSS', 'JavaScript', 'MySQL', 'Spring'],
        github: 'https://github.com/bbJerr/UsedCarSales',
    },
    {
        id: 4,
        image: 'projects/project4.png',
        title: 'Rae Angelas Delectables',
        description: 'A catering website which offers you a variety of food menu and services.',
        languages: ['HTML', 'CSS', 'React'],
        github: 'https://github.com/bbJerr/RaeAngelasDelectables',
        website: 'https://raeangelasdelectables.netlify.app/',
    },
    {
        id: 5,
        image: 'projects/project5.png',
        title: 'Meals on Wheels',
        description: 'A website for a charity organization called Merry Meals. This website is dedicated to providing meals to the sick and elderly.',
        languages: ['PHP', 'Blade', 'CSS'],
        github: 'https://github.com/schrodinger41/merrymeals',
    },
    {
        id: 6,
        image: 'projects/project6.png',
        title: 'Bullet Journal',
        description: 'An online bullet journal to document and keep track of your daily notes, mood, and habits.',
        languages: ['HTML', 'CSS', 'React'],
        github: 'https://github.com/bbJerr/bulletJournal',
        website: 'https://online-bujo.netlify.app/',
    },
    {
        id: 7,
        image: 'projects/project7.png',
        title: 'Random Nyan Facts',
        description: 'A Random Cat Fact Generator!!! Also my very first API project.',
        languages: ['HTML', 'CSS', 'React'],
        github: 'https://github.com/bbJerr/catFacts',
        website: 'https://random-nyan-facts.netlify.app/',
    },
    {
        id: 8,
        image: 'projects/project8.png',
        title: 'Brain Tease',
        description: 'A trivia website to test your knowledge on random topics with the use of API.',
        languages: ['HTML', 'CSS', 'React'],
        github: 'https://github.com/bbJerr/brainTease',
        website: 'https://brain-tease.netlify.app/',
    },
    {
        id: 9,
        image: 'projects/project9.png',
        title: 'ConVo',
        description: 'A real time chat website which allows you to enter any rooms of the same name to chat with other people.',
        languages: ['HTML', 'CSS', 'React', 'Firebase'],
        github: 'https://github.com/bbJerr/ConVo',
        website: 'https://con-vo.netlify.app/',
    }
];

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.308 3.438 9.794 8.205 11.388.598.111.82-.261.82-.577 0-.287-.011-1.053-.016-2.067-3.338.727-4.043-1.607-4.043-1.607-.548-1.39-1.339-1.762-1.339-1.762-1.093-.748.083-.734.083-.734 1.209.085 1.841 1.24 1.841 1.24 1.073 1.84 2.81 1.307 3.493.999.108-.777.42-1.307.764-1.607-2.664-.303-5.467-1.332-5.467-5.93 0-1.31.469-2.379 1.237-3.22-.124-.303-.536-1.528.117-3.179 0 0 1.012-.323 3.313 1.23.963-.268 1.996-.4 3.016-.404 1.018.004 2.052.136 3.015.404 2.302-1.553 3.313-1.23 3.313-1.23.653 1.651.241 2.876.118 3.179.77.84 1.237 1.91 1.237 3.22 0 4.606-2.805 5.624-5.475 5.92.432.372.817 1.103.817 2.224 0 1.606-.015 2.897-.015 3.29 0 .319.222.692.827.575C20.562 22.091 24 17.606 24 12.297 24 5.67 18.627.297 12 .297z"/>
    </svg>
);

const WebsiteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
        <path d="M12 0C5.372 0 0 5.372 0 12c0 6.628 5.372 12 12 12 6.628 0 12-5.372 12-12C24 5.372 18.628 0 12 0zm0 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm.25-17.88v3.06a6.5 6.5 0 0 1 4.75 4.75h3.06A8.5 8.5 0 0 0 12.25 4.12zm-1.5 0A8.5 8.5 0 0 0 4 9.25h3.06a6.5 6.5 0 0 1 4.69-4.69V4.12zm6.49 11.51a6.5 6.5 0 0 1-4.69 4.69v3.06a8.5 8.5 0 0 0 7.25-7.25h-2.56zm-8.69 0a6.5 6.5 0 0 1-4.69-4.69H2a8.5 8.5 0 0 0 7.25 7.25v-2.56zm3.19 0v-3.06a6.5 6.5 0 0 1-4.75-4.75H4.12A8.5 8.5 0 0 0 11.5 19.88zm1.5-3.19a8.5 8.5 0 0 0 7.25-7.25h-3.06a6.5 6.5 0 0 1-4.75 4.75v2.5z" />
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
                        <div className="buttons-container">
                            <a href={project.github} className="btn-proj github-btn" target="_blank" rel="noopener noreferrer" data-languages={project.languages.join(', ')}>
                                <GitHubIcon /> GitHub
                            </a>
                            {project.website && (
                                <a href={project.website} className="btn-proj" target="_blank" rel="noopener noreferrer">
                                    <WebsiteIcon /> Website
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};


export default Projects;
