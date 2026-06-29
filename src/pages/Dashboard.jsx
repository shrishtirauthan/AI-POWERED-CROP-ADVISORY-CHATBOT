import Navbar from "../Navbar";
import Footer from "../Footer";
import "../Dashboard.css";

function Dashboard({ darkMode, setDarkMode }) {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="dashboard">

        <div className="dashboard-header">
          <h1>🌱 AI Crop Dashboard</h1>
          <p>
            Welcome back! Monitor your farm and receive intelligent
            recommendations.
          </p>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>🌡 Temperature</h3>
            <h2>28°C</h2>
            <span>Optimal</span>
          </div>

          <div className="stat-card">
            <h3>💧 Humidity</h3>
            <h2>72%</h2>
            <span>Healthy</span>
          </div>

          <div className="stat-card">
            <h3>🌧 Rainfall</h3>
            <h2>120 mm</h2>
            <span>This Week</span>
          </div>

          <div className="stat-card">
            <h3>🌾 Soil Health</h3>
            <h2>95%</h2>
            <span>Excellent</span>
          </div>

        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h2>🌾 Crop Recommendation</h2>

            <p>
              Recommended Crop:
            </p>

            <h3>Wheat</h3>

            <p>
              AI Confidence: <strong>96%</strong>
            </p>

            <button className="btn btn-primary">
              View Details
            </button>

          </div>

          <div className="dashboard-card">
            <h2>🦠 Disease Detection</h2>

            <p>
              Upload a crop leaf image to identify diseases using AI.
            </p>

            <button className="btn btn-primary">
              Upload Image
            </button>

          </div>

          <div className="dashboard-card">
            <h2>🌦 Weather Forecast</h2>

            <ul>
              <li>☀ Monday - 29°C</li>
              <li>🌤 Tuesday - 27°C</li>
              <li>🌧 Wednesday - Rain Expected</li>
            </ul>

          </div>

          <div className="dashboard-card">
            <h2>📈 Recent Activity</h2>

            <ul>
              <li>✔ Wheat Recommendation</li>
              <li>✔ Weather Checked</li>
              <li>✔ Soil Analysis Completed</li>
            </ul>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Dashboard;