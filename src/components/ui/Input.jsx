import "./Input.css";

function Input({
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <input
      className="custom-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;