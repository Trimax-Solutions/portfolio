import Particle from "./components/particles";
import HeroText from "./components/hero-text";
import Social_media from "./components/social-media";
import ContactUS from "./components/contact-us";
import Team from "./components/team";
import ProjectCards from "./components/project-cards";
import Footer from "./components/footer";
import Navbar from "./components/Navbar/Navbar";
import "./components/team.css";
import "./components/project-cards.css";
import "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Particle />
      <HeroText />
      <Social_media />
      <div className="team-container" id="projects">
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
      <Footer />
    </div>
  );
}

export default App;
