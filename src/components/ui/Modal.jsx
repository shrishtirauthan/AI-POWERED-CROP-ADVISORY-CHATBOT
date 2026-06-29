import "./Modal.css";

function Modal({ onClose }) {
  return (
    <div className="modal-overlay">

      <div className="modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✖
        </button>

        <h2>🌾 AI Crop Recommendation</h2>

        <div className="modal-content">

          <div className="info-box">
            <span>Crop</span>
            <strong>Wheat</strong>
          </div>

          <div className="info-box">
            <span>Best Season</span>
            <strong>Winter</strong>
          </div>

          <div className="info-box">
            <span>Recommended Soil</span>
            <strong>Loamy Soil</strong>
          </div>

          <div className="info-box">
            <span>Water Requirement</span>
            <strong>Moderate</strong>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Modal;