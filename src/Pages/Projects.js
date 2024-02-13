import React, { useState, useEffect } from 'react';
import Sidebar from "../Components/Sidebar";
import ProjectSection from '../Components/ProjectSection';
// import ArrowButtons from '../Components/ArrowButton';
import { api } from '../Components/Constants';

const Projects = () => {
    const [schoolProjects, setSchoolProjects] = useState([]);
    useEffect(() => {
      fetch(`${api}/projects/school`)
        .then((response) => response.json())
        .then((data) => setSchoolProjects(data))
        .catch((error) => console.error('Error fetching projects:', error));
    }, []);
    const [personalProjects, setPersonalProjects] = useState([]);
    useEffect(() => {
      fetch(`${api}/projects/personal`)
        .then((response) => response.json())
        .then((data) => setPersonalProjects(data))
        .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return(
    <div>
        <div class="container">
            <Sidebar />

            <h1>My Projects</h1>

            <div className="projects-container">
                <div className="project-carousel">
                    <ProjectSection title="School Projects" projects={schoolProjects} />
                    <ProjectSection title="Personal Projects" projects={personalProjects} />
                </div>
            </div>
        </div>

    </div>
    );
}

export default Projects;