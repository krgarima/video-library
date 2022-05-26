import React from "react";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../features/playlist/playlist-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PlaylistCard.css";

export default function PlaylistCard({ playlistCard }) {
  const dispatch = useDispatch();
  const { title, videos, _id } = playlistCard;

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
    <div className="playlist-card">
      <img
        src={videos[0]?.photo || "/assets/images/defaultPlaylistImage.jpg"}
        alt="Playlist card"
        className="playlist-video-img"
      />
      <div className="shadowEffect">
        <p className="numOfVideos">{videos.length}</p>
        <p className="vid">{videos.length === 1 ? "video" : "videos"}</p>
      </div>
      <p className="playlist-title">{title}</p>
      <i
        className="fas fa-2x fa-minus-circle"
        onClick={() => {
          dispatch(deletePlaylist(_id));
          notify("Playlist has been deleted!");
        }}
      ></i>

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
  );
}
