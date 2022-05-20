import axios from "axios";
import React, { useEffect, useContext } from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { FilterContext } from "../../context/filter-context";
import { videoListContext } from "../../context/video-context";
import { SearchContext } from "../../context/search-context";
import "./Home.css";

export default function Home() {
  const { videoList, setVideoList } = useContext(videoListContext);
  const { filter } = useContext(FilterContext);
  const { searchList } = useContext(SearchContext);

  const selectOptions = [
    { name: "Add to likes", functionCall: "addToLikes" },
    { name: "Add to Watch later", functionCall: "addToWatchLater" },
  ];

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/api/videos");
        setVideoList(data.data.videos);
      } catch (err) {
        alert(err);
      }
    })();
  }, []);

  return (
    <aside className="home">
      <Filters />
      <div className="video-container">
        {filter
          ? videoList
              .filter((videos) => videos.genre === filter)
              .map((video) => (
                <div className="bs" key={video._id}>
                  <VideoCard video={video} selectOptions={selectOptions} />
                </div>
              ))
          : searchList.length !== 0
          ? searchList.map((video) => (
              <div className="bs" key={video._id}>
                <VideoCard video={video} selectOptions={selectOptions} />
              </div>
            ))
          : videoList.map((video) => (
              <div className="bs" key={video._id}>
                <VideoCard video={video} selectOptions={selectOptions} />
              </div>
            ))}
      </div>
    </aside>
  );
}
