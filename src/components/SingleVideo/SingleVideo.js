import React, { useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { videoListContext } from "../../context/video-context";
import { useDispatch, useSelector } from "react-redux";

import { addToLikes, removeFromLiked } from "../../features/like/like-slice";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../features/watchLater/watchLater-slice";
import {
  createPlaylist,
  addToPlaylist,
} from "../../features/playlist/playlist-slice";

import "./SingleVideo.css";

export default function SingleVideo() {
  const [hideSaveToPlaylist, setHideSaveToPlaylist] = useState(true);
  const [hideCreateNewPlaylist, setHideCreatePlaylist] = useState(true);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const { videoList } = useContext(videoListContext);
  const videoId = useParams();
  const dispatch = useDispatch();
  let location = useLocation();

  let liked = useSelector((state) => state.likes.likes);
  let watched = useSelector((state) => state.watchLater.watchLater);
  let newPlaylist = useSelector((state) => state.playlist.playlists);

  const findVideo = videoList.find((video) => video._id === videoId.videoId);
  const { title, creator, genre, date, views, url } = findVideo;

  const checkLiked = liked.some(
    (likedVideo) => likedVideo._id === videoId.videoId
  );
  const checkWatched = watched.some(
    (watchedVideo) => watchedVideo._id === videoId.videoId
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

        {checkWatched ? (
          <i
            className={`fas fa-clock select-genre `}
            onClick={() => dispatch(removeFromWatchLater(videoId.videoId))}
          >
            <span>Watch later</span>
          </i>
        ) : (
          <i
            className={`far fa-clock select-genre`}
            onClick={() => dispatch(addToWatchLater(findVideo))}
          >
            <span>Watch later</span>
          </i>
        )}

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

        <i
          className="far fa-save select-genre"
          onClick={() => setHideSaveToPlaylist(false)}
        >
          <span>Save</span>
        </i>

        <div
          className={`saveToPlaylist ${
            hideSaveToPlaylist ? "hideSaveToPlaylist" : ""
          }`}
        >
          <div className="saveToCancel space-between">
            <span>Save to</span>
            <span
              className="cancel"
              onClick={() => setHideSaveToPlaylist(true)}
            >
              x
            </span>
          </div>

          <ul className="createdPlaylist">
            {newPlaylist.map((choosePlaylist) => (
              <li className="space-between" key={choosePlaylist._id}>
                <input
                  type="checkbox"
                  name=""
                  id=""
                  onChange={() => {
                    dispatch(addToPlaylist([findVideo, choosePlaylist._id]));
                    setHideSaveToPlaylist(true);
                  }}
                />
                <span>{choosePlaylist.title}</span>
              </li>
            ))}
          </ul>

          <button
            className="newPlaylist space-between "
            onClick={() => {
              setHideSaveToPlaylist(true);
              setHideCreatePlaylist(false);
            }}
          >
            <span>+</span>
            <span>Create new playlist</span>
          </button>
        </div>

        <div
          className={`createNewPlaylist ${
            hideCreateNewPlaylist ? "hideCreateNewPlaylist" : ""
          }`}
        >
          <div className="saveToCancel space-between">
            <span>Create new playlist</span>
            <span
              className="cancel"
              onClick={() => setHideCreatePlaylist(true)}
            >
              x
            </span>
          </div>
          <div className="createPlaylist">
            <input
              type="text"
              value={newPlaylistName}
              onChange={(event) => setNewPlaylistName(event.target.value)}
            />
            <button
              onClick={() => {
                dispatch(createPlaylist(newPlaylistName));
                setHideSaveToPlaylist(false);
                setHideCreatePlaylist(true);
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
