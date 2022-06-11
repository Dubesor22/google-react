import React from "react";
import "./Body.css";
import google from "../../images/googlelogo.png";
import search from "../../images/search.svg";
import microphone from "../../images/microphone.svg";

const Body = () => {
  return (
    <div class="google-container">
      <img src={google} alt="" />
      <br />
      <div class="input-container">
        <img class="search" src={search} alt="" />
        <input type="text" name="" id="" />
        <img class="microphone" src={microphone} alt="" />
      </div>
      <div class="buttons-container">
        <br />
        <button>Buscar con Google</button>
        <button>Voy a tener suerte</button>
      </div>
      <div class="language-container">
        <br />
        <span>Ofrecido por Google en: </span>
        <a href="www.google.com">valencia </a>
        <a href="www.google.com">galego </a>
        <a href="www.google.com">euskera </a>
      </div>
    </div>
  );
};

export default Body;
