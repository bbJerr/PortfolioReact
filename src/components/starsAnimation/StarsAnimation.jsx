import React, { useEffect } from 'react';
import './starsAnimation.css';

const StarsAnimation = () => {
    useEffect(() => {
        const stars = () => {
            let e = document.createElement('div');
            e.setAttribute('class', 'star');
            document.querySelector('.stars-container').appendChild(e);
            e.style.left = Math.random() * window.innerWidth + 'px';

            let size = 10 + Math.random() * 12;
            let duration = Math.random() * 3;

            e.style.fontSize = size + 'px';
            e.style.animationDuration = 2 + duration + 's';
            setTimeout(() => {
                document.querySelector('.stars-container').removeChild(e);
            }, 5000);
        };

        const interval = setInterval(stars, 50);
        return () => clearInterval(interval);
    }, []);

    return <div className="stars-container"></div>;
};

export default StarsAnimation;
