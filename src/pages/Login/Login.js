import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { userName, setUserName, password, setPassword } =
    useContext(AuthContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

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
      localStorage.setItem("token", response.data.encodedToken);
    } catch (error) {
      alert(error);
    }
    navigate(-1);
  };

  const setDummyData = async (e) => {
    e.preventDefault();
    setUserName("adarshbalika@gmail.com");
    setPassword("adarshBalika123");
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
              setUserName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="userPswd" className="userPswd">
            Password
          </label>
          <input
            type="password"
            className="userPswd"
            id="userPswd"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
            />
            <label htmlFor="userAgreement">Remember me</label>
            <Link to="/" rel="noopener noreferrer" className="forgotPswd">
              Forgot your password?
            </Link>
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
            Add Dummy Username and Password
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
