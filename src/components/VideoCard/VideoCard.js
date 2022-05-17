import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./VideoCard.css";

export default function VideoCard({ video, selectOptions }) {
  const { _id, title, creator, date, views, photo } = video;
  const [showOptions, setShowOptions] = useState(true);

  return (
    <div className="video-card">
      <Link className="video-link" to={`/watchvideo/${_id}`}>
        {/* <iframe src={url} title={title} allowFullScreen></iframe> */}
        <img src={photo} alt="" srcSet="" className="video-img" />
      </Link>
      <div className="title">
        <strong>{title}</strong>
        <i
          className="fas fa-ellipsis-v"
          onClick={() => setShowOptions(!showOptions)}
        >
          <ul className={`options ${showOptions ? "showOptions" : ""}`}>
            {selectOptions.map((list) => (
              <li key={Math.random()} onClick={() => setShowOptions(true)}>
                {list.name}
              </li>
            ))}
          </ul>
        </i>
      </div>
      <div className="creator">{creator}</div>
      <div className="views-time">
        <span>{views}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}
