import Sidebar from "../Components/Sidebar";

const Projects = () => {
    return(
    <div>
        <div class="container">
            <Sidebar />

            <div class="content">
            <h1>Projects</h1>
            <div class="project-card">
                    <h2>Project Title</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id justo sed libero fermentum lobortis.</p>
                    </div>

                    <div class="project-card">
                    <h2>Another Project</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id justo sed libero fermentum lobortis.</p>
                    </div>
            </div>
        </div>

    </div>
    );
}

export default Projects;