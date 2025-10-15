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
          <h2 className="about__me__title">About Me 👤</h2>
          <div className="about__me__footer">Detail-oriented and growth-driven <b>software engineer</b> with <b>3+ years</b> of experience at <b>Relay Network</b>. Strong in both <b>frontend</b> and <b>backend/API</b> development, <b>AWS infrastructure</b>, and <b>cross-functional communication</b>. Proven ability to learn new technologies quickly, collaborate effectively across teams, and deliver high-quality, scalable features in fast-paced environments.</div>
        </div>
        <div className="WorkExperience">
          <h2 className="work__experience__title">Work Experience 🏢</h2>
          <div className="work__experience__footer">
            <div className="work__experience__company">Relay Network (2022 - Present): Software Engineer</div>
            <div className="work__experience__details">
              <div className="work-list">
                <div className="list-item">• Built and maintained backend services using Node.js, TypeScript, Fastify, and PostgreSQL, supporting secure API configurations and event-driven workflows.</div>
                <div className="list-item">• Modernized Kafka integration with Confluent Kafka, and improved local development using LocalStack.</div>
                <div className="list-item">• Contributed to frontend development using React.js, improving Smart Actions, Push API configuration UI, and internal tools in collaboration with design and product teams.</div>
                <div className="list-item">• Worked closely with senior engineers on architecture, debugging, and PR reviews—grew team visibility through active demos, docs, and async communication.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="picture">
          <h2 className="picture__title">Picture 📷</h2>
          <div className="picture__footer"></div>
        </div>
        <div className="skills">
          <h2 className="skills__title">Skills 💻</h2>
          <div className="skills__footer"></div>
        </div>
        <div className="projects">
          <h2 className="projects__title">Projects 🚀</h2>
          <div className="projects__footer"></div>
        </div>
        <div className="footer">
          <p>© 2025 Jeremiah Park<br />Built with<br />React.js and JavaScript</p>
        </div>
      </div>
    </div>
  );
}

export default App;
