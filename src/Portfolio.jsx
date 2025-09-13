import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Import your local photo and resume files
import profilePhoto from './assets/anusha.jpg';
import resumeFile from './assets/anusha_resume.pdf';

const socialMediaLinks = {
  linkedin: "https://www.linkedin.com/in/anusha-c-265978301?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  github: "https://github.com/ANUSHAKAISETTY",
  email: "mailto:anushakaisetty@gmail.com"
};

const projectsData = [
  {
    title: "Anomaly Detection in Stock Market Trends",
    description: "Engineered a Streamlit dashboard to detect anomalies in stock market behavior using the Isolation Forest algorithm, with real-time analysis and automated email alerts.",
    github: "https://github.com/ANUSHAKAISETTY/Stock-Market-Anomaly-Detection"
  },
  {
    title: "MedPredict - Disease Risk Prediction",
    description: "Developed a multi-model disease prediction tool that helps users predict various diseases using a trained Random Forest Model, integrated into a single interface.",
    github: "https://github.com/ANUSHAKAISETTY/Med-Predict"
  },
  {
    title: "Mushroom Classification",
    description: "Built a machine learning model to classify mushrooms as edible or poisonous using the UCI Mushroom Dataset. Deployed as a desktop GUI application for public use.",
    github: "https://github.com/ANUSHAKAISETTY/Mushroom-Classification-GUI"
  },
  {
    title: "Eco Tracker - Carbon Footprint App",
    description: "Designed a Flutter-based mobile application to help users monitor, reduce, and offset their carbon footprints with AI-generated tips and gamified challenges.",
    github: "https://github.com/ANUSHAKAISETTY/Eco_Tracker"
  }
];

const skillsData = [
  { name: "Python", percentage: 90 },
  { name: "Java", percentage: 80 },
  { name: "C/C++", percentage: 75 },
  { name: "JavaScript", percentage: 70 },
  { name: "Machine Learning", percentage: 85 },
  { name: "Data Science", percentage: 80 },
  { name: "SQL", percentage: 75 },
  { name: "Git & GitHub", percentage: 90 }
];

const achievementsData = [
  "1st Prize - GRT Institute of Engineering and Technology for presenting a Heart Disease Prediction research paper.",
  "Inter-college Event Award - Dr. M.G.R. Educational and Research Institute for active participation in external technical events.",
  "1st Place - Seal the Deal, Sri Ramachandra Faculty of Engineering and Technology for business pitch excellence.",
  "2nd Prize - Paper Presentation, Rajalakshmi Engineering College for presenting the MedPredict research paper.",
  "Conducted a symposium at IGEN ENSAV CLUB and worked as a registration committee in the department symposium SPARKLE’24."
];

const App = () => {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f0f2f5;
          color: #333;
          line-height: 1.6;
        }
        .container {
          max-width: 1000px;
          margin: auto;
          overflow: hidden;
          padding: 0 2rem;
        }
        .section {
          padding: 4rem 0;
          border-bottom: 1px solid #ddd;
        }
        #home {
          text-align: center;
          background: #fff;
          padding: 6rem 0;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        #home img {
          border-radius: 50%;
          width: 180px;
          height: 180px;
          object-fit: cover;
          border: 6px solid #6c5ce7;
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
        }
        #home h1 {
          margin-top: 1.5rem;
          font-size: 2.5rem;
          color: #2c3e50;
        }
        #home p {
          max-width: 700px;
          margin: 1rem auto;
          font-size: 1.1rem;
          color: #555;
        }
        .resume-btn {
          display: inline-block;
          background: #6c5ce7;
          color: #fff;
          padding: 1rem 2.5rem;
          margin-top: 2rem;
          text-decoration: none;
          border-radius: 50px;
          transition: background-color 0.3s, transform 0.2s;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .resume-btn:hover {
          background: #5a4ac3;
          transform: translateY(-2px);
        }
        .project-card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }
        .project-card {
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          padding: 2rem;
          transition: transform 0.3s;
        }
        .project-card:hover {
          transform: translateY(-5px);
        }
        .project-card h3 {
          margin-top: 0;
          color: #6c5ce7;
          font-size: 1.5rem;
        }
        .project-card p {
          color: #666;
        }
        .repo-btn {
          display: inline-block;
          background: #2c3e50;
          color: #fff;
          padding: 0.75rem 1.5rem;
          margin-top: 1rem;
          text-decoration: none;
          border-radius: 8px;
          transition: background-color 0.3s;
        }
        .repo-btn:hover {
          background: #34495e;
        }
        .skills-list {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }
        .skill-item {
          background: #fff;
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .skill-item h4 {
          margin: 0 0 0.5rem 0;
        }
        .progress-bar {
          background-color: #e0e0e0;
          border-radius: 10px;
          height: 12px;
          overflow: hidden;
        }
        .progress {
          background-color: #6c5ce7;
          height: 100%;
          border-radius: 10px;
          transition: width 0.5s ease-in-out;
        }
        .achievements-list {
          list-style: none;
          padding: 0;
          display: grid;
          gap: 15px;
        }
        .achievements-list li {
          background: #fff;
          padding: 1.2rem;
          border-left: 5px solid #6c5ce7;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        }
        .social-media-container {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          margin-top: 2rem;
        }
        .social-media-icon {
          font-size: 3rem;
          color: #6c5ce7;
          transition: color 0.3s, transform 0.2s;
        }
        .social-media-icon:hover {
          color: #5a4ac3;
          transform: scale(1.1);
        }
        h2 {
          text-align: center;
          font-size: 2.2rem;
          margin-bottom: 2rem;
          color: #2c3e50;
        }
      `}</style>
      <div className="container">
        <section id="home" className="section">
          <img src={profilePhoto} alt="Anusha C" />
          <h1>Anusha C</h1>
          <p>
            Dedicated computer science professional with a strong focus on problem-solving and delivering efficient solutions. Experienced in working on diverse projects and committed to leveraging technology to address real-world challenges.
          </p>
          <a href={resumeFile} className="resume-btn" target="_blank" rel="noopener noreferrer">
            Get Resume
          </a>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I am a highly motivated and detail-oriented final-year B.Tech IT student with a passion for building efficient, user-centric software solutions. I demonstrate strong programming abilities in Python, Java, and C++, with hands-on experience in machine learning, system design, and Linux-based development. I have a proven ability to work on collaborative software projects, quickly learn new technologies, and solve problems at scale. I am enthusiastic about contributing to impactful engineering challenges in a fast-paced, innovative environment.
            </p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-card-container">
            {projectsData.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.github} className="repo-btn" target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <ul className="skills-list">
            {skillsData.map((skill, index) => (
              <li key={index} className="skill-item">
                <h4>{skill.name}</h4>
                <div className="progress-bar">
                  <div
                    className="progress"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="achievements" className="section">
          <h2>Achievements</h2>
          <ul className="achievements-list">
            {achievementsData.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </section>

        <section id="contact" className="section">
          <h2>Connect with me</h2>
          <div className="social-media-container">
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-media-icon" />
            </a>
            <a href={socialMediaLinks.github} target="_blank" rel="noopener noreferrer">
              <FaGithub className="social-media-icon" />
            </a>
            <a href={socialMediaLinks.email}>
              <FaEnvelope className="social-media-icon" />
            </a>
          </div>
        </section>
      </div>
    </>
  );
};

export default App;