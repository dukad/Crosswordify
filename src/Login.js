// Login.js
import React from 'react';

const Login = () => {
  const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
  const CLIENT_ID = '5dd0ad9d01304bd7a61f85cb86d9dfc1';
  const REDIRECT_URI = 'http://localhost:3000/callback';
  const SCOPES = [
    'user-read-private',
    'user-read-email',
    'user-read-recently-played', // Add this scope
    // Add any other scopes you need
  ];

  const AUTH_URL = `${SPOTIFY_AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true`;

  return (
    <div>
      <a href={AUTH_URL}>Login with Spotify</a>
    </div>
  );
};

export default Login;
