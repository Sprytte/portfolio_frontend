import Sidebar from "../Components/Sidebar";

const Experience = () => {
    return(
    <div>
        <div class="container">
            <Sidebar />

            <div class="content">
                <h1>Experience</h1>
                
                <section>
                    <h2>Work Experience</h2>
                    <div class="school-info">
                        <p><strong>Generix Group - Java developer</strong> <br/>
                        Internship/Full-time Employee</p>
                        <p>March 2024 - May 2024 (internship) <br></br>
                        May 2024 - August 2024 (Employee)</p>
                        <ul class="class-list">
                            <ul>
                                <li>- Participate in the investigation and resolution of bugs</li>
                                <li>- Analyze and implement new features for Solochain</li>
                                <li>- Define and automate positive and negative tests with the QA team</li>
                            </ul>
                        </ul>
                    </div>
                </section>

                <section>
                    <h2>School Experience</h2>
                    <div class="school-info">
                        <p><strong>Concordia University - Montreal<br/>
                        Software Engineering (co-op)</strong></p>
                        <p>2024 - 2028</p>
                    </div>
                    <ul class="class-list">
                        <li><strong>Classes Attended:</strong></li>
                        <ul>
                            <li><strong>Data Structures and Algorithms - Winter 2025</strong> <br/>
                                Learning the basics of how to optomize and write efficient code.
                            </li> <br/>
                            <li><strong>Fundamentals of Programming Languages - Winter 2025</strong><br/>
                                Learning the foundations of programming languages as well as the basics of various different
                                types of languages such as C, Python, Erlang, and Clojure.
                            </li> <br/>
                        </ul>
                    </ul>
                    <br></br>
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

            </div>
        </div>

    </div>
    );
}

export default Experience;