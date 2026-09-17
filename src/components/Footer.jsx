import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <p className="titlle-footer">
          <span className="bolde">IMMO</span>
          <span className="golde">HORIZON</span>
        </p>

        <p>Votre partenaire immobilier de confiance, pour chaque nouveau départ.</p>

        <div className="icons">
          <i className="icon icon-facebook"></i>
          <i className="icon icon-instagram"></i>
          <i className="icon icon-linkedin"></i>
        </div>
      </div>

      <div>
        <p className="footer-heading">NAVIGATION</p>
        <a href="#acceuil">Accueil</a>
        <a href="#nos-biens">Nos biens</a>
        <a href="#nos-services">Nos services</a>
        <a href="#contact">Contact</a>
      </div>

      <div>
        <p className="footer-heading">SERVICES</p>
        <a href="#acheter">Acheter</a>
        <a href="#vendre">Vendre</a>
        <a href="#louer">Louer</a>
        <a href="#estimer">Estimer mon bien</a>
      </div>

      <div>
        <p className="footer-heading">NOUS CONTACTER</p>
        <p>+212 5 22 00 00 00</p>
        <p>Du lundi au samedi</p>
        <p>9h00 — 18h00</p>
        <button className="btn-footer">DEMANDER UNE ESTIMATION</button>
      </div>
    </footer>
  );
};

export default Footer;