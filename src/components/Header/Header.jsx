import "./Header.css";
import React from "react";

const Header = () => {
  return (
    <nav class="navbar">
      <div class="container-fluid d-flex bd-highlight nav-items">
        <a href="http://www.google.es" class="navbar-brand">
          Sobre Google
        </a>
        <a
          href="http://www.google.es"
          class="navbar-brand p-2 flex-grow-1 bd-highlight "
        >
          Tienda
        </a>
        <a href="http://www.google.es" class="navbar-brand me-2 ">
          Gmail
        </a>
        <a href="http://www.google.es" class="navbar-brand me-2 ">
          Imagenes
        </a>
        <button type="button" class="btn btn-primary">
          Iniciar Sesion
        </button>
      </div>
    </nav>
  );
};

export default Header;
