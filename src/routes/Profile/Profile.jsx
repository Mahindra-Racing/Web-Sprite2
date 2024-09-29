import React, { useState, useEffect } from 'react';
import './Profile.css';

const Profile = () => {
  const profileData = JSON.parse(localStorage.getItem('profileData')) || {};
  const [level, setLevel] = useState(1);
  const [points, setPoints] = useState(profileData.points || 0);
  const [missions, setMissions] = useState([
    { id: 1, title: 'Complete your profile', points: 50, completed: false },
    { id: 2, title: 'Share your profile with 5 friends', points: 100, completed: false },
    { id: 3, title: 'Log in for 5 consecutive days', points: 150, completed: false },
  ]);

  useEffect(() => {
    const calculatedLevel = Math.floor(points / 100) + 1;
    setLevel(calculatedLevel);
  }, [points]);

  const username = profileData.name ? `@${profileData.name.toLowerCase().replace(/\s/g, '')}` : '';

  const completeMission = (missionId) => {
    const updatedMissions = missions.map((mission) =>
      mission.id === missionId ? { ...mission, completed: true } : mission
    );
    const missionPoints = updatedMissions.find((mission) => mission.id === missionId)?.points || 0;

    setMissions(updatedMissions);
    setPoints(points + missionPoints);
    profileData.points = points + missionPoints;
    localStorage.setItem('profileData', JSON.stringify(profileData));
  };

  return (
    <main className='mainProfile'>
      <div className="profile-container">
        <div className="profile-banner">
          <div className="profile-image-container">
            {profileData.profileImage ? (
              <img src={profileData.profileImage} alt="Profile" className="profile-image" />
            ) : (
              <div className="profile-placeholder-image">No Image</div>
            )}
          </div>
        </div>

        <div className="profile-info">
          <h2 className="profile-name">{profileData.name}</h2>
          <p className="profile-username">{username}</p>
          <p className="profile-level">Level: {level}</p>
          <p className="profile-points">Points: {points}</p>
          <p className="profile-rank">
            Rank: {level < 5 ? 'Beginner' : level < 10 ? 'Intermediate' : 'Expert'}
          </p>
          <button className="edit-profile-button" onClick={() => { /* Navigate to Edit Profile */ }}>
            Edit Profile
          </button>
        </div>

        <div className="missions-container">
          <h2 className="missions-title">Your Missions</h2>
          <div className="missions-list">
            {missions.map((mission) => (
              <div key={mission.id} className="mission-item">
                <div className="mission-info">
                  <h3>{mission.title}</h3>
                  <p>{mission.points} points</p>
                </div>
                {mission.completed ? (
                  <span className="mission-completed">Completed</span>
                ) : (
                  <button
                    className="complete-mission-button"
                    onClick={() => completeMission(mission.id)}
                  >
                    Complete
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;