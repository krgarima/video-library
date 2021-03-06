import React, { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./WatchLater.css";

export default function WatchLater() {
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();
  let watched = useSelector((state) => state.watchLater.watchLater);

  const selectOptions = [
    // { name: "Add to likes", functionCall: "addToLikes" },
    { name: "Remove from watch later", functionCall: "removeFromWatchLater" },
  ];

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/login");
  }, []);

  useEffect(() => {
    document.title = "Watch later | Vokkal Video Library";
  }, []);

  return (
    <aside className="home">
      <Filters />
      <div className="watch-later-container">
        <h1 className="third-heading">
          Watch later videos ({watched?.length})
        </h1>
        <div className="flex-wrap">
          {encodedToken
            ? watched?.map((watchedVideo) => (
                <div className="bs" key={watchedVideo._id}>
                  <VideoCard
                    video={watchedVideo}
                    selectOptions={selectOptions}
                  />
                </div>
              ))
            : ""}

          {watched?.length === 0 && (
            <Link to="/">
              <button className="redirect-login-btn">Watch videos</button>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
