import React, { useContext } from "react";
// import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  //   const { setLogged } = useContext(AuthContext);
  //   const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="searchArea">
        <input />
      </div>
      <ul className="navicons">
        <li>icon</li>

        <button
          className="log"
          //   onClick={() => {
          //     if (encodedToken) {
          //       setLogged(false);
          //       localStorage.removeItem("token");
          //       navigate("/");
          //     } else {
          //       navigate("/login");
          //     }
          //   }}
        >
          Login
          {/* {encodedToken ? "Log Out" : " Log In"} */}
        </button>
      </ul>
    </div>
  );
}
