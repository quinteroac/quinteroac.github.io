import React from 'react';
import './LandingPage.css'; // Asegúrate de crear este archivo para los estilos

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Bienvenido a Mi Sitio</h1>
        <p>Esta es una breve descripción de lo que ofrecemos.</p>
        <button className="cta-button">¡Contáctanos!</button>
      </header>
    </div>
  );
};

export default LandingPage;
