import React from "react";
import { Link, useParams } from "react-router-dom";
import Filters from "../Filters/Filters";
import VideoCard from "../VideoCard/VideoCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteVideo } from "../../features/playlist/playlist-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ShowPlaylist.css";

export default function ShowPlaylist() {
  const videoId = useParams();
  const encodedToken = localStorage.getItem("token");
  let dispatch = useDispatch();
  let playlists = useSelector((state) => state.playlist.wholePlaylist);

  const selectOptions = [
    { name: "Add to likes", functionCall: "addToLikes" },
    { name: "Add to Watch later", functionCall: "addToWatchLater" },
    // { name: "Remove from Playlist", functionCall: "deleteVideo" },
  ];

  const notify = (msg) =>
    toast.success(msg, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

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
                      className="fas fa-3x fa-trash-alt"
                      onClick={() => {
                        dispatch(deleteVideo([videoId.videoId, video._id]));
                        notify(
                          "Video has been removed from playlist. Please check your playlist!"
                        );
                      }}
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </aside>
  );
}
