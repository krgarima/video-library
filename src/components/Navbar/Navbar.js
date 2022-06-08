import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { SearchContext } from "../../context/search-context";
import { videoListContext } from "../../context/video-context";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const { setLogged } = useContext(AuthContext);
  const { setSearchList } = useContext(SearchContext);
  const { videoList } = useContext(videoListContext);
  const encodedToken = localStorage.getItem("token");
  const [showSearchBar, setShowSearchBar] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    e.preventDefault();
    navigate("/");
    setSearchValue(e.target.value);
    const searchedVideos = videoList.filter((videos) => {
      if (
        videos.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        videos.creator.toLowerCase().includes(e.target.value.toLowerCase()) ||
        videos.genre.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        return videos;
      }
    });
    setSearchList(searchedVideos);
  };

  return (
    <div className="navbar">
      <div className="logo">~ Vokkal ~</div>
      <div className="searchArea large-search">
        <input
          value={searchValue}
          onChange={handleChange}
          placeholder="Search for videos"
        />
      </div>
      {showSearchBar && (
        <div className="searchArea small-search">
          <input
            value={searchValue}
            onChange={handleChange}
            placeholder="Search for videos"
          />
        </div>
      )}
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
          <Link to="/myProfile">
            <i className="fas fa-2x fa-user-circle"></i>
          </Link>
        </li>
        <li>
          <i
            className="fas fa-2x fa-search search-icon"
            onClick={() => setShowSearchBar(!showSearchBar)}
          ></i>
        </li>
      </ul>
    </div>
  );
}
