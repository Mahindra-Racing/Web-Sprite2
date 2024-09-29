import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImage: '',
    points: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({
        ...formData,
        profileImage: reader.result,
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('profileData', JSON.stringify(formData));
    window.location.href = '/profile';
  };

  return (
    <div className="register-containerRegister">
      <h1 className="register-titleRegister">Register</h1>
      <form onSubmit={handleSubmit} className="register-formRegister">
        <label className="register-labelRegister">Name</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="register-inputRegister" 
          required 
        />

        <label className="register-labelRegister">Email</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          className="register-inputRegister" 
          required 
        />

        <label className="register-labelRegister">Password</label>
        <input 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="register-inputRegister" 
          required 
        />

        <label className="register-labelRegister">Confirm Password</label>
        <input 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          className="register-inputRegister" 
          required 
        />

        <label className="register-labelRegister">Profile Image</label>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleImageChange} 
          className="register-fileInputRegister" 
        />

        <button type="submit" className="register-buttonRegister">Register</button>
      </form>
    </div>
  );
};

export default Register;
