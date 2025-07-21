import React from 'react';
import './UserReport.css';

const UserReport = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h1>Profile Page</h1>
        <button className="edit-button">Edit</button>
      </div>
      
      <form className="profile-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            value="Abu Bakar Eliah" 
            readOnly 
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            value="abubakareliah@gmail.com" 
            readOnly 
          />
        </div>
        
        <button type="submit" className="submit-button">SUBMIT</button>
      </form>
    </div>
  );
};

export default UserReport;