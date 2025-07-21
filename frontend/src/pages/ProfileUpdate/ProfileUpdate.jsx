import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header.jsx';
import InputField from './InputField.jsx';
import Button from './Button.jsx';
import "./ProfileUpdate.css";

const UserIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
};

const ProfileUpdate = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(''); 

  useEffect(() => {
    setTimeout(() => { // Simulate API call
      setUserName('Angelo');
      setUserEmail('Angelo.S.0@example.com');
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleSaveProfile = () => {
    setIsLoading(true);
    setMessage('');
    // In a real application, you would send updated data to an API
    console.log('Saving profile:', { userName, userEmail });
    setTimeout(() => { // Simulate API call
      setMessage('Profile updated successfully!');
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="profile-update-container">
      <h2>Update Your Profile</h2>
      <div className="profile-icon-wrapper">
        <UserIcon />
      </div>

      {isLoading && <p>Loading...</p>}
      {message && <p className="status-message">{message}</p>}

      <InputField
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
        label="Name"
      />
      <InputField
        type="email"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
        placeholder="Enter your email"
        label="Email"
      />

      <Button onClick={handleSaveProfile} disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save Profile'}
      </Button>
    </div>
  );
};

export default ProfileUpdate;