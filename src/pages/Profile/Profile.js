import React from "react";
import Filters from "../../components/Filters/Filters";
import "./Profile.css";

export default function Profile() {
  return (
    <aside className="home">
      <Filters />
      <div className="profile-container">
        <div className="user-profile">
          <h1>Profile</h1>
          <label htmlFor="name">Full Name: </label>
          <input type="text" name="" id="name" value="Adarsh Balika" readOnly />
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            value="adarshbalika@gmail.com"
            readOnly
          />
          <label htmlFor="phone">Mobile: </label>
          <input type="text" id="phone" value="+91 9876543210" readOnly />
          <label htmlFor="address">Address: </label>
          <input type="text" id="address" value="0, Unknown address" readOnly />
          <label htmlFor="dob">DOB: </label>
          <input type="text" id="dob" value="10/10/9999" readOnly />
          <button>Save</button>
        </div>
      </div>
    </aside>
  );
}
