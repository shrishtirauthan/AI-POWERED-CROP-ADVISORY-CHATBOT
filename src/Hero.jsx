import "./Hero.css";
function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="badge">
          🌱 AI Powered Smart Farming
        </span>

        <h1>
          Revolutionize Your
          <span> Agriculture </span>
          with Artificial Intelligence
        </h1>

        <p>
          Get AI-powered crop recommendations, real-time weather insights,
          disease detection, and smart farming guidance—all in one platform.
        </p>

        <div className="hero-buttons">

          <button className="btn btn-primary">
            🚀 Get Started
          </button>

          <button className="btn btn-secondary">
            Learn More
          </button>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=900"
          alt="Agriculture"
        />

      </div>

    </section>
  );
}

export default Hero;