import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./context/auth-context";
import { FilterContextProvider } from "./context/filter-context";
import { VideoListContextProvider } from "./context/video-context";
import { SearchContextProvider } from "./context/search-context";

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
            <SearchContextProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </SearchContextProvider>
          </VideoListContextProvider>
        </FilterContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
