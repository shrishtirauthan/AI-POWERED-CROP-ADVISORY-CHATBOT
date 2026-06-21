import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Modal from "../components/ui/Modal";
import Toast from "../components/ui/Toast";

function Home() {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleAdvice = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
      setShowModal(true);
    }, 2000);
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
      }}
    >
      <Navbar />
      <Hero />

      <div style={{ textAlign: "center", margin: "20px" }}>
        <Button
          text={darkMode ? "LIGHT MODE" : "DARK MODE"}
          onClick={() => setDarkMode(!darkMode)}
        />

        <br />
        <br />

        <Button
          text="GET CROP ADVICE"
          onClick={handleAdvice}
        />

        <br />
        <br />

        <Input placeholder="Enter crop name" />

        <br />
        <br />

        {loading && <Loader />}

        {showModal && <Modal />}

        {showToast && (
          <Toast message="Crop Advice Generated Successfully!" />
        )}
      </div>

      <Card />
      <Footer />
    </div>
  );
}

export default Home;