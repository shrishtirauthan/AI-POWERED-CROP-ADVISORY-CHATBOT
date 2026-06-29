import "./Button.css";

function Button({
  text,
  onClick,
  disabled = false,
  type = "button",
}) {
  return (
    <button
      className="custom-btn"
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
}

export default Button;