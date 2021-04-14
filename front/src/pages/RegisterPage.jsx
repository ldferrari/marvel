import React from 'react';
import RegisterName from '../components/RegisterPage/RegisterName';
import RegisterEmail from '../components/RegisterPage/RegisterEmail';
import RegisterPassword from '../components/RegisterPage/RegisterPassword';
import RegisterButton from '../components/RegisterPage/RegisterButton';
import VoltarButton from '../components/RoteButton';
import marvelMenu from '../image/marvelMenu.svg';
import '../css/register.css';

export default function RegisterPage(props) {
  return (
    <div className="allRegistro">
      <div className="registerHeader">
        <h2 className="title">Registro</h2>
        <img src={marvelMenu} className="marvelImage" />
        <VoltarButton rota="/login" texto="VOLTAR" />
      </div>
      <div className="bodyRegistro">
        <RegisterName />
        <RegisterEmail />
        <RegisterPassword />
        <RegisterButton props={ props }/>
      </div>
    </div>
  );
}

