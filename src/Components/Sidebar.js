import github from "../Images/Github.png"
import linkedin from "../Images/linkedin.png"
import Button from 'react-bootstrap/Button';
import React, { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return(<>
        <Button className="hamburger-button" onClick={toggleSidebar}>
            ☰
        </Button>
        <aside class={`sidebar ${isOpen ? 'open' : ''}`}>
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
                            <img src={github} alt="GitHub Icon" class="icon" /> Github
                        </a>
                        <a href="https://www.linkedin.com/in/emilie-parent-486305293" target="_blank">
                            <img src={linkedin} alt="LinkedIn Icon" class="icon" /> LinkedIn
                        </a>
                    </div>
                </nav>
            </div>
        </aside>
    </>);
}

export default Sidebar;