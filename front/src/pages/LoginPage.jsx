import React from 'react';
import LoginEmailInput from '../components/LoginPage/LoginEmailInput';
import LoginSenhaInput from '../components/LoginPage/LoginSenhaInput';
import LoginButtonEntrar from '../components/LoginPage/LoginButtonEntrar';
import LoginButtonRegister from '../components/LoginPage/LoginButtonRegister';

export default function LoginPage(props) {
  return (
    <div className="login">
      <div className="inputs">
        <LoginEmailInput />
        <LoginSenhaInput />
      </div>
      <LoginButtonEntrar props={ props } />
      <LoginButtonRegister />
    </div>
  );
}
