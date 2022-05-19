import React from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./WatchLater.css";

export default function WatchLater() {
  const encodedToken = localStorage.getItem("token");
  let watched = useSelector((state) => state.watchLater.watchLater);

  const selectOptions = [
    { name: "Add to likes", functionCall: "" },
    { name: "Remove from watch later", functionCall: "" },
  ];

  return (
    <aside className="home">
      <Filters />
      <div className="watch-later-container">
        <h1 className="third-heading">Watch later videos ({watched.length})</h1>
        <div className="flex-wrap">
          {encodedToken ? (
            watched.map((watchedVideo) => (
              <div className="bs" key={watchedVideo._id}>
                <VideoCard video={watchedVideo} selectOptions={selectOptions} />
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
