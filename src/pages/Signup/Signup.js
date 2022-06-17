import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Signup.css";

export default function Signup() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    newPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const signupHandler = async () => {
    if (
      !userData.firstName ||
      !userData.lastName ||
      !userData.email ||
      !userData.password ||
      !userData.newPassword ||
      userData.password !== userData.newPassword ||
      !userData.email.includes("@")
    ) {
      setError(true);
      return;
    }

    try {
      const response = await axios.post(`/api/auth/signup`, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: userData.password,
      });
      localStorage.setItem("token", response.data.encodedToken);
      navigate("/");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <aside className="SignUp center">
      <form className="signUp-Container">
        <h1 className="signUp-heading">Sign Up</h1>
        <div className="signup-contents">
          <label htmlFor="userFName" className="userNm">
            First Name
          </label>
          <input
            type="text"
            className="userNm"
            id="userFName"
            placeholder="Enter your First Name"
            value={userData.firstName}
            onChange={(event) =>
              setUserData({ ...userData, firstName: event.target.value })
            }
          />
          <br />
          <label htmlFor="userLName" className="userNm">
            Last Name
          </label>
          <input
            type="text"
            className="userNm"
            id="userLName"
            placeholder="Enter your Last Name"
            value={userData.lastName}
            onChange={(event) =>
              setUserData({ ...userData, lastName: event.target.value })
            }
          />
          <br />
          <label htmlFor="userEmail" className="userNm">
            Email address
          </label>
          <input
            type="text"
            className="userNm"
            id="userEmail"
            placeholder="johndoe@gmail.com"
            value={userData.email}
            onChange={(event) =>
              setUserData({ ...userData, email: event.target.value })
            }
          />
          <br />
          <label htmlFor="userNewPswd" className="userPswd">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            className="userPswd"
            id="userNewPswd"
            placeholder="Enter a new password"
            value={userData.password}
            onChange={(event) =>
              setUserData({ ...userData, password: event.target.value })
            }
          />
          <i
            className={`far ${
              showPassword ? "fa-eye" : "fa-eye-slash"
            } showPassword`}
            onClick={() => setShowPassword(!showPassword)}
          ></i>
          <br />
          <label htmlFor="userRetypePswd" className="userPswd">
            Confirm Password
          </label>
          <input
            type={showRePassword ? "text" : "password"}
            className="userPswd"
            id="userRetypePswd"
            placeholder="Re-type your password"
            value={userData.newPassword}
            onChange={(event) =>
              setUserData({ ...userData, newPassword: event.target.value })
            }
          />
          <i
            className={`far ${
              showPassword ? "fa-eye" : "fa-eye-slash"
            } showRePassword`}
            onClick={() => setShowRePassword(!showRePassword)}
          ></i>
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
              onClick={() => setDisable(!disable)}
            />
            <label htmlFor="userAgreement">
              I accept all Terms & Conditions
            </label>
          </div>
          <br />
          <button
            disabled={disable}
            className="signup-btns createNewAccount-btn"
            onClick={(event) => {
              event.preventDefault();
              signupHandler();
            }}
          >
            Create my New Account
          </button>
          <br />
          <button className="signup-btns toLoginPage-btn">
            <Link to="/login">Already have an account &gt;</Link>
          </button>
        </div>
      </form>
      {error && <div className="signIn-error">Invalid input !</div>}
    </aside>
  );
}
