import Navbar from "./Navbar";
import Footer from "./Footer";
import "./About.css";

function About({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="about">

        <div className="about-hero">
          <h1>🌾 About CropAI</h1>

          <p>
            CropAI is an intelligent crop advisory platform designed to help
            farmers make informed decisions using Artificial Intelligence,
            weather forecasting, and smart crop analysis.
          </p>
        </div>

        <div className="about-grid">

          <div className="about-card">
            <h2>🎯 Our Mission</h2>

            <p>
              Empower farmers with AI-driven insights to improve productivity,
              sustainability, and crop quality.
            </p>
          </div>

          <div className="about-card">
            <h2>🤖 AI Features</h2>

            <ul>
              <li>✔ Crop Recommendation</li>
              <li>✔ Weather Forecast</li>
              <li>✔ Disease Detection</li>
              <li>✔ Smart Farming Guidance</li>
            </ul>
          </div>

          <div className="about-card">
            <h2>🌱 Why Choose CropAI?</h2>

            <p>
              Our platform combines AI, weather intelligence, and agricultural
              best practices to help farmers maximize yield and reduce risks.
            </p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;