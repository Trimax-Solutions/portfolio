import Particle from "./components/particles";
import Nav from "./components/nav";
import HeroText from "./components/hero-text";
import Social_media from "./components/social-media";
import ContactUS from "./components/contact-us";
import Team from "./components/team";
import ProjectCards from "./components/project-cards";
import "./components/team.css";
import "./components/project-cards.css";

function App() {
  return (
    <div className="App">
      <Particle />
      <Nav />
      <HeroText />
      <Social_media />
      <div className="team-container">
        <div className="a">
          <div className="b">
            <div className="c">
              <h2>Our Projects</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="project-cards-container">
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
        <ProjectCards />
      </div>
      <Team />
      <ContactUS />
    </div>
  );
}

export default App;
