import Sidebar from "../Components/Sidebar";
import pfp from "../Images/Pfp.jpg"
import french from "../Images/EmilieParent_CV_Francais.pdf"
import english from "../Images/EmilieParent_CV_English.pdf"

const About = () => {
    const downloadPDF = () => {
     
        // using Java Script method to get PDF file
        fetch("../Images/EmilieParent_CV.pdf").then((response) => {
            response.blob().then((blob) => {
             
                // Creating new object of PDF file
                const fileURL =
                    window.URL.createObjectURL(blob);
                     
                // Setting various property values
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = "SamplePDF.pdf";
                alink.click();
            });
        });
    };
    return(
    <div>
        <div class="container">
            <Sidebar />

            <div >
            <header>
                <img src={pfp} alt="em. p."/>
                <h1>Émilie Parent</h1> 
                <p>Software Engineering (co-op) Student</p>
            </header>
                <section>
                    <h2>About Me</h2>
                    <p> My journey in computer science began with a curiosity to 
                        understand how things work in the digital realm. Later, it continued with a thirst for knowledge and problems to solve as I continued forward and into university. 
                        I thrive in challenging environments that require me to 
                        think critically and creatively.</p>
                </section>

                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li><strong>Programming Languages:</strong> Java, C#, Python, Swift, Javascript, HTML/CSS, ReactJS, PHP, Kotlin, Django, C, C++</li>
                        <li><strong>Technologies:</strong> Springboot, ReactJS, IntelliJ, Jira, Github, Docker, Figma, Visual Studio (Code), Postman, Eclipse</li>
                    </ul>
                </section>

                <section>
                    <h2>Contact Me</h2>
                    <ul>
                        <li class="contact-item">
                            <strong>Email:</strong><br/>
                            <a href="mailto:emilieparent2014@hotmail.com">emilieparent2014@hotmail.com</a>
                        </li>
                        <li class="contact-item">
                            <strong>LinkedIn:</strong><br/>
                            <a href="www.linkedin.com/in/emilie-parent-486305293">Emilie Parent</a>
                        </li>
                        <li class="contact-item">
                            <strong>GitHub:</strong><br/>
                            <a href="https://github.com/Sprytte">Sprytte</a>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2>Download CV</h2>
                    <p>Interested in learning more about my academic and professional journey? View my CV below.</p>
                    <p><a href={french}>Français</a></p>
                    <p><a href={english}>English</a></p>

                </section>
            </div>
        </div>

    </div>
    );
}

export default About;