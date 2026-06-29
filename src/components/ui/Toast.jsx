import { useEffect } from "react";
import "./Toast.css";

function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="toast">
      <div className="toast-icon">✔</div>

      <div className="toast-content">
        <h4>Success</h4>
        <p>{message}</p>
      </div>

      <button
        className="toast-close"
        onClick={onClose}
      >
        ✖
      </button>
    </div>
  );
}

export default Toast;