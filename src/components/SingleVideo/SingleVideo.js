import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { videoListContext } from "../../context/video-context";
import "./SingleVideo.css";

export default function SingleVideo() {
  const { videoList } = useContext(videoListContext);

  const videoId = useParams();
  let location = useLocation();

  const findVideo = videoList.find((video) => video._id === videoId.videoId);
  const { title, creator, genre, date, views, url } = findVideo;

  const encodedToken = localStorage.getItem("token");

  return (
    <aside className="singleVideo">
      <div className="video">
        <iframe src={url} title={title} allowFullScreen></iframe>
      </div>
      <div className="videoTitle">{title}</div>
      <div className="videoCreator">{creator}</div>
      <div className="interact">
        <i className={`far fa-thumbs-up select-genre `}>
          <span>Like</span>
        </i>

        <i className={`far fa-clock select-genre `}>
          <span>Watch later</span>
        </i>

        <i
          className="far fa-copy select-genre"
          onClick={() =>
            navigator.clipboard.writeText(
              "https://deploy-preview-3--guileless-baklava-4364cb" +
                location.pathname
            )
          }
        >
          <span>Copy</span>
        </i>
        <i className="far fa-save select-genre">
          <span>Save</span>
        </i>
      </div>
    </aside>
  );
}
