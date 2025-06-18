// src/App.js
import React from 'react';
import Header from './Portfolio/Header';
import Hero from './Portfolio/Hero';
import About from './Portfolio/About';
import Projects from './Portfolio/Projects';
import Contact from './Portfolio/Contact';
import Footer from './Portfolio/Footer';
import 'Portfolio.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I'm [Your Name], a [Your Profession].</p>
      </div>
    </section>
  );
}

export default Hero;

// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>I am passionate about [mention your skills/interests]. I have experience in [mention relevant experience], and I love working on projects that involve [your favorite aspects of your profession].</p>
      </div>
    </section>
  );
}

export default About;

// src/components/Projects.js
import React, { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleMouseEnter = (index) => setHoveredProject(index);
  const handleMouseLeave = () => setHoveredProject(null);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        {[...Array(3)].map((_, index) => (
          <div
            className={`project-item ${hoveredProject === index ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <h3>Project {index + 1}</h3>
            <p>Description of project {index + 1}. Include what technologies you used and what the project is about.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
    setFormData({ name: '', email: '', message: '' }); // Reset the form
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

