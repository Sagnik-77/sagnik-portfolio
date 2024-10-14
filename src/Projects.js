import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectData = [
    {
      title: "Rupeace: Finance Tracking App",
      tools: "Adobe Xd, Notion, Canva",
      tags: "Mobile App Design, UX Research, UX/UX Design",
      imgSrc: "https://cdn.dribbble.com/userupload/16906841/file/original-a88ab54eae0ab7f6547fc3ec146d665d.png?resize=400x300&vertical=center",
      link: "https://dribbble.com/shots/24970832-Finance-Tracking-App"
    },
    {
      title: "Redesigned SRide Application",
      tools: "Adobe Xd, Photoshop, Canva",
      tags: "Mobile App Design, Wireframing, User Persona",
      imgSrc: "https://cdn.dribbble.com/userupload/15735654/file/original-ac4f9ca56b66badff74ec35c23a7b736.png?crop=78x58-1362x1022&resize=400x300&vertical=center",
      link: "https://dribbble.com/shots/24568222-SRide-Redesign-Concept-2024"
    },
    {
      title: "Architecture Landing Page",
      tools: "Adobe Xd, Notion",
      tags: "Web Design, Responsive Design, Wireframing, User Journey",
      imgSrc: "https://cdn.dribbble.com/users/11511248/screenshots/18349257/media/7d31207f5083eed1b366e6cce5af218f.png?resize=400x300&vertical=center",
      link: "https://dribbble.com/shots/18349257-Website-Design-Architecture-Brand-Landing-Page"
    },
    {
      title: "Product Landing Page",
      tools: "Adobe Xd, Photoshop",
      tags: "Web Design, Responsive Design, Layout Design",
      imgSrc: "https://cdn.dribbble.com/users/11511248/screenshots/18349228/media/bf1b0cc26af0433b3a0c20eb121e9ce4.png?resize=400x300&vertical=center",
      link: "https://dribbble.com/shots/18349228-Website-Design-Graphic-Design-Brand-Landing-Page"
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">works</h2>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.imgSrc} alt={project.title} />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <div className="buttons">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <button className="details-button">VIEW ON DRIBBLE</button>
                </a>
              </div>
              <div className="project-tools">
                <span>Tools:</span> {project.tools}
              </div>
              <div className="project-tags">
                <span>Tags:</span> {project.tags}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
