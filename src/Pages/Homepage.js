import Sidebar from "../Components/Sidebar";
import { Link } from 'react-router-dom';
import mercury from "../Images/mercury.png";
import venus from "../Images/venus.png";
import earth from "../Images/eath.png";
import mars from "../Images/mars.png";

const HomePage = () => {
    const PlanetLink = ({ to, planetName, imageUrl }) => (
        <Link to={to} className="planet-link">
          <img src={imageUrl} alt={planetName} className="planet-image" width={200} height={200}/>
        </Link>
      );

    return(
    <div>
        <div class="container">
            <Sidebar />

            <div class="content">
            <h1>Hi, I'm Émilie <br/>
            Computer Science Student</h1>

                <div className="planet-links">
                    <PlanetLink
                    to="/about"
                    planetName="Mercury"
                    imageUrl={mercury}
                    />
                    <PlanetLink
                    to="/experience"
                    planetName="Venus"
                    imageUrl={venus}
                    />
                    <PlanetLink
                    to="/projects"
                    planetName="Earth"
                    imageUrl={earth}
                    />
                    <PlanetLink
                    to="/interests"
                    planetName="Mars"
                    imageUrl={mars}
                    />
                </div>

                <h3 style={{marginTop: 30}}>Click on a planet to begin your journey</h3>
            </div>
        </div>

    </div>
    );
}

export default HomePage;