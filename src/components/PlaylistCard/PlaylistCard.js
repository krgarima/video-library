import "./PlaylistCard.css";

import React from "react";

export default function PlaylistCard({ playlistCard }) {
  const { title, videos } = playlistCard;
  console.log(videos);
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
    </div>
  );
}
