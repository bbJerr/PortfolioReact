import React from 'react';
import StarsAnimation from '../../components/starsAnimation/StarsAnimation';
import Navbar from '../../components/navbar/Navbar';
import Home from '../../components/home/Home';
import About from '../../components/about/About';
import Projects from '../../components/projects/Projects';
import Contact from '../../components/contact/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import './index.css';

const Index = () => {
  return (
    <div>
      <div className="App">
            <StarsAnimation />
            <div className="main-content">
                <Navbar />
                <Home />
                <About />
                <Projects />
                <Contact />
            </div>
        </div>
    </div>
  )
}

export default Index;