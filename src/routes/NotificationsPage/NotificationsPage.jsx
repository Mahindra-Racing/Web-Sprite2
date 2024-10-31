import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './NotificationsPage.css';

const NotificationsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { approved } = location.state || {};
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Adiciona a classe após um pequeno delay para ativar a animação
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleBackClick = () => {
    navigate('/StreamRegister');
  };

  return (
    <div className={`notifications-container ${approved ? 'approved' : 'denied'}`}>
      <div className={`notification-card ${showContent ? 'show' : ''}`}>
        <div className="status-icon">
          {approved ? (
            <svg className="icon-success" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          ) : (
            <svg className="icon-error" viewBox="0 0 24 24">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.59-13L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41z"/>
            </svg>
          )}
        </div>

        <h2 className="status-title">
          {approved ? 'Cadastro Aprovado!' : 'Cadastro Negado'}
        </h2>

        <div className="status-message">
          {approved ? (
            <>
              <p className="message-primary">Parabéns! Seu pedido de cadastro foi aprovado.</p>
              <p className="message-secondary">Você já pode começar a fazer streams em nossa plataforma!</p>
              <div className="status-details">
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value success">Ativo</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Permissões:</span>
                  <span className="detail-value">Streamer</span>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="message-primary">Infelizmente seu pedido foi negado.</p>
              <p className="message-secondary">
                Você pode tentar novamente em 30 dias. Certifique-se de fornecer todas as 
                informações necessárias em seu próximo cadastro.
              </p>
              <div className="status-details">
                <div className="detail-item">
                  <span className="detail-label">Motivo:</span>
                  <span className="detail-value error">Informações incompletas</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Nova tentativa em:</span>
                  <span className="detail-value">30 dias</span>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="action-buttons">
          <button 
            className={`primary-button ${approved ? 'success' : 'error'}`}
            onClick={() => approved ? window.location.href = '/StreamMake' : handleBackClick()}
          >
            {approved ? 'Ir para Dashboard' : 'Voltar ao Cadastro'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;