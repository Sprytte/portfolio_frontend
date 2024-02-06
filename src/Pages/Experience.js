import Sidebar from "../Components/Sidebar";

const Experience = () => {
    return(
    <div>
        <div class="container">
            <Sidebar />

            <div class="content">
                <h1>Experience</h1>
                {/* <div class="timeline">
                    <div class="timeline-item">
                    <div class="timeline-content">
                        <h2>Education</h2>
                        <h3>Champlain College</h3>
                        <p>3-year program in Computer Sciences</p>
                    </div>
                    </div>

                    <div class="timeline-item">
                    <div class="timeline-content">
                        <h2>Work Experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                    </div>
                </div> */}
            <section>
            <h2>School Experience</h2>
            <div class="school-info">
                <p><strong>Champlain College - Saint-Lambert</strong></p>
                <p>2021 - 2024</p>
            </div>
            <ul class="class-list">
                <li><strong>Classes Attended:</strong></li>
                <ul>
                    <li>[Class 1]</li>
                    <li>[Class 2]</li>
                </ul>
            </ul>
        </section>

        <section>
            <h2>Work Experience</h2>
            <div class="school-info">
                <p><strong>Generix - Java developer</strong></p>
                <p>March 2024 - June 2024</p>
            </div>
        </section>
            </div>
        </div>

    </div>
    );
}

export default Experience;