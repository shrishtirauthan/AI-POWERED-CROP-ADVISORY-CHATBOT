/**
 * Button Component
 * Props:
 * - text
 * - onClick
 * - disabled
 */

function Button({ text, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        backgroundColor: "#2563eb",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}
    >
      {text}
    </button>
  );
}

export default Button;