import React from "react";
import "./Footer.css";
import hoja from "../../images/hojagoogle.png";

const Footer = () => {
  return (
    <div class="footer">
      <div class="footer-container up">
        <span>España</span>
      </div>
      <div class="footer-container down">
        <img src={hoja} alt="hoja" />
        <span> Emision Neutra de carbono desde 2017</span>
      </div>
    </div>
  );
};

export default Footer;
