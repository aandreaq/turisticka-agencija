import React, { useState } from "react";
import Grcka from "./img/grcka.jpg";
import Slovenija from "./img/slovenija.jpg";
import Evropa from "./img/evropska.jpg";
import Egipat from "./img/egipat.jpg";
import Maldivi from "./img/maldivi.jpg";
import Pariz from "./img/pariz.jpg";
import Rim from "./img/rim.jpg";
import Barselona from "./img/barsa.jpg";
import Norveska from "./img/norveska.jpg";
import Tajland from "./img/tajland.jpg";
import Japan from "./img/tokio.jpg";
import Australia from "./img/sidnej.jpg";
import "./Ponude.css";

// OVDE STAVI SLIKE HOTELA ZA SVAKU DESTINACIJU
import GrckaHotel from "./img/grckahotel.jpg"; 
import SlovenijaHotel from "./img/slovenijahotel.jpg"; 
import EvropaHotel from "./img/italijahotel.jpg"; 
import EgipatHotel from "./img/egipathotel.jpg"; 
import MaldiviHotel from "./img/maldivihotel.jpg"; 
import ParizHotel from "./img/parizhotel.jpg"; 
import RimHotel from "./img/italijahotel.jpg"; 
import BarselonaHotel from "./img/barselonahotel.avif"; 
import NorveskaHotel from "./img/norveskakrstarenje.jpg";
import TajlandHotel from "./img/tajlandhotel.jpg"; 
import JapanHotel from "./img/tokiohotel.jpg"; 
import AustraliaHotel from "./img/sidnejhotel.jpg"; 

const ponude = [
  {
    id: 1,
    naziv: "Letovanje u Grčkoj",
    opis: "Uživajte u 7 dana odmora na plažama Halkidikija uz polupansion.",
    slika: Grcka,
    hotelSlika: GrckaHotel,
    datumi: [
      { polazak: "22.06.", povratak: "02.07.", cena: { dvokrevetna: 350, trokrevetna: 340, cetvorokrevetna: 320 } },
      { polazak: "02.07.", povratak: "12.07.", cena: { dvokrevetna: 400, trokrevetna: 370, cetvorokrevetna: 360 } },
      { polazak: "13.07.", povratak: "24.07.", cena: { dvokrevetna: 450, trokrevetna: 430, cetvorokrevetna: 400 } },
    ],
  },
  {
    id: 2,
    naziv: "Zimski odmor u Sloveniji",
    opis: "Skijaški paket za celu porodicu u slovenačkim Alpima.",
    slika: Slovenija,
    hotelSlika: SlovenijaHotel,
    datumi: [
      { polazak: "15.12.", povratak: "22.12.", cena: { dvokrevetna: 400, trokrevetna: 380, cetvorokrevetna: 360 } },
      { polazak: "23.12.", povratak: "30.12.", cena: { dvokrevetna: 420, trokrevetna: 400, cetvorokrevetna: 380 } },
    ],
  },
  {
    id: 3,
    naziv: "Evropska tura",
    opis: "Posetite Pariz, Rim, Barselonu",
    slika: Evropa,
    hotelSlika: EvropaHotel,
    datumi: [
      { polazak: "05.05.", povratak: "12.05.", cena: { dvokrevetna: 500, trokrevetna: 480, cetvorokrevetna: 460 } },
      { polazak: "20.05.", povratak: "27.05.", cena: { dvokrevetna: 520, trokrevetna: 500, cetvorokrevetna: 480 } },
      { polazak: "10.06.", povratak: "17.06.", cena: { dvokrevetna: 540, trokrevetna: 520, cetvorokrevetna: 500 } },
    ],
  },
  {
    id: 4,
    naziv: "Egipat - Piramide",
    opis: "Otkrijte čari drevnog Egipta i spektakularne piramide uz Nil.",
    slika: Egipat,
    hotelSlika: EgipatHotel,
    datumi: [
      { polazak: "10.09.", povratak: "17.09.", cena: { dvokrevetna: 600, trokrevetna: 580, cetvorokrevetna: 550 } },
      { polazak: "01.10.", povratak: "08.10.", cena: { dvokrevetna: 620, trokrevetna: 600, cetvorokrevetna: 570 } },
    ],
  },
  {
    id: 5,
    naziv: "Maldivi - Rajski odmor",
    opis: "Egzotični odmor na prelepim plažama Maldiva.",
    slika: Maldivi,
    hotelSlika: MaldiviHotel,
    datumi: [
      { polazak: "05.11.", povratak: "12.11.", cena: { dvokrevetna: 1200, trokrevetna: 1100, cetvorokrevetna: 1000 } },
      { polazak: "15.11.", povratak: "22.11.", cena: { dvokrevetna: 1250, trokrevetna: 1150, cetvorokrevetna: 1050 } },
    ],
  },
  {
    id: 6,
    naziv: "Pariz - Romantični vikend",
    opis: "Doživite čari Pariza, Ajfelov toranj i šetnje Senom.",
    slika: Pariz,
    hotelSlika: ParizHotel,
    datumi: [
      { polazak: "10.06.", povratak: "13.06.", cena: { dvokrevetna: 700, trokrevetna: 650, cetvorokrevetna: 600 } },
      { polazak: "20.06.", povratak: "23.06.", cena: { dvokrevetna: 750, trokrevetna: 700, cetvorokrevetna: 650 } },
    ],
  },
  {
    id: 7,
    naziv: "Italija - Rim i kultura",
    opis: "Upoznajte istoriju Rima, Koloseum i italijanske specijalitete.",
    slika: Rim,
    hotelSlika: RimHotel,
    datumi: [
      { polazak: "05.07.", povratak: "12.07.", cena: { dvokrevetna: 650, trokrevetna: 620, cetvorokrevetna: 580 } },
      { polazak: "15.07.", povratak: "22.07.", cena: { dvokrevetna: 670, trokrevetna: 640, cetvorokrevetna: 600 } },
    ],
  },
  {
    id: 8,
    naziv: "Španija - Barselona",
    opis: "Otkrijte umetnost i arhitekturu Antonia Gaudija i šarm Barselone.",
    slika: Barselona,
    hotelSlika: BarselonaHotel,
    datumi: [
      { polazak: "01.08.", povratak: "08.08.", cena: { dvokrevetna: 680, trokrevetna: 650, cetvorokrevetna: 600 } },
      { polazak: "10.08.", povratak: "17.08.", cena: { dvokrevetna: 700, trokrevetna: 670, cetvorokrevetna: 620 } },
    ],
  },
  {
    id: 9,
    naziv: "Norveška - Fjordovi (Krstarenje)",
    opis: "Fantastična priroda, fjordovi i avantura na otvorenom.",
    slika: Norveska,
    hotelSlika: NorveskaHotel,
    datumi: [
      { polazak: "20.06.", povratak: "27.06.", cena: { dvokrevetna: 900, trokrevetna: 850, cetvorokrevetna: 800 } },
      { polazak: "05.07.", povratak: "12.07.", cena: { dvokrevetna: 920, trokrevetna: 870, cetvorokrevetna: 820 } },
    ],
  },
  {
    id: 10,
    naziv: "Tajland - Egzotika",
    opis: "Doživite egzotične plaže, tajlandsku kulturu i ukusnu hranu.",
    slika: Tajland,
    hotelSlika: TajlandHotel,
    datumi: [
      { polazak: "15.07.", povratak: "22.07.", cena: { dvokrevetna: 800, trokrevetna: 750, cetvorokrevetna: 700 } },
      { polazak: "25.07.", povratak: "01.08.", cena: { dvokrevetna: 850, trokrevetna: 800, cetvorokrevetna: 750 } },
    ],
  },
  {
    id: 11,
    naziv: "Japan - Tokio",
    opis: "Moderna metropola, japanska tradicija i nezaboravno iskustvo.",
    slika: Japan,
    hotelSlika: JapanHotel,
    datumi: [
      { polazak: "10.09.", povratak: "17.09.", cena: { dvokrevetna: 950, trokrevetna: 900, cetvorokrevetna: 850 } },
      { polazak: "20.09.", povratak: "27.09.", cena: { dvokrevetna: 980, trokrevetna: 930, cetvorokrevetna: 880 } },
    ],
  },
  {
    id: 12,
    naziv: "Australija - Sidnej",
    opis: "Otkrijte Opera House, plaže i neverovatnu prirodu.",
    slika: Australia,
    hotelSlika: AustraliaHotel,
    datumi: [
      { polazak: "01.10.", povratak: "08.10.", cena: { dvokrevetna: 1000, trokrevetna: 950, cetvorokrevetna: 900 } },
      { polazak: "15.10.", povratak: "22.10.", cena: { dvokrevetna: 1050, trokrevetna: 1000, cetvorokrevetna: 950 } },
    ],
  },
];

const Ponude = () => {
  const [selektovanaPonuda, setSelektovanaPonuda] = useState(null);
  const [tipSobe, setTipSobe] = useState("dvokrevetna");
  const [putnici, setPutnici] = useState([{ ime: "", prezime: "", telefon: "", email: "", datum: "" }]);
  const [selectedDatum, setSelectedDatum] = useState(null);

  const handleTipSobe = (e) => {
    const value = e.target.value;
    setTipSobe(value);
    const broj = value === "dvokrevetna" ? 2 : value === "trokrevetna" ? 3 : 4;
    setPutnici(Array(broj).fill(0).map(() => ({ ime: "", prezime: "", telefon: "", email: "", datum: "" })));
  };

  const handlePutnikChange = (index, field, value) => {
    const noviPutnici = [...putnici];
    noviPutnici[index][field] = value;
    setPutnici(noviPutnici);
  };

  const handleDatumClick = (datum) => {
    setSelectedDatum(datum);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ponuda: selektovanaPonuda.naziv,
      tipSobe,
      datum: selectedDatum,
      putnici,
    });
    alert("Podaci su sačuvani u konzoli (kasnije u bazu)");
    setSelektovanaPonuda(null);
  };

  return (
    <div>
      {/* GRID SA KARTICAMA */}
      <div className="ponude-grid">
        {ponude.map((p) => (
          <div key={p.id} className="ponuda-card">
            <img src={p.slika} alt={p.naziv} className="ponuda-slika" />
            <h3>{p.naziv}</h3>
            <p>{p.opis}</p>
            <button className="detalji-dugme" onClick={() => setSelektovanaPonuda(p)}>Detalji</button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selektovanaPonuda && (
        <div className="modal-overlay" onClick={() => setSelektovanaPonuda(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelektovanaPonuda(null)}>✖</button>
            <img src={selektovanaPonuda.hotelSlika} alt={selektovanaPonuda.naziv} className="modal-slika" />
            <h2>{selektovanaPonuda.naziv}</h2>

            {/* TABELA SA DATUMIMA I CENAMA */}
            <table className="cena-tabela">
              <thead>
                <tr>
                  <th>Tip sobe</th>
                  {selektovanaPonuda.datumi.map((d, idx) => (
                    <th key={idx}>{d.polazak} - {d.povratak}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["dvokrevetna", "trokrevetna", "cetvorokrevetna"].map((tip) => (
                  <tr key={tip}>
                    <td>{tip.charAt(0).toUpperCase() + tip.slice(1)}</td>
                    {selektovanaPonuda.datumi.map((d, idx) => (
                      <td
                        key={idx}
                        className={tip === tipSobe && selectedDatum === `${d.polazak} - ${d.povratak}` ? "odabrano" : ""}
                        onClick={() => handleDatumClick(`${d.polazak} - ${d.povratak}`)}
                      >
                        {d.cena[tip]} €
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="napomena">Cena po osobi + prevoz</p>

            {/* FORMA ZA PUTNIKE */}
            <form onSubmit={handleSubmit}>
              {putnici.map((putnik, index) => (
                <div key={index} className="putnik-forma">
                  <h4>Putnik {index + 1}</h4>
                  <input
                    type="text"
                    placeholder="Ime"
                    value={putnik.ime}
                    onChange={(e) => handlePutnikChange(index, "ime", e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Prezime"
                    value={putnik.prezime}
                    onChange={(e) => handlePutnikChange(index, "prezime", e.target.value)}
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={putnik.telefon}
                    onChange={(e) => handlePutnikChange(index, "telefon", e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    value={putnik.email}
                    onChange={(e) => handlePutnikChange(index, "email", e.target.value)}
                    required
                  />
                  <input
                    type="date"
                    placeholder="Datum rođenja"
                    value={putnik.datum}
                    onChange={(e) => handlePutnikChange(index, "datum", e.target.value)}
                    required
                  />
                </div>
              ))}
              <label>
                Tip sobe:
                <select value={tipSobe} onChange={handleTipSobe}>
                  <option value="dvokrevetna">Dvokrevetna</option>
                  <option value="trokrevetna">Trokrevetna</option>
                  <option value="cetvorokrevetna">Četvorokrevetna</option>
                </select>
              </label>
              <button type="submit" className="rezervisi-dugme">Rezerviši</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ponude;