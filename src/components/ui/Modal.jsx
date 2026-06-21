/**
 * Modal Component
 * Displays crop advice
 */
function Modal() {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "20px",
        margin: "20px",
        backgroundColor: "#f5f5f5",
        color: "black"
      }}
    >
      <h3>Crop Advice</h3>

      <p>Crop: Wheat</p>
      <p>Best Season: Winter</p>
      <p>Recommended Soil: Loamy Soil</p>
      <p>Water Requirement: Moderate</p>
    </div>
  );
}

export default Modal;