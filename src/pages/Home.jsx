import { useState } from "react";

import Navbar from "../Navbar";
import Hero from "../Hero";
import Card from "../Card";
import Footer from "../Footer";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";

function Home({ darkMode, setDarkMode }) {
  const [crop, setCrop] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAdvice = () => {
    if (!crop.trim()) {
      alert("Please enter a crop name.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setShowModal(true);
    }, 2000);
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <Hero />

      <section className="container fade-up">
        <div className="card">

          <h2 className="section-title">
            🌾 AI Crop Recommendation
          </h2>

          <p className="section-subtitle">
            Enter your crop name to receive intelligent farming advice,
            weather insights and cultivation recommendations.
          </p>

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "30px",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: "1",
                minWidth: "280px",
              }}
            >
              <Input
                placeholder="Enter crop name..."
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
              />
            </div>

            <Button
              text="Get Advice"
              onClick={handleAdvice}
            />
          </div>

          <div
            style={{
              marginTop: "30px",
              textAlign: "center",
            }}
          >
            {loading && <Loader />}
          </div>

          {showModal && <Modal />}

          {showToast && (
            <Toast message="Crop Advice Generated Successfully!" />
          )}
        </div>
      </section>

      <section
        className="container"
        style={{
          marginTop: "70px",
          marginBottom: "70px",
        }}
      >
        <h2 className="section-title">
          Why Choose Our Platform?
        </h2>

        <p className="section-subtitle">
          Smart agriculture powered by Artificial Intelligence.
        </p>

        <Card />
      </section>

      <Footer />
    </>
  );
}

export default Home;