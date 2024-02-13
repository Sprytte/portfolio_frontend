import ArrowButtons from './ArrowButton';
import React, { useState, useEffect } from 'react';

const ProjectBox = ({ project }) => {
    const [currentProject, setCurrentProject] = useState(0);

    const changeProject = (n, total) => {
        setCurrentProject((currentProject + n >= 0 && currentProject + n < total) ? currentProject + n : currentProject);
    };

  return (
    <div>
        <div className="project-box">
          <h3>{project.name}</h3>
          <div className="image-carousel">  
            <ArrowButtons onClick={() => changeProject(-1, project.images.length)} direction="prev"/>
            <img src={project.images[currentProject]} alt={`Project ${project.name} Image ${currentProject + 1}`} width={260} height={310}/>
            <ArrowButtons onClick={() => changeProject(1, project.images.length)} direction="next"/>
          </div>
          <p>{project.description}</p>
          <p>{project.technologies.map((tech) => (
            <span className="technology-span">{tech}</span>
          ))}</p>
          </div>
    </div>
  );
};

export default ProjectBox;
