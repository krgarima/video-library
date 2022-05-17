import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

export default function Signup() {
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
          />
          <br />
          <label htmlFor="userNewPswd" className="userPswd">
            Password
          </label>
          <input
            type="password"
            className="userPswd"
            id="userNewPswd"
            placeholder="Enter a new password"
          />
          <br />
          <label htmlFor="userRetypePswd" className="userPswd">
            Confirm Password
          </label>
          <input
            type="password"
            className="userPswd"
            id="userRetypePswd"
            placeholder="Re-type your password"
          />
          <br />
          <div className="check">
            <input
              type="checkbox"
              name="userAgreement"
              className="userAgreement"
              id="userAgreement"
            />
            <label htmlFor="userAgreement">
              I accept all Terms & Conditions
            </label>
          </div>
          <br />
          <button className="signup-btns createNewAccount-btn">
            Create my New Account
          </button>
          <br />
          <button className="signup-btns toLoginPage-btn">
            <Link to="/login">Already have an account &gt;</Link>
          </button>
        </div>
      </form>
    </aside>
  );
}
