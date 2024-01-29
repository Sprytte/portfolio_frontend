const Sidebar = () => {
    return(<>
        <aside class="sidebar">
                <div class="sidebar-container">
                    <div class="logo">Your Logo</div>
                    <nav class="nav-links">
                        <a href="/">Home</a>
                        <hr />
                        <a href="/about">About</a>
                        <hr />
                        <a href="/experience">Experience</a>
                        <hr/>
                        <a href="/projects">Projects</a>
                        <hr/>
                    </nav>
                </div>
            </aside>
    </>);
}

export default Sidebar;