import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { FilterContextProvider } from "./context/filter-context";
import { VideoListContextProvider } from "./context/video-context";

import "./index.css";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <FilterContextProvider>
        <VideoListContextProvider>
          <App />
        </VideoListContextProvider>
      </FilterContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
