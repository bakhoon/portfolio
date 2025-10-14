import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="boxes">
        <div className="logo">
          <img src="/images/j-black.png" alt="Logo" className="logo-image" />
        </div>
        <div className="name">
          <div className="name-text">
            <div className="last-name">
              JEREMIAH PARK
              <div className="flags">
                <img src="/images/us.png" alt="US Flag" className="flag-icon" />
                <img src="/images/kr.png" alt="Korean Flag" className="flag-icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="github"><img src="/images/github.png" alt="GitHub" className="github-image" /></div>
        <div className="linkedin"><img src="/images/linkedin.webp" alt="LinkedIn" className="linkedin-image" /></div>
        <div className="email"><img src="/images/gmail.webp" alt="Email" className="email-image" /></div>
        <div className="about">
          <h2 className="card__title">About Me 👤</h2>
          <div className="card__footer"></div>
        </div>
        <div className="WorkExperience">
          <h2 className="box__title">Work Experience 🏢</h2>
          <div className="box__footer"></div>
        </div>
        <div className="picture">
          <h2 className="box__title">Picture 📷</h2>
          <div className="box__footer"></div>
        </div>
        <div className="skills">
          <h2 className="box__title">Skills 💻</h2>
          <div className="box__footer"></div>
        </div>
        <div className="projects">
          <h2 className="box__title">Projects 🚀</h2>
          <div className="box__footer"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
