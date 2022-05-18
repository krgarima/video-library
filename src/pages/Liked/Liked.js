import React from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Liked.css";

export default function Liked() {
  const encodedToken = localStorage.getItem("token");
  const likedVideos = useSelector((state) => state.likes);

  const selectOptions = [
    { name: "Add to likes", functionCall: "" },
    { name: "Add to Watch later", functionCall: "" },
    { name: "Remove from likes", functionCall: "" },
  ];

  return (
    <aside className="home">
      <Filters />
      <div className="like-container">
        {encodedToken && <h1>Liked videos ({likedVideos.likes.length})</h1>}
        <div className="flex-wrap">
          {encodedToken ? (
            likedVideos.likes.map((likedVideo) => (
              <div className="bs" key={likedVideo._id}>
                <VideoCard video={likedVideo} selectOptions={selectOptions} />
              </div>
            ))
          ) : (
            <Link to="/login">
              <button className="redirect-login-btn">Log in first</button>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
