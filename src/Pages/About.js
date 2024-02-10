import Sidebar from "../Components/Sidebar";
import pfp from "../Images/Pfp.jpg"
import pdf from "../Images/EmilieParent_CV.pdf"

const About = () => {
    // const downloadPDF = () => {
    //     const pdfUrl = "../Images/EmilieParent_CV.pdf";
    //     const link = document.createElement("a");
    //     link.href = pdfUrl;
    //     link.download = "EmilieParent_CV.pdf"; // specify the filename
    //     document.body.appendChild(link);
    //     link.click();
    //     document.body.removeChild(link);
    // };
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
                <p>Computer Science Student</p>
            </header>
                <section>
                    <h2>About Me</h2>
                    <p>                        My journey in computer science began with a curiosity to 
                        understand how things work in the digital realm. I thrive in challenging environments that require me to 
                        think critically and creatively.</p>
                </section>

                <section>
                    <h2>Skills</h2>
                    <ul>
                        <li><strong>Programming Languages:</strong> Java, C#, Python, Swift, Javascript, HTML/CSS</li>
                        <li><strong>Technologies:</strong> Sprintboot, ReactJS, IntelliJ, Jira, Github, Docker</li>
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
                    <p>Interested in learning more about my academic and professional journey? View my CV <a href={pdf}>here</a>.</p>
                </section>
            </div>
        </div>

    </div>
    );
}

export default About;