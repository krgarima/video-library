import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar-container">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "sidebar activeSidebar" : "sidebar inActiveSidebar"
        }
      >
        <i className="fas fa-home"></i>
        <span>Home</span>
      </NavLink>
      <NavLink
        to="/liked"
        className={({ isActive }) =>
          isActive ? "sidebar activeSidebar" : "sidebar inActiveSidebar"
        }
      >
        <i className="fas fa-heart"></i>

        <span>Liked</span>
      </NavLink>
      <NavLink
        to="/playlist"
        className={({ isActive }) =>
          isActive ? "sidebar activeSidebar" : "sidebar inActiveSidebar"
        }
      >
        <i className="fab fa-google-play"></i>
        <span>Playlist</span>
      </NavLink>

      <NavLink
        to="/watchLater"
        className={({ isActive }) =>
          isActive ? "sidebar activeSidebar" : "sidebar inActiveSidebar"
        }
      >
        <i className="fas fa-clock"></i>
        <span>Watch later</span>
      </NavLink>

      <NavLink
        to="/history"
        className={({ isActive }) =>
          isActive ? "sidebar activeSidebar" : "sidebar inActiveSidebar"
        }
      >
        <i className="fas fa-history"></i>
        <span>History</span>
      </NavLink>
    </aside>
  );
}
