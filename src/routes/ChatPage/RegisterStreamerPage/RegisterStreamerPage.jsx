import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterStreamerPage.css';

const RegisterStreamerPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', reason: '' });
  const [touchedFields, setTouchedFields] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleBlur = (field) => {
    setTouchedFields((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const approved = Math.random() > 0.5;
    setIsSubmitting(false);
    navigate('/notifications', { state: { approved } });
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const getFieldError = (field) => {
    if (!touchedFields[field]) return null;
    
    switch (field) {
      case 'name':
        return formData.name.length < 3 ? 'Nome deve ter pelo menos 3 caracteres' : null;
      case 'email':
        return !isValidEmail(formData.email) ? 'Email inválido' : null;
      case 'reason':
        return formData.reason.length < 20 ? 'Por favor, forneça uma explicação mais detalhada' : null;
      default:
        return null;
    }
  };

  return (
    <div className="register-pageREGSTREAM">
      <div className="register-containerREGSTREAM">
        <div className="register-headerREGSTREAM">
          <h2>Solicitação para Fazer Stream</h2>
          <p>Preencha o formulário abaixo para se tornar um streamer</p>
        </div>

        <div className="form-cardREGSTREAM">
          <form onSubmit={handleSubmit}>
            <div className="form-groupREGSTREAM">
              <label className="form-labelREGSTREAM">
                <i className="icon-userREGSTREAM"></i>
                Nome
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={() => handleBlur('name')}
                className={`form-inputREGSTREAM ${getFieldError('name') ? 'input-error' : ''}`}
                placeholder="Seu nome completo"
                required
              />
              {getFieldError('name') && (
                <div className="error-messageREGSTREAM">
                  <i className="icon-alertREGSTREAM"></i>
                  {getFieldError('name')}
                </div>
              )}
            </div>

            <div className="form-groupREGSTREAM">
              <label className="form-labelREGSTREAM">
                <i className="icon-mailREGSTREAM"></i>
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleBlur('email')}
                className={`form-inputREGSTREAM ${getFieldError('email') ? 'input-error' : ''}`}
                placeholder="seu@email.com"
                required
              />
              {getFieldError('email') && (
                <div className="error-messageREGSTREAM">
                  <i className="icon-alertREGSTREAM"></i>
                  {getFieldError('email')}
                </div>
              )}
            </div>

            <div className="form-groupREGSTREAM">
              <label className="form-labelREGSTREAM">
                <i className="icon-messageREGSTREAM"></i>
                Motivo
              </label>
              <textarea
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                onBlur={() => handleBlur('reason')}
                className={`form-inputREGSTREAM ${getFieldError('reason') ? 'input-error' : ''}`}
                placeholder="Por que você quer se tornar um streamer?"
                required
              />
              {getFieldError('reason') && (
                <div className="error-messageREGSTREAM">
                  <i className="icon-alertREGSTREAM"></i>
                  {getFieldError('reason')}
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`submit-buttonREGSTREAM ${isSubmitting ? 'button-submitting' : ''}`}
            >
              {isSubmitting ? (
                <span className="button-textREGSTREAM">Processando...</span>
              ) : (
                <>
                  <span className="button-textREGSTREAM">Enviar Solicitação</span>
                  <i className="icon-arrow-rightREGSTREAM"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterStreamerPage;