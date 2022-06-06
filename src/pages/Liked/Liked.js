import React, { useEffect, useContext } from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./Liked.css";
import { AuthContext } from "../../context/auth-context";

export default function Liked() {
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const { logged } = useContext(AuthContext);
  const likedVideos = useSelector((state) => state.likes.likes);

  const selectOptions = [
    // { name: "Add to Watch later", functionCall: "addToWatchLater" },
    { name: "Remove from likes", functionCall: "removeFromLiked" },
  ];

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/login");
  }, []);

  return (
    <aside className="home">
      <Filters />
      <div className="like-container">
        <h1 className="third-heading">Liked videos ({likedVideos?.length})</h1>
        <div className="flex-wrap">
          {encodedToken
            ? likedVideos?.map((likedVideo) => (
                <div className="bs" key={likedVideo._id}>
                  <VideoCard video={likedVideo} selectOptions={selectOptions} />
                </div>
              ))
            : ""}

          {likedVideos?.length === 0 && (
            <Link to="/">
              <button className="redirect-login-btn">Watch videos</button>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
