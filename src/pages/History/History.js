import React from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearHistory } from "../../features/history/history-slice";
import "./History.css";

export default function History() {
  const encodedToken = localStorage.getItem("token");
  const dispatch = useDispatch();
  let historyVideos = useSelector((state) => state.historyVideos.historyVideos);

  const selectOptions = [
    { name: "Add to likes", functionCall: "addToLikes" },
    { name: "Add to Watch later", functionCall: "addToWatchLater" },
    { name: "Remove from history", functionCall: "removeFromHistory" },
  ];

  return (
    <aside className="home">
      <Filters />
      <div className="like-container">
        <h1>From history ({historyVideos.length})</h1>
        <div className="flex-wrap">
          {encodedToken ? (
            historyVideos.map((historyVideo) => (
              <div className="history-video" key={historyVideo._id}>
                <VideoCard video={historyVideo} selectOptions={selectOptions} />
              </div>
            ))
          ) : (
            <Link to="/login">
              <button className="redirect-login-btn">Log in first</button>
            </Link>
          )}
        </div>
        <div className="clear-history" onClick={() => dispatch(clearHistory())}>
          Clear All
        </div>
      </div>
    </aside>
  );
}
