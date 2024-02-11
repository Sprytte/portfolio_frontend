import ArrowButtons from './ArrowButton';
import React, { useState, useEffect } from 'react';
import ProjectBox from './ProjectBox';

const ProjectSection = ({ title, projects }) => {
    const [currentProject, setCurrentProject] = useState(0);

    const changeProject = (n, total) => {
        setCurrentProject((currentProject + n >= 0 && currentProject + n < total) ? currentProject + n : currentProject);
    };

  return (
    <div className={`project-section`}>
      <h2>{title}</h2>
      {projects.map((project, index) => (
        <ProjectBox
        project={project} />
      ))}
    </div>
  );
};

export default ProjectSection;
