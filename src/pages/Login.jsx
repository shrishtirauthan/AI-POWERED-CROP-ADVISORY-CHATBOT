import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import "./Login.css";

function Login({ darkMode, setDarkMode }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    alert("Login Successful!");
  };

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="login-page">

        <div className="login-card">

          <h1>Welcome Back 👋</h1>

          <p>
            Login to continue using the AI Crop Advisory System.
          </p>

          <form onSubmit={handleLogin}>

            <div className="form-group">
              <label>Email</label>

              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>

              <Input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button
              text="Login"
              type="submit"
            />

          </form>

          <div className="login-footer">
            Don't have an account?
            <span> Register</span>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Login;