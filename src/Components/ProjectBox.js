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
            {/* {project.images.map((image, imageIndex) => (
              <img key={imageIndex} src={image} alt={`Project ${index + 1} Image ${imageIndex + 1}`} width={200} height={150}/>
            ))} */}
            {/* Map through the images like above. Use imageIndex. Instead of calling function, do the math directly in image source.
            Current imageindex should be displayed, others display: none */}
            <img src={project.images[currentProject]} alt={`Project ${project.name} Image ${currentProject + 1}`} width={220} height={150}/>
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