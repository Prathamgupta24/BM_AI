// src/pages/Profile.js
import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [name, setName] = useState('Pranav Tank');
  const [email, setEmail] = useState('21bce296@nirmauni.ac.in');
  const [bio, setBio] = useState('I love reading blockchain and AI books.');

  const handleSave = (e) => {
    e.preventDefault();
    // Implement save logic here (e.g., API call to save profile data)
    alert('Profile saved successfully!');
  };

  return (
    <div className="profile-container">
      <h1>Your Profile</h1>
      <form className="profile-form" onSubmit={handleSave}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="save-button">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
