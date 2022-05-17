import React, { useState, createContext } from "react";

const videoListContext = createContext();

const VideoListContextProvider = ({ children }) => {
  const [videoList, setVideoList] = useState([]);

  return (
    <div>
      <videoListContext.Provider value={{ videoList, setVideoList }}>
        {children}
      </videoListContext.Provider>
    </div>
  );
};

export { VideoListContextProvider, videoListContext };
