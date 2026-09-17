import React from "react";
import Profile from "./Profile";

const Header = () => {
  return (
    <>
      <header>
        <p>
          <a href="#home" className="title">
            <span className="bolde">IMMO</span>
            <span className="golde">HORIZON</span>
          </a>
        </p>

        <div className="links-header">
          <a href="#acceuil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="profile_box">
          <button button className="btn-estimation">ESTIMATION</button>
          <Profile/>
        </div>
      </header>
    </>
  );
};

export default Header;
