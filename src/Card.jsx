import "./Card.css";

const features = [
  {
    icon: "🌾",
    title: "Crop Recommendation",
    description:
      "Get AI-powered crop suggestions based on soil quality, season, and weather conditions."
  },
  {
    icon: "🌦️",
    title: "Weather Forecast",
    description:
      "Access real-time weather updates to plan irrigation and farming activities efficiently."
  },
  {
    icon: "🦠",
    title: "Disease Detection",
    description:
      "Detect crop diseases early and receive instant treatment recommendations."
  },
  {
    icon: "🤖",
    title: "AI Farming Assistant",
    description:
      "Ask farming questions anytime and receive smart AI-powered guidance."
  }
];

function Card() {
  return (
    <section className="features">

      <h2 className="section-title">
        Smart Farming Features
      </h2>

      <p className="section-subtitle">
        Everything you need to improve crop production using Artificial Intelligence.
      </p>

      <div className="feature-grid">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Card;