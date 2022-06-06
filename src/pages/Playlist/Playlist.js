import React, { useEffect } from "react";
import Filters from "../../components/Filters/Filters";
import PlaylistCard from "../../components/PlaylistCard/PlaylistCard";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylist } from "../../features/playlist/playlist-slice";

export default function Playlist() {
  const encodedToken = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let playlists = [];
  playlists = useSelector((state) => state.playlist.wholePlaylist);

  useEffect(() => {
    dispatch(getPlaylist());
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/login");
  }, []);

  return (
    <aside className="home">
      <Filters />
      <div className="like-container">
        <h1>
          Playlist ( {playlists?.length}{" "}
          {playlists && playlists?.length <= 1 ? "playlist" : "playlists"} )
        </h1>
        <div className="flex-wrap">
          {encodedToken
            ? playlists?.map((playlistCard) => (
                <div key={playlistCard._id}>
                  <Link to={`/ShowPlaylist/${playlistCard._id}`}>
                    <PlaylistCard playlistCard={playlistCard} />
                  </Link>
                </div>
              ))
            : ""}
          {playlists?.length === 0 && (
            <Link to="/">
              <button className="redirect-login-btn">Watch videos</button>
            </Link>
          )}
        </div>
      </div>
    </aside>
  );
}
