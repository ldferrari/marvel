import React, { useContext } from 'react';
import validatePassword from '../../services/validatePassword';
import AppContext from '../../context/AppContext';

export default function LoginSenhaInput() {
  const { userData, setUserData, setPasswordValid } = useContext(AppContext);
  return (
    <label htmlFor="senha" className="label">
      Senha
      <input
        type="password"
        id="senha"
        data-testid="password-input"
        className="input"
        onChange={ (event) => {
          if (validatePassword(event.target.value)) {
            setPasswordValid(true);
            setUserData({ ...userData, password: event.target.value });
          }
        } }
      />
    </label>
  );
}
