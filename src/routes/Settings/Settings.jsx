import React, { useState, useEffect, useRef } from 'react';
import './Settings.css';

const teams = ['Mahindra Racing', 'Nissan e.dams', 'Jaguar TCS Racing', 'DS Techeetah'];
const drivers = ['Jean-Éric Vergne', 'Sébastien Buemi', 'Mitch Evans', 'Stoffel Vandoorne'];

const Settings = () => {
    const [accountData, setAccountData] = useState({
        name: '',
        email: '',
        password: '',
        profileImage: '',
        bannerImage: '',
    });
    const [notificationsEnabled, setNotificationsEnabled] = useState(false);
    const [themePreferences, setThemePreferences] = useState({
        favoriteTeam: '',
        favoriteDriver: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const profileImageInputRef = useRef(null);
    const bannerImageInputRef = useRef(null);

    useEffect(() => {
        const fetchAccountData = async () => {
            const storedProfileData = JSON.parse(localStorage.getItem('profileData')) || {};

            try {
                const response = await fetch('https://bd-web-ruddy.vercel.app/accounts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                
                const loggedInUser = data.find(account => account.name === storedProfileData.name);

                if (loggedInUser) {
                    setAccountData({
                        name: loggedInUser.name,
                        email: loggedInUser.email,
                        password: loggedInUser.password,
                        profileImage: loggedInUser.profileImage,
                        bannerImage: loggedInUser.bannerImage,
                    });
                    setNotificationsEnabled(loggedInUser.notifications || false);
                    setThemePreferences({
                        favoriteTeam: loggedInUser.favoriteTeam || '',
                        favoriteDriver: loggedInUser.favoriteDriver || '',
                    });
                } else {
                    setErrorMessage('');
                }
            } catch (error) {
                console.error('Error fetching account data:', error);
                setErrorMessage('Error fetching account data. Please try again later.');
            }
        };

        fetchAccountData();
    }, []);

    useEffect(() => {
        localStorage.setItem('profileData', JSON.stringify({
            ...accountData,
            notifications: notificationsEnabled,
            ...themePreferences,
        }));
    }, [accountData, notificationsEnabled, themePreferences]);

    const handleAccountChange = (e) => {
        const { name, value } = e.target;
        setAccountData({ ...accountData, [name]: value });
    };

    const handleThemeChange = (e) => {
        const { name, value } = e.target;
        setThemePreferences({ ...themePreferences, [name]: value });
    };

    const handleSaveSettings = () => {
        localStorage.setItem('profileData', JSON.stringify({ ...accountData, notifications: notificationsEnabled, ...themePreferences }));
        alert('Settings saved successfully!');
    };

    const handleImageUpload = (e, type) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setAccountData({ ...accountData, [type]: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const triggerImageUpload = (type) => {
        if (type === 'profileImage') {
            profileImageInputRef.current.click();
        } else if (type === 'bannerImage') {
            bannerImageInputRef.current.click();
        }
    };

    return (
        <main className="settings-main">
            <div className="settings-container">
                <div className="profile-banner" onClick={() => triggerImageUpload('bannerImage')}>
                    {accountData.bannerImage ? (
                        <img src={accountData.bannerImage} alt="Banner" className="banner-image unique-banner" />
                    ) : (
                        <div className="banner-placeholder">
                            <span className="upload-icon">🖼️</span>
                        </div>
                    )}
                </div>
                <div className="profile-image-container" onClick={() => triggerImageUpload('profileImage')}>
                    {accountData.profileImage ? (
                        <img src={accountData.profileImage} alt="Profile" className="profile-image unique-profile" />
                    ) : (
                        <div className="profile-placeholder-image">
                            <span className="upload-icon">📷</span>
                        </div>
                    )}
                </div>

                <input
                    ref={profileImageInputRef}
                    type="file"
                    onChange={(e) => handleImageUpload(e, 'profileImage')}
                    className="image-upload-input"
                    accept="image/*"
                />
                <input
                    ref={bannerImageInputRef}
                    type="file"
                    onChange={(e) => handleImageUpload(e, 'bannerImage')}
                    className="image-upload-input"
                    accept="image/*"
                />

                <h1>Profile Settings</h1>
                {errorMessage && <p className="error-message">{errorMessage}</p>}

                <section className="account-settings">
                    <h2>Account Settings</h2>
                    <div className="input-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={accountData.name} onChange={handleAccountChange} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={accountData.email} onChange={handleAccountChange} />
                    </div>
                    <div className="input-group password-field">
                        <label htmlFor="password">Password:</label>
                        <input 
                            type={showPassword ? 'text' : 'password'} 
                            id="password" 
                            name="password" 
                            value={accountData.password} 
                            onChange={handleAccountChange} 
                        />
                        <button 
                            type="button" 
                            className="toggle-password" 
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                </section>

                <section className="notification-settings">
                    <h2>Notification Settings</h2>
                    <div className="checkbox-group1">
                        <input type="checkbox" id="notifications" checked={notificationsEnabled} onChange={() => setNotificationsEnabled(!notificationsEnabled)} />
                        <label htmlFor="notifications">Enable Notifications</label>
                    </div>
                </section>

                <section className="theme-settings">
                    <h2>Theme Settings</h2>
                    <div className="input-group">
                        <label htmlFor="favoriteTeam">Favorite Team:</label>
                        <select id="favoriteTeam" name="favoriteTeam" value={themePreferences.favoriteTeam} onChange={handleThemeChange}>
                            <option value="">Select a Team</option>
                            {teams.map((team, index) => (
                                <option key={index} value={team}>{team}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-group">
                        <label htmlFor="favoriteDriver">Favorite Driver:</label>
                        <select id="favoriteDriver" name="favoriteDriver" value={themePreferences.favoriteDriver} onChange={handleThemeChange}>
                            <option value="">Select a Driver</option>
                            {drivers.map((driver, index) => (
                                <option key={index} value={driver}>{driver}</option>
                            ))}
                        </select>
                    </div>
                </section>

                <button className="save-settings-button" onClick={handleSaveSettings}>
                    Save Settings
                </button>
            </div>
        </main>
    );
};

export default Settings;
