import React, { useEffect, useRef } from 'react';
import './home.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaGithub } from 'react-icons/fa';
import { FaCircleDown } from "react-icons/fa6";

const Home = () => {
    const typingTextRef = useRef(null);

    useEffect(() => {
        const typingTextElement = typingTextRef.current;
        const words = ['Web Developer', 'Frontend Developer', 'Web Designer', 'Software Engineer', 'Software Developer'];
        let wordIndex = 0;
        let charIndex = 0;
        let typing = true;

        function type() {
            const currentWord = words[wordIndex];
            if (typing) {
                typingTextElement.textContent = currentWord.substring(0, charIndex++);
                if (charIndex > currentWord.length) {
                    typing = false;
                    setTimeout(() => typing = true, 2000);
                }
            } else {
                typingTextElement.textContent = currentWord.substring(0, charIndex--);
                if (charIndex < 0) {
                    typing = true;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            }
            setTimeout(type, typing ? 100 : 50);
        }

        type();
    }, []);

    return (
        <section className="home" id="home">
            <div className="content">
                <h1>Jerra Kirsten Javier</h1>
                <h3>A <span className="typing-text" ref={typingTextRef}></span></h3>
                <a href="https://youtu.be/x2m07Rhp50c" target="_blank" className="btn">
                    <span>Video Introduction</span>
                    <FaCircleDown />
                </a>
                <a href="#" className="btn" id="download-cv">
                    <span>Download CV</span>
                    <FaCircleDown />
                </a>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/jerra-kirsten-javier-8982792b2/" target="_blank">
                        <FaLinkedin />
                    </a>
                    <a href="https://www.facebook.com/jerrakirsten.javier" target="_blank">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/bb_jerr/" target="_blank">
                        <FaInstagram />
                    </a>
                    <a href="https://github.com/bbJerr" target="_blank">
                        <FaGithub />
                    </a>
                </div>               
            </div>
            <div className="image">
                <img src='home.png' alt="Home image" />
            </div>
        </section>
    );
};

export default Home;
