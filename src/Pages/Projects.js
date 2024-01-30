import React, { useState, useEffect } from 'react';
import Sidebar from "../Components/Sidebar";
import ProjectSection from '../Components/ProjectSection';
import ArrowButtons from '../Components/ArrowButton';
import { api } from '../Components/Constants';

// const projectsData = {
//     // schoolProjects: [
//     //     {
//     //       title: 'School Project 1',
//     //       images: ['school_project1_image1.jpg', 'school_project1_image2.jpg'],
//     //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec purus gravida ullamcorper. In non lacus bibendum, consequat arcu a, fermentum justo.'
//     //     },
//     //     {
//     //       title: 'School Project 2',
//     //       images: ['school_project2_image1.jpg', 'school_project2_image2.jpg'],
//     //       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nisl nec purus gravida ullamcorper. In non lacus bibendum, consequat arcu a, fermentum justo.'
//     //     },
//     //   ],
// //   personalProjects: [
// //     { title: 'Personal Project 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', images: ["wer", "wer"] },
// //     { title: 'Personal Project 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...', images: ["wer", "wer"] },
// //   ],
// };

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