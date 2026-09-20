import React from "react";
import Profile from "./Profile";
import {Link} from "react-router-dom";

const Header = ({extraLogo,existNavBar,existButton}) => {
  return (
    <>
      <header>
        <p>
          <Link to="/" className="title">
            <span className="bolde">IMMO</span>
            <span className="golde">HORIZON</span>
            {extraLogo && <span className="extraLogo">{extraLogo.toUpperCase()}</span>}
          </Link>
        </p>
        {existNavBar && 
        <div className="links-header">
          <a href="#acceuil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </div>
        }
        <div className="profile_box">
          {existButton && <button button className="btn-estimation">ESTIMATION</button>}
          <Profile/>
        </div>
      </header>
    </>
  );
};

export default Header;
