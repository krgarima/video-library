import React, { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearHistory } from "../../features/history/history-slice";
import "./History.css";

export default function History() {
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let historyVideos = useSelector((state) => state.historyVideos.historyVideos);

  const selectOptions = [
    // { name: "Add to likes", functionCall: "addToLikes" },
    // { name: "Add to Watch later", functionCall: "addToWatchLater" },
    { name: "Remove from history", functionCall: "removeFromHistory" },
  ];

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/login");
  }, []);

  useEffect(() => {
    document.title = "History | Vokkal Video Library";
  }, []);

  return (
    <aside className="home">
      <Filters />
      <div className="like-container">
        <h1 className="third-heading">
          Visited videos ({historyVideos?.length})
        </h1>
        <div className="flex-wrap">
          {encodedToken
            ? historyVideos?.map((historyVideo) => (
                <div className="history-video" key={historyVideo._id}>
                  <VideoCard
                    video={historyVideo}
                    selectOptions={selectOptions}
                  />
                </div>
              ))
            : ""}
          {historyVideos?.length === 0 && (
            <Link to="/">
              <button className="redirect-login-btn">Watch videos</button>
            </Link>
          )}
        </div>
        <button
          className="clear-history"
          onClick={() => dispatch(clearHistory())}
        >
          Clear all
        </button>
      </div>
    </aside>
  );
}
