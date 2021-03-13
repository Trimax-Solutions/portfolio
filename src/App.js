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
    <div className="App" id="home">
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
        <ProjectCards
          name={"GymHut"}
          image={"/gymhut.PNG"}
          description={
            "Complete Gym Website compromises of MERN Stack and Redux"
          }
          github={"https://github.com/IbadAhmad80/GymHut"}
          deployed_plt={"https://gymhut.netlify.app/"}
        />
        <ProjectCards
          name={"Wheather Guider"}
          image={"/whether-guider.jpeg"}
          description={
            "This is a complete MERN Stack project with framer motion as an animation library"
          }
          github={"https://www.github.com/M-Umais-Hassan/Whether-app"}
          deployed_plt={"https://whether-guider.herokuapp.com/register"}
        />
        <ProjectCards
          name={"Instagram Clone"}
          image={"/insta-clone.PNG"}
          description={
            "Contain technologies like Firebase, Sass and Redux as a State Management Tool"
          }
          github={"https://github.com/IbadAhmad80/Instagarm-Clone"}
          deployed_plt={"https://instagarm-clone-5b04e.web.app"}
        />
        <ProjectCards
          name={"Slate Clone"}
          image={"/slate-clone.jpeg"}
          description={"create using HTML and CSS"}
          github={"https://www.github.com/M-Umais-Hassan/S1---SP18-BCS-179-"}
          deployed_plt={"https://slate-clone.herokuapp.com/"}
        />
        <ProjectCards
          name={"BuzzFeed Clone"}
          image={"/buzzfeed-clone.PNG"}
          description={"Developed with React and CSS"}
          github={"https://github.com/IbadAhmad80/BuzzFeed-Clone"}
          deployed_plt={"https://radiant-waters-39974.herokuapp.com/"}
        />
        <ProjectCards
          name={"Slate Clone"}
          image={"/gymhut.PNG"}
          description={
            "Firebase services used as a primary technology with redux"
          }
          github={"https://github.com/IbadAhmad80/BuzzFeed-Clone"}
          deployed_plt={""}
        />
        <ProjectCards
          name={"Social Media App"}
          image={"/gymhut.PNG"}
          description={"Social Media App developed with MERN Stack and Redux"}
          github={""}
          deployed_plt={""}
        />
        <ProjectCards
          name={"Portfolio Website"}
          image={"/portfolio.PNG"}
          description={"Our Portfolio Website you are currenly on"}
          github={"https://github.com/Trimax-Solutions/portfolio"}
          deployed_plt={"https://trimax-solutions.netlify.app"}
        />
      </div>
      <span id="team">
        <Team />
      </span>
      <span id="contact" style={{ marginTop: "500px" }}></span>
      <ContactUS />
      <Footer />
    </div>
  );
}

export default App;
