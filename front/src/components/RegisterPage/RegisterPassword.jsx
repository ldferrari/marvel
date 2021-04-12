import React, { useContext } from 'react';
import AppContext from '../../context/AppContext'
import validatePassword from '../../services/validatePassword';

export default function RegisterPassword() {
  const { setPasswordValid, userData, setUserData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="password" className="labelRegistro">
        Senha
        <input
          type="password"
          id="password"
          className="inputRegistro"
          onChange={ ((event) => {
            setPasswordValid(validatePassword(event.target.value));
            setUserData({
              ...userData,
              password: event.target.value,
            });
          }) }
        />
      </label>
    </div>
  );
}
