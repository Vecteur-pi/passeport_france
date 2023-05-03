import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import Footer from './components/Footer';
import './App.css'; // Ajoutez cette ligne pour importer le fichier CSS

function App() {
  return (
    <Router>
      <div className="App app-container">
        <Header />
        <div className="content-container">
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/nos-services" element={<ServicesPage />} />
              <Route path="/contactez-nous" element={<ContactPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

