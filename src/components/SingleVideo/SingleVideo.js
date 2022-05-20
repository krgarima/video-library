import React, { useState, useContext, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { videoListContext } from "../../context/video-context";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
import { addToHistory } from "../../features/history/history-slice";

export default function SingleVideo() {
  let encodedToken = "";
  const navigate = useNavigate();
  const [hideSaveToPlaylist, setHideSaveToPlaylist] = useState(true);
  const [hideCreateNewPlaylist, setHideCreatePlaylist] = useState(true);
  const [newPlaylistName, setNewPlaylistName] = useState("");
  const { videoList } = useContext(videoListContext);
  const videoId = useParams();
  const dispatch = useDispatch();
  let location = useLocation();

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

  useEffect(() => {
    dispatch(addToHistory(findVideo));
  }, []);

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
            onClick={() => {
              dispatch(removeFromLiked(videoId.videoId));
              encodedToken = localStorage.getItem("token");
              if (!encodedToken) navigate("/login");
              else dispatch(removeFromLiked(videoId.videoId));
            }}
          >
            <span>UnLike</span>
          </i>
        ) : (
          <i
            className={`far fa-thumbs-up select-genre`}
            onClick={() => {
              encodedToken = localStorage.getItem("token");
              if (!encodedToken) navigate("/login");
              else dispatch(addToLikes(findVideo));
            }}
          >
            <span>Like</span>
          </i>
        )}

        {checkWatched ? (
          <i
            className={`fas fa-clock select-genre `}
            onClick={() => {
              encodedToken = localStorage.getItem("token");
              if (!encodedToken) navigate("/login");
              else dispatch(removeFromWatchLater(videoId.videoId));
            }}
          >
            <span>Watch later</span>
          </i>
        ) : (
          <i
            className={`far fa-clock select-genre`}
            onClick={() => {
              encodedToken = localStorage.getItem("token");
              if (!encodedToken) navigate("/login");
              else dispatch(addToWatchLater(findVideo));
            }}
          >
            <span>Watch later</span>
          </i>
        )}

        <i
          className="far fa-copy select-genre"
          onClick={() => {
            notify("Link has been copied successfully!");
            navigator.clipboard.writeText(
              "https://vokkal.netlify.app" + location.pathname
            );
          }}
        >
          <span>Copy</span>
        </i>

        <i
          className="far fa-save select-genre"
          onClick={() => {
            encodedToken = localStorage.getItem("token");
            if (!encodedToken) navigate("/login");
            else setHideSaveToPlaylist(false);
          }}
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
                    notify("Video added to the playlist!");
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
                notify("A new Playlist has been created!");
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
    </aside>
  );
}
