import React from 'react';
import LoginEmailInput from '../components/LoginPage/LoginEmailInput';
import LoginSenhaInput from '../components/LoginPage/LoginSenhaInput';
import LoginButtonEntrar from '../components/LoginPage/LoginButtonEntrar';
import LoginButtonRegister from '../components/LoginPage/LoginButtonRegister';
import marvelLogin from '../image/marvelLogin.jpg';
import '../css/login.css';

export default function LoginPage(props) {
  return (
    <div className="login">
      <div className="inputs">
        <div className="entrar">
          <LoginEmailInput />
          <LoginSenhaInput />
          <LoginButtonEntrar props={ props } />
        </div>
        <LoginButtonRegister />
      </div>
      <img src={ marvelLogin } />
    </div>
  )
}
