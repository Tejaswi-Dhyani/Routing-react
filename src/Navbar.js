import React from "react";
import {  Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/contact" className="nav-link">Contact</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
        </>
    );

}