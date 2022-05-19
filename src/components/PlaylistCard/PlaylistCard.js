import React from "react";
import { useDispatch } from "react-redux";
import { deletePlaylist } from "../../features/playlist/deletePlaylist-slice";
import "./PlaylistCard.css";

export default function PlaylistCard({ playlistCard }) {
  const dispatch = useDispatch();
  const { title, videos, _id } = playlistCard;

  return (
    <div className="playlist-card">
      <img
        src={videos[0].photo}
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
        onClick={() => dispatch(deletePlaylist(_id))}
      ></i>
    </div>
  );
}
