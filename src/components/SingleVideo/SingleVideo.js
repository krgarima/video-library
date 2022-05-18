import React, { useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { videoListContext } from "../../context/video-context";
import { useDispatch, useSelector } from "react-redux";

import { addToLikes, removeFromLiked } from "../../features/like/like-slice";

import "./SingleVideo.css";

export default function SingleVideo() {
  const encodedToken = localStorage.getItem("token");
  const { videoList } = useContext(videoListContext);

  const videoId = useParams();
  const dispatch = useDispatch();
  let location = useLocation();
  let liked = useSelector((state) => state.likes.likes);
  const findVideo = videoList.find((video) => video._id === videoId.videoId);
  const { title, creator, genre, date, views, url } = findVideo;

  const checkLiked = liked.some(
    (likedVideo) => likedVideo._id === videoId.videoId
  );

  return (
    <aside className="singleVideo">
      <div className="video">
        <iframe src={url} title={title} allowFullScreen></iframe>
      </div>
      <div className="videoTitle">{title}</div>
      <div className="videoCreator">{creator}</div>
      <div className="interact">
        {checkLiked ? (
          <i
            className={`fas fa-thumbs-up select-genre `}
            onClick={() => dispatch(removeFromLiked(videoId.videoId))}
          >
            <span>UnLike</span>
          </i>
        ) : (
          <i
            className={`far fa-thumbs-up select-genre`}
            onClick={() => dispatch(addToLikes(findVideo))}
          >
            <span>Like</span>
          </i>
        )}

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
