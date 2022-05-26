import React, { useState } from "react";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(userData));
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
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <label htmlFor="phone">Mobile: </label>
          <input
            type="text"
            id="phone"
            value={userData.mobile}
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
          />
          <label htmlFor="address">Address: </label>
          <input
            type="text"
            id="address"
            value={userData.address}
            onChange={(e) =>
              setUserData({ ...userData, address: e.target.value })
            }
          />
          <label htmlFor="dob">DOB: </label>
          <input
            type="text"
            id="dob"
            value={userData.dob}
            onChange={(e) => setUserData({ ...userData, dob: e.target.value })}
          />
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </aside>
  );
}
