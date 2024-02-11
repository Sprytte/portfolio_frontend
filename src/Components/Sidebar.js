import github from "../Images/Github.png"
import linkedin from "../Images/linkedin.png"

const Sidebar = () => {
    return(<>
        <aside class="sidebar">
                <div class="sidebar-container">
                    <div class="logo">Emilie</div>
                    <nav>
                        <div class="nav-links">
                            <a href="/">Home</a>
                            <hr />
                            <a href="/about">About</a>
                            <hr />
                            <a href="/experience">Experience</a>
                            <hr/>
                            <a href="/projects">Projects</a>
                            <hr/>
                            <a href="/interests">Interests</a>
                            <hr/>
                        </div>

                        <div class="external-links">
                            <a href="https://github.com/Sprytte" target="_blank">
                                <img src={github} alt="GitHub Icon" class="icon" />
                            </a>
                            <a href="www.linkedin.com/in/emilie-parent-486305293" target="_blank">
                                <img src={linkedin} alt="LinkedIn Icon" class="icon" />
                            </a>
                        </div>
                    </nav>
                </div>
            </aside>
    </>);
}

export default Sidebar;