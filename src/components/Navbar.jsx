function Navbar() {
  return (
    <nav>
      <h2>🌾 Crop Advisory Chatbot</h2>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li>Home</li>
        <li>About</li>
        <li>Dashboard</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;