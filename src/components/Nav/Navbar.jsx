import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCart } from "lucide-react"; // Importando o ícone do Lucide
import "./NavBar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://bd-web-ruddy.vercel.app/accounts'); // Altere para o endpoint correto
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        const storedProfileData = JSON.parse(localStorage.getItem('profileData'));
        const loggedInUser = data.find(account => account.name === storedProfileData.name);
        if (loggedInUser) {
          setUser({ name: loggedInUser.name, profileImage: loggedInUser.profileImage });
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('profileData');
    setUser(null);
    navigate('/Login');
  };

  return (
    <nav className={`navbar ${menuOpen ? "active" : ""}`}>
      <a className="logo" href="#">Synthica</a>
      <ul className={`nav-list1 ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to='/Ajuda' className="linkNavbar" onClick={closeMenu}></Link>
        </li>
      </ul>
      {user ? (
        <ul className={`nav-list2 ${menuOpen ? "show" : ""}`}>
            <Link to="/Carrinho" className="cart-link">
              <ShoppingCart size={24}/>
            </Link>
          <li className="profile-info">
            <img src={user.profileImage} alt="Profile" className="profile-image-nav" />
            <span className="profile-name">{user.name}</span>
            <button className="btn-logout" onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--accent-clr)">
                <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
              </svg>
              Logout
            </button>
          </li>
        </ul>
      ) : (
        <ul className={`nav-list2 ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/Register" className="linkRegister" onClick={closeMenu}>
              <button className="btn-entrar">Register</button>
            </Link>
          </li>
          <li>
            <Link to="/Login" className="linkCadastrar" onClick={closeMenu}>
              <button className="btn-cadastrar">Start now</button>
            </Link>
          </li>
        </ul>
      )}
      <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <div className="bar">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#141414" className={`hamburger-icon ${menuOpen ? "active" : ""}`}>
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
