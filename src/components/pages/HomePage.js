import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <main className="body-container">
          <div className="main-content">
            <div className="service-presentation">
              <h2>Présentation du service</h2>
              <p>Voici une description de nos services...</p>
            </div>
            <div className="contact-form">
              <h2>Formulaire de contact</h2>
              <p>Insérez ici votre formulaire de contact.</p>
            </div>
          </div>
          <div className="ads">
            <h2>Annonces</h2>
            <p>Voici l'espace réservé aux annonces.</p>
          </div>
        </main>
      );
}

export default HomePage;
