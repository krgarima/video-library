import React, { useContext } from "react";
import { AuthContext } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const { setLogged } = useContext(AuthContext);
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="logo">~ Vokkal ~</div>
      <div className="searchArea">
        <input />
      </div>
      <ul className="navicons">
        <button
          className="log"
          onClick={() => {
            if (encodedToken) {
              setLogged(false);
              localStorage.removeItem("token");
              navigate("/");
            } else {
              navigate("/login");
            }
          }}
        >
          {encodedToken ? "Log Out" : " Log In"}
        </button>
        <li>
          <i className="fas fa-2x fa-user-circle"></i>
        </li>
      </ul>
    </div>
  );
}
