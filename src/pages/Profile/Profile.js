import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Filters from "../../components/Filters/Filters";
import "./Profile.css";

let user = JSON.parse(localStorage.getItem("user")) ?? {
  name: "Marry Joe",
  email: "marryjoe@gmail.com",
  mobile: "+91 9876543210",
  address: "0, Unknown address",
  dob: "10/10/9999",
};

export default function Profile() {
  const [userData, setUserData] = useState(user);
  const [saveData, setSaveData] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) navigate("/login");
  }, []);

  useEffect(() => {
    document.title = "Profile | Vokkal Video Library";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveData(!saveData);
    if (saveData) localStorage.setItem("user", JSON.stringify(userData));
  };

  return (
    <aside className="home">
      <Filters />
      <div className="profile-container">
        <div className="user-profile">
          <h1>Profile</h1>
          <label htmlFor="name">Full Name: </label>
          <input
            type="text"
            name=""
            id="name"
            disabled={!saveData}
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            disabled={!saveData}
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <label htmlFor="phone">Mobile: </label>
          <input
            type="text"
            id="phone"
            disabled={!saveData}
            value={userData.mobile}
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
          />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            disabled={!saveData}
            value={userData.address}
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
          />
          <label htmlFor="dob">DOB: </label>
          <input
            type="text"
            id="dob"
            disabled={!saveData}
            value={userData.dob}
            onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
          />
          <button type="submit" onClick={handleSubmit}>
            {saveData ? "Save" : " Edit"}
          </button>
        </div>
      </div>
    </aside>
  );
}
