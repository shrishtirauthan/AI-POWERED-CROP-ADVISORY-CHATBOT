import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="spinner"></div>

      <h3>Generating AI Crop Advice...</h3>

      <p>Please wait a moment.</p>
    </div>
  );
}

export default Loader;