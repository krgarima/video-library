import axios from "axios";
import React, { useEffect, useContext } from "react";
import Filters from "../../components/Filters/Filters";
import VideoCard from "../../components/VideoCard/VideoCard";
import { FilterContext } from "../../context/filter-context";
import { videoListContext } from "../../context/video-context";
import "./Home.css";

export default function Home() {
  const { videoList, setVideoList } = useContext(videoListContext);
  const { filter } = useContext(FilterContext);

  const selectOptions = [
    { name: "Add to likes", functionCall: "" },
    { name: "Add to Watch later", functionCall: "" },
  ];

  useEffect(() => {
    (async () => {
      try {
        const data = await axios.get("/api/videos");
        setVideoList(data.data.videos);
      } catch (err) {
        console.log(err);
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
          : videoList.map((video) => (
              <div className="bs" key={video._id}>
                <VideoCard video={video} selectOptions={selectOptions} />
              </div>
            ))}
      </div>
    </aside>
  );
}
