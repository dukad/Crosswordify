// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import Callback from './Callback';
import UserProfile from './UserProfile';
import RecentTracks from './RecentTracks';

const App = () => {
  const [token, setToken] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [recentTracks, setRecentTracks] = useState([]);

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("spotify_token");

    if (!token && hash) {
      // if there is no token, parse the hash to find it
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("spotify_token", token);
    }

    setToken(token);

    if (token) {
      axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        setUserProfile(response.data);
      }).catch(error => {
        console.error("Error fetching user profile", error);
      });

      axios.get("https://api.spotify.com/v1/me/player/recently-played?limit=50", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        setRecentTracks(response.data.items);
      }).catch(error => {
        console.error("Error fetching recent tracks", error);
      });
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/callback" element={<Callback />} />
        <Route path="/profile" element={<UserProfile profile={userProfile} />} />
        <Route path="/" element={<Login />} />
      </Routes>
      {token && userProfile && (
        <div>
          <h1>Welcome, {userProfile.display_name}</h1>
          <img src={userProfile.images[0]?.url} alt="Profile" />
          <p>{userProfile.email}</p>
          <RecentTracks tracks={recentTracks} />
        </div>
      )}
    </Router>
  );
};

export default App;
