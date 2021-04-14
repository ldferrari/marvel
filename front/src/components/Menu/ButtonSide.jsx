import React from 'react';
import ButtonRote from '../ButtonRote';
import ButtonLogout from '../ButtonLogout';

export default function MenuLateral() {
  return (
    <div className="side-menu-container">
      <nav className="side-menu-nav">
        <div className="menu-buttons-control">
          <ButtonRote texto={ "Quadrinhos" } rota={ "/comics" } />
          <ButtonRote texto={ "Personagens" } rota={ "/characters" } />
          <ButtonRote texto={ "Quadrinhos Favoritos" } rota={ "/favorite_comics" } />
          <ButtonRote texto={ "Personagens Favoritos" } rota={ "/favorite_characters" } />
        </div>
        <div>
          <ButtonLogout texto={ "Logout" } rota={ "/login" }/>
        </div>
      </nav>
    </div>
  );
}