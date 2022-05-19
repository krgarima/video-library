import React from "react";
import { useParams } from "react-router-dom";
import Filters from "../Filters/Filters";
import VideoCard from "../VideoCard/VideoCard";
import { useDispatch, useSelector } from "react-redux";

export default function ShowPlaylist() {
  const videoId = useParams();
  const encodedToken = localStorage.getItem("token");
  let playlists = useSelector((state) => state.playlist.wholePlaylist);

  const selectOptions = [
    { name: "Add to likes", functionCall: "" },
    { name: "Add to Watch later", functionCall: "" },
    { name: "Remove from Playlist", functionCall: "" },
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
          {encodedToken
            ? playlists
                .filter((playlist) => playlist._id === videoId.videoId)
                .map((obj) =>
                  obj.videos.map((video) => (
                    <div key={videoId}>
                      <VideoCard video={video} selectOptions={selectOptions} />
                    </div>
                  ))
                )
            : ""}
        </div>
      </div>
    </aside>
  );
}
