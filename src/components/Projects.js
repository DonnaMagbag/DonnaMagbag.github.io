import '../styles/styles1.css';

import React from 'react';

const Projects = () => {
  const projects = [
    {
      name: "Apothecary’s Garden",
      description: "A web application that provides users with a platform to learn about medicinal herbs that treat various ailments.",
      technologies: ["Java", "Spring Framework", "React", "Node", "CSS", "HTML"]
    },
    {
      name: "Mystery Educator",
      description: "An educational web application exposing children to various aspects of science and art utilizing external APIs.",
      technologies: ["Java", "Spring Framework", "React", "JavaScript", "CSS", "HTML"]
      
    },
    {
      name: "Island Hopping Adventures",
      description: "A web application that educates end-users about island hopping adventures offered by the company.",
      technologies: ["JavaScript", "EJS", "Node", "Express", "SQL"]
          }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                      </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
