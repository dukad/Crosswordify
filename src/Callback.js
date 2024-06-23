// Callback.js
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { hash } = location;
    const parsedHash = queryString.parse(hash);

    if (parsedHash.access_token) {
      localStorage.setItem('spotify_token', parsedHash.access_token);
      navigate('/profile'); // Redirect to the profile page
    }
  }, [location, navigate]);

  return <div>Loading...</div>;
};

export default Callback;