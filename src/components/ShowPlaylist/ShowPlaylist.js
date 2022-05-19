import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Filters from "../Filters/Filters";
import VideoCard from "../VideoCard/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteVideo } from "../../features/playlist/deletePlaylist-slice";
import "./ShowPlaylist.css";
// import { getPlaylistVideos } from "../../features/playlist/playlist-slice";

export default function ShowPlaylist() {
  const videoId = useParams();
  const encodedToken = localStorage.getItem("token");
  let dispatch = useDispatch();
  let playlists = useSelector((state) => state.playlist.wholePlaylist);

  // let playlistVideos = useSelector((state) => state.playlist.playlistVideos);
  // console.log(playlistVideos);

  // useEffect(() => {
  //   dispatch(getPlaylistVideos(videoId.videoId));
  // }, []);

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
            : ""}
        </div>
      </div>
    </aside>
  );
}
