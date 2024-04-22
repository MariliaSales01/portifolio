import './header.css'
import React, { useState } from "react";

export default function Header() {
    var logo = '<Marilia/>'
    const [menuOpen, setMenuOpen] = useState(false);


    return(
            <header>
                 <nav>
      <a href="#" className="title">
        {logo}
      </a>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <a href="#sobre">Sobre</a>
        </li>
        <li>
          <a href="#portfolio">Projetos</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <li>
          <a href="#habilidades">Habilidades</a>
        </li>
      </ul>
    </nav>
            </header>
            
        
        );
}
