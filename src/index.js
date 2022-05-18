import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./context/auth-context";
import { FilterContextProvider } from "./context/filter-context";
import { VideoListContextProvider } from "./context/video-context";

import { Provider } from "react-redux";
import { store } from "./app/store";

import "./index.css";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <FilterContextProvider>
          <VideoListContextProvider>
            <Provider store={store}>
              <App />
            </Provider>
          </VideoListContextProvider>
        </FilterContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
