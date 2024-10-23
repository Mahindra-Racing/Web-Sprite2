import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRightCircle, Eye, EyeOff } from 'lucide-react'; 
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/accounts');
      const data = await response.json();
      const user = data.find(
        (account) => account.name === username && account.password === password
      );
      if (user) {
        localStorage.setItem('profileData', JSON.stringify(user));
        navigate('/profile');
        window.location.reload(); // Recarrega a página após o login
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching accounts:', error);
      setErrorMessage('Error connecting to the server');
    }
  };

  return (
    <div className="login-pageLOG">
      <div className="containerLOG">
        <div className="login-containerLOG">
          <h2 className="login-titleLOG">Welcome Back!</h2>
          <p className="login-subtitleLOG">Please log in to your account.</p>
          <form onSubmit={handleSubmit} className="login-formLOG">
            <div className="form-groupLOG">
              <label htmlFor="username" className="labelLOG">
                <User className="iconLOG" /> Username
              </label>
              <input
                type="text"
                id="username"
                className="inputLOG"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-groupLOG">
              <label htmlFor="password" className="labelLOG">
                <Lock className="iconLOG" /> Password
              </label>
              <div style={{ position: 'relative' }}> {/* Para posicionar o botão de mostrar/ocultar */}
                <input
                  type={showPassword ? 'text' : 'password'} // Condicional para mostrar ou ocultar a senha
                  id="password"
                  className="inputLOG"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)} // Alterna a visibilidade da senha
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  {showPassword ? <EyeOff className="iconLOG" /> : <Eye className="iconLOG" />} {/* Ícone para mostrar/ocultar */}
                </button>
              </div>
            </div>
            {errorMessage && <p className="error-messageLOG">{errorMessage}</p>}
            <button type="submit" className="login-buttonLOG">
              Log In <ArrowRightCircle className="iconLOG" />
            </button>
          </form>
          <div className="footer-linksLOG">
            <a href="/register" className="register-linkLOG">Don't have an account? Sign up</a>
            <a href="/forgot-password" className="forgot-password-linkLOG">Forgot your password?</a>
          </div>
        </div>
        <div className="image-containerLOG">
          <img src="https://storage.googleapis.com/the-race-com.appspot.com/1/2022/01/Spacesuit-Media-Shiv-Gohil-274794.jpg" alt="Login background" className="login-imageLOG" />
        </div>
      </div>
    </div>
  );
};

export default Login;
