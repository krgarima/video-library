import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToLikes } from "../../features/like/like-slice";
import { addToWatchLater } from "../../features/watchLater/watchLater-slice";
import { removeFromLiked } from "../../features/like/like-slice";
import { removeFromWatchLater } from "../../features/watchLater/watchLater-slice";
import { removeFromHistory } from "../../features/history/history-slice";
import "./VideoCard.css";

export default function VideoCard({ video, selectOptions }) {
  const { _id, title, creator, date, views, photo } = video;
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(true);
  let encodedToken = "";
  const dispatch = useDispatch();

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
              <li
                key={Math.random()}
                onClick={() => {
                  encodedToken = localStorage.getItem("token");
                  if (!encodedToken) navigate("/login");
                  else {
                    setShowOptions(true);
                    notify("Successfully done!");
                    switch (list.functionCall) {
                      case "addToLikes":
                        return dispatch(addToLikes(video));
                      case "addToWatchLater":
                        return dispatch(addToWatchLater(video));
                      case "removeFromLiked":
                        return dispatch(removeFromLiked(_id));
                      case "removeFromWatchLater":
                        return dispatch(removeFromWatchLater(_id));
                      case "removeFromHistory":
                        return dispatch(removeFromHistory(_id));
                      default:
                        return;
                    }
                  }
                }}
              >
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
