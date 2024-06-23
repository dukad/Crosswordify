// RecentTracks.js
import React from 'react';

const RecentTracks = ({ tracks }) => {
  if (!tracks.length) return <div>Loading recent tracks...</div>;

  return (
    <div>
      <h2>Recently Played Tracks</h2>
      <ul>
        {tracks.map((track, index) => (
          <li key={index}>
            <img src={track.track.album.images[0]?.url} alt="Album Art" style={{ width: '50px', height: '50px' }} />
            <div>
              <p><strong>{track.track.name}</strong> by {track.track.artists.map(artist => artist.name).join(', ')}</p>
              <p>Album: {track.track.album.name}</p>
              <p>Played at: {new Date(track.played_at).toLocaleString()}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTracks;
