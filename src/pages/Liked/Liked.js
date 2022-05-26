import React, { useEffect, useContext } from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Liked.css";
import { AuthContext } from "../../context/auth-context";

export default function Liked() {
  const navigate = useNavigate();
  const { logged } = useContext(AuthContext);
  const likedVideos = useSelector((state) => state.likes);

  const selectOptions = [
    { name: "Add to likes", functionCall: "addToLikes" },
    { name: "Add to Watch later", functionCall: "addToWatchLater" },
    { name: "Remove from likes", functionCall: "removeFromLiked" },
  ];

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/login");
  }, []);

  return (
    <aside className="home">
      <Filters />
      <div className="like-container">
        {logged && <h1>Liked videos ({likedVideos.likes.length})</h1>}
        <div className="flex-wrap">
          {logged
            ? likedVideos.likes.map((likedVideo) => (
                <div className="bs" key={likedVideo._id}>
                  <VideoCard video={likedVideo} selectOptions={selectOptions} />
                </div>
              ))
            : ""}
        </div>
      </div>
    </aside>
  );
}
