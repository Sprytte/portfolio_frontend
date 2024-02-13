import React, { useState, useEffect } from 'react';
import Sidebar from "../Components/Sidebar";
import ProjectSection from '../Components/ProjectSection';
// import ArrowButtons from '../Components/ArrowButton';
import { api } from '../Components/Constants';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
      fetch(`${api}/projects`)
        .then((response) => response.json())
        .then((data) => setProjects(data))
        .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return(
    <div>
        <div class="container">
            <Sidebar />

            <h1>My Projects</h1>

            <div className="projects-container">
                <div className="project-carousel">
                    <ProjectSection title="School Projects" projects={projects} />
                    {/* <ProjectSection title="Personal Projects" projects={projectsData.personalProjects} /> */}
                </div>
            </div>
        </div>

    </div>
    );
}

export default Projects;