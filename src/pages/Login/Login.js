import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const {
    setLogged,
    userName,
    setUserName,
    password,
    setPassword,
    rememberPassword,
    setRememberPassword,
  } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Login | Vokkal Video Library";
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!userName || !password) {
      setError(true);
      return;
    }
    try {
      const response = await axios.post(`/api/auth/login`, {
        email: userName,
        password: password,
      });
      setLogged(true);
      localStorage.setItem("token", response.data.encodedToken);
      if (!rememberPassword) {
        setUserName("");
        setPassword("");
      }
    } catch (error) {
      console.log(error);
    }
    navigate(-1);
  };

  const setDummyData = async (e) => {
    e.preventDefault();
    setUserName("marryjoe@gmail.com");
    setPassword("marryjoe12345");
    setError(false);
  };

  return (
    <aside className="login">
      <form className="login-form">
        <h1 className="login-heading">Login</h1>
        <div className="login-contents">
          <label htmlFor="userNm" className="userNm">
            Username
          </label>
          <input
            type="text"
            className="userNm"
            id="userNm"
            placeholder="Enter your username"
            value={userName}
            onChange={(e) => {
              setError(false);
              setUserName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="userPswd" className="userPswd">
            Password
          </label>
          <div>
            <input
              type={showPassword ? "text" : "password"}
              className="userPswd"
              id="userPswd"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setError(false);
                setPassword(e.target.value);
              }}
            />
            <span className="togglePswd">
              <i
                className={`far ${
                  showPassword ? "fa-eye" : "fa-eye-slash"
                } showLoginPassword`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            </span>
          </div>
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
              checked={rememberPassword ? "true" : ""}
              onClick={() => setRememberPassword(!rememberPassword)}
            />
            <label htmlFor="userAgreement">Remember me</label>
          </div>
          <br />
          <button
            className="login-btns createNewAccount-btn"
            onClick={handleLogin}
          >
            Login
          </button>
          <br />
          <button className="login-btns dummy-btn" onClick={setDummyData}>
            Login as Guest
          </button>
          <button className="login-btns toSignUpPage-btn">
            <Link to="/signup">Create New Account &gt;</Link>
          </button>
        </div>
      </form>
      {error && <div className="signIn-error">Invalid input !</div>}
    </aside>
  );
}
