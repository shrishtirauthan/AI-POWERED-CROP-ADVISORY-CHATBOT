import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-logo">
          <h2>🌾 CropAI</h2>
          <p>
            Empowering farmers with Artificial Intelligence, smart crop
            recommendations, weather forecasting, and disease detection.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 support@cropai.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 CropAI | AI Powered Crop Advisory System
      </div>

    </footer>
  );
}

export default Footer;