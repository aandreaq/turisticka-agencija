import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Ponude from "./Ponude";
import Kontakt from "./Kontakt";
import LandbotPopup from "./LandbotEmbed"; 
import "./App.css";
import logo from "./img/logo.jpg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Pocetna() {
  const navigate = useNavigate();
  return (
    <div>
      {/* Landbot chat samo ovde */}
      <LandbotPopup />

      <div className="hero-container">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Destinacija"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Otkrijte destinaciju iz snova!</h1>
          <button onClick={() => navigate("/ponude")}>Rezerviši putovanje</button>
        </div>
      </div>

      <div className="destinacije-container">
        <h2 className="section-title">Naše popularne destinacije</h2>
        <div className="destinacije-grid">
          <div className="destinacija-card">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Maldivi"
            />
            <h3>Maldivi</h3>
            <button onClick={() => navigate("/ponude")}>Detalji / Rezerviši</button>
          </div>
          <div className="destinacija-card">
            <img
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80"
              alt="Pariz"
            />
            <h3>Pariz</h3>
            <button onClick={() => navigate("/ponude")}>Detalji / Rezerviši</button>
          </div>
          <div className="destinacija-card">
            <img
              src="https://images.unsplash.com/photo-1580502304784-8985b7eb7260?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FudG9yaW5pfGVufDB8fDB8fHww"
              alt="Santorini"
            />
            <h3>Santorini</h3>
            <button onClick={() => navigate("/ponude")}>Detalji / Rezerviši</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <header className="App-header">
        <nav className="menu">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <Link to="/">Početna</Link>
          <Link to="/ponude">Ponude</Link>
          <Link to="/kontakt">Kontakt</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Pocetna />} />
        <Route path="/ponude" element={<Ponude />} />
        <Route path="/kontakt" element={<Kontakt />} />
      </Routes>

      {/* --- FOOTER --- */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <img src={logo} alt="Logo" className="footer-logo-img" />
              <p>Turistička agencija „Green Travel“</p>
            </div>
            <nav className="footer-links">
              <Link to="/">Početna</Link>
              <Link to="/ponude">Ponude</Link>
              <Link to="/kontakt">Kontakt</Link>
            </nav>
          </div>

          <div className="footer-right">
            <h4>Kontakt</h4>
            <p><span role="img" aria-label="lokacija">📍</span> Bulevar Kralja Aleksandra 45, Beograd</p>
            <p><span role="img" aria-label="telefon">📞</span> +381 64 123 4567</p>
            <p><span role="img" aria-label="email">📧</span> info@dreamtravel.rs</p>

            <div className="footer-social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Dream Travel. Sva prava zadržana.</span>
        </div>
      </footer>
    </Router>
  );
}

export default App;