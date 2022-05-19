import React from "react";
import { Link, useParams } from "react-router-dom";
import Filters from "../Filters/Filters";
import VideoCard from "../VideoCard/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteVideo } from "../../features/playlist/deletePlaylist-slice";
import "./ShowPlaylist.css";

export default function ShowPlaylist() {
  const videoId = useParams();
  const encodedToken = localStorage.getItem("token");
  let dispatch = useDispatch();
  let playlists = useSelector((state) => state.playlist.wholePlaylist);

  const selectOptions = [
    { name: "Add to likes", functionCall: "addToLikes" },
    { name: "Add to Watch later", functionCall: "addToWatchLater" },
    { name: "Remove from Playlist", functionCall: "deleteVideo" },
  ];

  return (
    <aside className="home">
      <Filters />
      <div className="like-container">
        <h1>
          Playlist (
          {playlists
            .filter((playlist) => playlist._id === videoId.videoId)
            .map((obj) => obj.videos.length)}
          )
        </h1>
        <div className="flex-wrap">
          {encodedToken ? (
            playlists
              .filter((playlist) => playlist._id === videoId.videoId)
              .map((obj) =>
                obj.videos.map((video) => (
                  <div className="playlist-video" key={videoId}>
                    <VideoCard video={video} selectOptions={selectOptions} />
                    <i
                      className="fas fa-2x fa-trash-alt"
                      onClick={() =>
                        dispatch(deleteVideo([videoId.videoId, video._id]))
                      }
                    ></i>
                  </div>
                ))
              )
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
