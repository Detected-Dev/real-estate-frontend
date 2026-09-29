import React from "react";
import Profile from "./Profile";
import {Link} from "react-router-dom";
import { useWebStates } from "../context/WebContext";
import AddPropertyForm from "./AddPropertyForm";

const Header = ({extraLogo,existNavBar,existButton}) => {
  const {handleClick,setHandleClick} = useWebStates();
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
          <Link to={"/"}>Accueil</Link>
          <Link to={"/properties"}>
            Properties
          </Link>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </div>
        }
        <div className="profile_box">
          {existButton && <button button className="btn_add_property" onClick={() =>setHandleClick(prev => ({
            ...prev , addProperty : true
          }))}> + Add Propety</button>}
          <Profile/>
        </div>
      </header>
        {handleClick.addProperty && <AddPropertyForm/>}
    </>
  );
};

export default Header;
