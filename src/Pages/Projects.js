import React, { useState, useEffect } from 'react';
import Sidebar from "../Components/Sidebar";
import ProjectSection from '../Components/ProjectSection';
// import ArrowButtons from '../Components/ArrowButton';
import {AcademicProjects, PersonalProjects} from '../data/projects_data';

const Projects = () => {
    const [schoolProjects, setSchoolProjects] = useState([]);
    useEffect(() => {
            setSchoolProjects(AcademicProjects)
    }, []);
    const [personalProjects, setPersonalProjects] = useState([]);
    useEffect(() => {
      {setPersonalProjects(PersonalProjects)}
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