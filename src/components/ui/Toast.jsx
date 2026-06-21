/**
 * Toast Component
 * Props:
 * - message
 */
function Toast({ message }) {
  return (
    <div
      style={{
        backgroundColor: "green",
        color: "white",
        padding: "10px",
        marginTop: "10px"
      }}
    >
      {message}
    </div>
  );
}

export default Toast;