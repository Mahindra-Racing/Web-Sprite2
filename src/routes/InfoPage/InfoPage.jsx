// InfoPage.js
import React from 'react';
import { Mail, Phone, Shield, FileText, Info } from 'lucide-react'; // Importando ícones necessários
import './InfoPage.css';

const InfoPage = () => {
  return (
    <div className="info-page">
      <section className="info-section" id="about">
        <div className="info-header">
          <Info size={28} className="icon" />
          <h2>About Us</h2>
        </div>
        <p>
          We are a dedicated team passionate about motorsports and committed to delivering the best Formula E experience. Our goal is to inspire and bring the excitement of electric racing to fans worldwide, promoting a future where technology and sustainability meet.
        </p>
      </section>

      <section className="info-section" id="contact">
        <div className="info-header">
          <Mail size={28} className="icon" />
          <h2>Contact</h2>
        </div>
        <p>
          We'd love to hear from you! For any questions or support, please contact us:
          <br />
          <strong>Email:</strong> support@formulae.com
          <br />
          <strong>Phone:</strong> +55 (11) 99999-9999
        </p>
        <div className="contact-icons">
          <Mail className="contact-icon" />
          <Phone className="contact-icon" />
        </div>
      </section>

      <section className="info-section" id="privacy">
        <div className="info-header">
          <Shield size={28} className="icon" />
          <h2>Privacy Policy</h2>
        </div>
        <p>
          Your privacy is important to us. We are committed to protecting your personal information and ensuring transparency in how we handle your data. Please review our Privacy Policy to learn more about the measures we take.
        </p>
      </section>

      <section className="info-section" id="terms">
        <div className="info-header">
          <FileText size={28} className="icon" />
          <h2>Terms of Service</h2>
        </div>
        <p>
          By accessing our services, you agree to our Terms of Service. Please review these terms to understand your rights and responsibilities when using our platform.
        </p>
      </section>
    </div>
  );
};

export default InfoPage;
