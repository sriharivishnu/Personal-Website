import "./main.scss";
import ProfilePic from "./img/profile-picture.svg";
import GithubIcon from "./img/github-icon.svg";
import LinkedInIcon from "./img/linkedin-icon.svg";

const Circle = () => {
  return <button className="circle-nav-btn"></button>;
};

function App() {
  return (
    <div className="App">
      <div id="background-ring"></div>

      <div id="background-circle">
        <div id="centered-container">
          <img
            src={ProfilePic}
            alt="Profile Pic"
            id="profile-pic"
            className="profile-picture"
          />
          <h1 className="main-heading">Srihari Vishnu</h1>
          <h4 className="secondary-text sub-heading">
            Creating solutions to tomorrow's problems
          </h4>
          <div id="social-container">
            <img
              src={LinkedInIcon}
              alt="LinkedIn Icon"
              onClick={() =>
                window.open("https://www.linkedin.com/in/sriharivishnu/")
              }
              className="social-icon"
            />
            <div className="vert-line"></div>
            <img
              src={GithubIcon}
              alt="Github Icon"
              className="social-icon"
              onClick={() => window.open("https://github.com/sriharivishnu")}
            />
          </div>
          <div id="topic-container">
            <div className="topic-tag">Backend</div>
            <div className="topic-tag">Infrastructure</div>
            <div className="topic-tag">Mobile</div>
          </div>
        </div>
      </div>

      <Circle />
    </div>
  );
}

export default App;
