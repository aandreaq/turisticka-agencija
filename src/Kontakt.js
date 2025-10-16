import React, { useState } from "react";
import "./Kontakt.css";

const Kontakt = () => {
  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [poruka, setPoruka] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Ime: ${ime}\nEmail: ${email}\nPoruka: ${poruka}`);
    setIme("");
    setEmail("");
    setPoruka("");
  };

  return (
    <div className="kontakt-container">
      <form className="kontakt-form" onSubmit={handleSubmit}>
        <h2>Kontaktirajte nas</h2>
        <input
          type="text"
          placeholder="Ime"
          value={ime}
          onChange={(e) => setIme(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Poruka"
          value={poruka}
          onChange={(e) => setPoruka(e.target.value)}
          required
        />
        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
};

export default Kontakt;