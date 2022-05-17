import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Playlist from "./pages/Playlist/Playlist";
import Liked from "./pages/Liked/Liked";
import WatchLater from "./pages/WatchLater/WatchLater";
import History from "./pages/History/History";
import SingleVideo from "./components/SingleVideo/SingleVideo";
import ShowPlaylist from "./components/ShowPlaylist/ShowPlaylist";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/watchLater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/watchvideo/:videoId" element={<SingleVideo />} />
        <Route path="/showPlaylist/:videoId" element={<ShowPlaylist />} />

        <Route
          path="*"
          element={
            <main
              style={{
                padding: "1rem",
                backgroundColor: "var(--background-color)",
              }}
            >
              <p className="error404">404 Page Not Found!</p>
              <p className="error404-msg">
                Oops!! Looks like you have entered a wrong URL
              </p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
