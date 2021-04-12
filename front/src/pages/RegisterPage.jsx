import React from 'react';
import RegisterName from '../components/RegisterPage/RegisterName';
import RegisterEmail from '../components/RegisterPage/RegisterEmail';
import RegisterPassword from '../components/RegisterPage/RegisterPassword';
import RegisterButton from '../components/RegisterPage/RegisterButton';
import ButtonLogout from '../components/Menu/ButtonLogout';
import marvelMenu from '../image/marvelMenu.svg';
import '../css/register.css';

export default function RegisterPage(props) {
  return (
    <div className="allRegistro">
      <div className="registerHeader">
        <h2 className="title">Registro</h2>
        <img src={marvelMenu} className="marvelImage" />
        <ButtonLogout />
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

