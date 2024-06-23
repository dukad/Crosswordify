// UserProfile.js
import React from 'react';

const UserProfile = ({ profile }) => {
  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h1>{profile.display_name}</h1>
      <img src={profile.images[0]?.url} alt="Profile" />
      <p>{profile.email}</p>
    </div>
  );
};

export default UserProfile;