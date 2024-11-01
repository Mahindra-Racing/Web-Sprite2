import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        points: 0,
        level: 1,
        profileImage: '',
        bannerImage: '',
    });
    const [userMissions, setUserMissions] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfileData = async () => {
            const storedProfileData = JSON.parse(localStorage.getItem('profileData')) || {};
            try {
                const response = await fetch('https://bd-web-ruddy.vercel.app/accounts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();

                // Busca o usuário logado com base nos dados armazenados localmente
                const loggedInUser = data.find(account => account.name === storedProfileData.name);

                if (loggedInUser) {
                    setProfileData({
                        name: loggedInUser.name,
                        email: loggedInUser.email,
                        points: loggedInUser.points || 0,
                        level: Math.floor((loggedInUser.points || 0) / 100) + 1,
                        profileImage: loggedInUser.profileImage || '',
                        bannerImage: loggedInUser.bannerImage || '',
                    });
                } else {
                    setErrorMessage('User not found');
                }
            } catch (error) {
                console.error('Error fetching account data:', error);
                setErrorMessage('Error fetching account data. Please try again later.');
            }
        };

        fetchProfileData();

        const initialMissions = [
            { id: 1, title: 'Complete your profile', points: 50, completed: false },
            { id: 2, title: 'Share your profile with 5 friends', points: 100, completed: false },
            { id: 3, title: 'Log in for 5 consecutive days', points: 150, completed: false },
        ];
        setUserMissions(initialMissions);
    }, []);

    const completeMission = (missionId) => {
        const updatedMissions = userMissions.map((mission) =>
            mission.id === missionId ? { ...mission, completed: true } : mission
        );
        const missionPoints = updatedMissions.find((mission) => mission.id === missionId)?.points || 0;

        setUserMissions(updatedMissions);
        setProfileData(prevData => ({
            ...prevData,
            points: prevData.points + missionPoints,
            level: Math.floor((prevData.points + missionPoints) / 100) + 1 // Atualiza o nível com base nos pontos
        }));
    };

    const username = profileData.name ? `@${profileData.name.toLowerCase().replace(/\s/g, '')}` : '';

    return (
        <main className='mainProfileProf'>
            <div className="profile-containerProf">
                <div className="profile-bannerProf">
                    {profileData.bannerImage ? (
                        <img src={profileData.bannerImage} alt="Banner" className="banner-imageProf" />
                    ) : (
                        <div className="banner-placeholderProf">
                            <span className="upload-icon">🖼️</span>
                        </div>
                    )}
                </div>
                <div className="profile-image-containerProf">
                    {profileData.profileImage ? (
                        <img src={profileData.profileImage} alt="Profile" className="profile-imageProf" />
                    ) : (
                        <div className="profile-placeholder-imageProf">
                            <span className="upload-icon">📷</span>
                        </div>
                    )}
                </div>

                <div className="profile-infoProf">
                    <h2 className="profile-nameProf">{profileData.name || 'No Name'}</h2>
                    <p className="profile-usernameProf">{username || 'No Username'}</p>
                    <p className="profile-levelProf">Level: {profileData.level}</p>
                    <p className="profile-pointsProf">Points: {profileData.points}</p>
                    <p className="profile-rankProf">
                        Rank: {profileData.level < 5 ? 'Beginner' : profileData.level < 10 ? 'Intermediate' : 'Expert'}
                    </p>
                    <button className="edit-profile-buttonProf" onClick={() => navigate('/settings')}>
                        Edit Profile
                    </button>
                </div>

                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <div className="missions-containerProf">
                    <h2 className="missions-titleProf">Your Missions</h2>
                    <div className="missions-listProf">
                        {userMissions.map((mission) => (
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
