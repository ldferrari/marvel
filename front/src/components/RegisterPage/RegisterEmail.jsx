import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import validateEmail from '../../services/validateEmail';

export default function RegisterEmail() {
  const { setEmailValid, isEmailRegistered, userData, setUserData } = useContext(AppContext);
  return (
    <div>
      <label htmlFor="email" className="labelRegistro">
        Email
        <input
          type="text"
          id="email"
          className="inputRegistro"
          onChange={ ((event) => {
            setEmailValid(validateEmail(event.target.value));
            setUserData({
              ...userData,
              email: event.target.value,
            });
          }) }
        />
      </label>
      {
        isEmailRegistered
          ? <div className="alradyDB">E-mail already in database.</div>
          : false
      }
    </div>
  );
}
