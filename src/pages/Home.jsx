import './style.css';
import React from 'react';

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hobbies-content">
        <h1>Hi, I'm [Mary Azotillo]</h1>
        <p className="education-item">A passionate developer and lifelong learner.</p>
      </header>

      {/* About Section */}
      <section className="hobbies-content">
        <h2>About Me</h2>
        <p className="education-item">
          I'm a software developer specializing in front-end development, with a love for building intuitive and beautiful interfaces. 
          In my free time, I enjoy hiking, reading, and exploring new technologies.
        </p>
      </section>

      {/* Highlights */}
    </div>
  );
};

export default Home;
