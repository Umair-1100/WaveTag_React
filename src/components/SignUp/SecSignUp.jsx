import { useState } from "react";
import { SocialBtn } from "../Sign in/SocialBtn";
import { Email, Eye, Username, Lock } from "../../icon/Add";
import { Link, useNavigate } from "react-router-dom";

export const SecSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [hide, setHide] = useState("password");
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    if (!email || !password || !username) {
      alert("Please fill all fields.");
      return;
    }
    if (email || password || username) {
      if (!email.includes("@gmail.com")) {
        alert("Please include '@' and 'gmail.com' in email address");
        return;
      }
    }
    
    e.preventDefault();
    const data = { username, email, password };
    setUsername("");
    setEmail("");
    setPassword("");
    navigate("/verification");
  };

  return (
    <div className="form-main">
      <div className="form-logo">
        <img src="/Signlogo.png" alt="Logo" />
        <h1>Sign In</h1>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="email-input">
          <span>
            <Username />
          </span>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Name"
          />
        </div>
        
        <div className="email-input">
          <span>
            <Email />
          </span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className="email-input">
          <span>
            <Lock />
          </span>
          <input
            type={hide}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <pre
            className="eye_form-icon"
            onClick={() => setHide(hide === "password" ? "text" : "password")}
          >
            <Eye />
          </pre>
        </div>

        <div className="forget-pass">
          <p>Forgot password?</p>
        </div>
        <button className="login_btn" type="submit">
          Sign Up
        </button>
      </form>

      <div className="or_lines">
        <h3>Or</h3>
      </div>

      <SocialBtn />

      <h3 className="text-center text-[0.9rem] my-2 text-[#828282]">
        Have an account yet?
      </h3>
      <Link to="/" className="signin_btn">Sign In</Link>
    </div>
  );
};
