import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const [profileData, setProfileData] = useState(JSON.parse(localStorage.getItem('profileData')) || {});
  const [level, setLevel] = useState(1);
  const [points, setPoints] = useState(profileData.points || 0);
  const [missions, setMissions] = useState([
    { id: 1, title: 'Complete your profile', points: 50, completed: false },
    { id: 2, title: 'Share your profile with 5 friends', points: 100, completed: false },
    { id: 3, title: 'Log in for 5 consecutive days', points: 150, completed: false },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    const calculatedLevel = Math.floor(points / 100) + 1;
    setLevel(calculatedLevel);
  }, [points]);

  useEffect(() => {
    const handleStorageChange = () => {
      setProfileData(JSON.parse(localStorage.getItem('profileData')) || {});
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const username = profileData.name ? `@${profileData.name.toLowerCase().replace(/\s/g, '')}` : '';

  const completeMission = (missionId) => {
    const updatedMissions = missions.map((mission) =>
      mission.id === missionId ? { ...mission, completed: true } : mission
    );
    const missionPoints = updatedMissions.find((mission) => mission.id === missionId)?.points || 0;

    setMissions(updatedMissions);
    setPoints(points + missionPoints);
    const updatedProfileData = { ...profileData, points: points + missionPoints };
    setProfileData(updatedProfileData);
    localStorage.setItem('profileData', JSON.stringify(updatedProfileData));
  };

  return (
    <main className='mainProfileProf'>
      <div className="profile-containerProf">
        <div className="profile-bannerProf">
          {profileData.bannerImage ? (
            <img src={profileData.bannerImage} alt="Banner" className="banner-imageProf" />
          ) : (
            <div className="banner-placeholderProf">No Banner Image</div>
          )}
          <div className="profile-image-containerProf">
            {profileData.profileImage ? (
              <img src={profileData.profileImage} alt="Profile" className="profile-imageProf" />
            ) : (
              <div className="profile-placeholder-imageProf">No Image</div>
            )}
          </div>
        </div>

        <div className="profile-infoProf">
          <h2 className="profile-nameProf">{profileData.name}</h2>
          <p className="profile-usernameProf">{username}</p>
          <p className="profile-levelProf">Level: {level}</p>
          <p className="profile-pointsProf">Points: {points}</p>
          <p className="profile-rankProf">
            Rank: {level < 5 ? 'Beginner' : level < 10 ? 'Intermediate' : 'Expert'}
          </p>
          <button className="edit-profile-buttonProf" onClick={() => navigate('/settings')}>
            Edit Profile
          </button>
        </div>

        <div className="missions-containerProf">
          <h2 className="missions-titleProf">Your Missions</h2>
          <div className="missions-listProf">
            {missions.map((mission) => (
              <div key={mission.id} className="mission-itemProf">
                <div className="mission-infoProf">
                  <h3>{mission.title}</h3>
                  <p>{mission.points} points</p>
                </div>
                {mission.completed ? (
                  <span className="mission-completedProf">Completed</span>
                ) : (
                  <button
                    className="complete-mission-buttonProf"
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