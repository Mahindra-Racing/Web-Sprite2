import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './Dashboard.css'; 
import fundoDash from '../../assets/img/fundo-dash.png'


function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Fórmula E Hub</h1>
      </header>
      <nav className="dashboard-nav">
        <Link to="/PilotoEquipe" className="nav-link">Pilotos e Equipes</Link>
        <Link to="/Classifica" className="nav-link">Classificação</Link>
        <Link to="/Corrida" className="nav-link">Corridas</Link>
      </nav>

      <main className="dashboard-content">
        <div className="welcome-text">Bem-vindo ao Hub da Fórmula E!</div>
        <p className="intro-text">
          Explore as informações sobre pilotos, equipes e corridas da Fórmula E.
        </p>

        <div className="container-sections">
          <div className="section">
            <div className="section-text">
              <h3>Pilotos e Equipes</h3>
              <p>
                Descubra mais sobre as equipes que competem na Fórmula E e seu pilotos.
              </p>
              <p className="section-stats">11 equipes e 22 pilotos</p>
              <Link to="/PilotoEquipe" className="section-link">Saiba mais</Link>
            </div>
          </div>

          <div className="section">
            <div className="section-text">
              <h3>Standings</h3>
              <p>
                Acompanhe as classificações e descobria quem será o grande campeão.
              </p>
              <p className="section-stats">11ª temporada</p>
              <Link to="/Classifica" className="section-link">Saiba mais</Link>
            </div>
          </div>

          <div className="section">
            <div className="section-text">
              <h3>Corridas</h3>
              <p>
                Fique por dentro das próximas corridas e eventos.
              </p>
              <p className="section-stats">Próxima corrida: 7 de Decembro</p>
              <Link to="/Corrida" className="section-link">Saiba mais</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
