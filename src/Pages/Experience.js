import Sidebar from "../Components/Sidebar";

const Experience = () => {
    return(
    <div>
        <div class="container">
            <Sidebar />

            <div class="content">
                <h1>Experience</h1>
                
                    <section>
                    <h2>School Experience</h2>
                    <div class="school-info">
                        <p><strong>Champlain College - Saint-Lambert <br/>
                        Computer Sciences</strong></p>
                        <p>2021 - 2024</p>
                    </div>
                    <ul class="class-list">
                        <li><strong>Classes Attended:</strong></li>
                        <ul>
                            <li><strong>Web Services - Winter 2023</strong> <br/>
                                Learning the basics of web services, REST APIs, Domain-
                                Driven-Design approach, implementing micro-services, using a
                                test-driven approach, JUnit, and using relational databases
                            </li> <br/>
                            <li><strong>Game Development - Winter 2023 </strong><br/>
                                Designing attractive and creative 2D and 3D interfaces,
                                designing multimedia aspects of games, and designing and
                                creating single-player games.
                            </li> <br/>
                            <li><strong>System Analysis and Development </strong><br/>
                                Understanding systems development methodologies, modeling
                                techniques, defining system requirements, using software to
                                manage system development
                            </li>
                        </ul>
                    </ul>
                </section>

                <section>
                    <h2>Work Experience</h2>
                    <div class="school-info">
                        <p><strong>Generix - Java developer</strong> <br/>
                        Internship</p>
                        <p>March 2024 - June 2024</p>
                    </div>
                </section>
            </div>
        </div>

    </div>
    );
}

export default Experience;