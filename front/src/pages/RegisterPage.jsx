import React, { useContext } from 'react';
import  AppContext from '../context/AppContext';
import validateName from '../services/validateName';
import validateEmail from '../services/validateEmail';
import validatePassword from '../services/validatePassword';
import fetchUserData from '../services/fetchUserData';
import fetchLoginData from '../services/fetchLoginData';

const setLocalStorage = async (userData) => {
  const userWithToken = await fetchLoginData(userData);
  localStorage.setItem('token', userWithToken.token);
  localStorage.setItem(
    'user',
    JSON.stringify({
      id: userWithToken.id,
      email: userData.email,
      role: userData.role,
      name: userData.name,
    }),
  );
};

const isUserRegistered = async (estados) => {
  const { setEmailRegistered, userData, props } = estados;
  const { message } = await fetchUserData(userData);
  if (message === 'E-mail already in database.') {
    return setEmailRegistered(true);
  }
  setEmailRegistered(false);
  await setLocalStorage(userData);
  return props.history.push('/comics');
};

export default function RegisterPage(props) {
  const { isNameValid, setNameValid, isEmailValid } = useContext(AppContext);
  const { setEmailValid, isEmailRegistered } = useContext(AppContext);
  const { isPasswordValid, setPasswordValid } = useContext(AppContext);
  const { userData, setUserData, setEmailRegistered } = useContext(AppContext);
  const estados = { setEmailRegistered, userData, props };

  return (
    <div className="allRegistro">
      <h2 className="title">Registro</h2>
      <div className="bodyRegistro">
        <div>
          <label htmlFor="name" className="labelRegistro">
            Nome
            <input
              type="text"
              id="name"
              data-testid="signup-name"
              className="inputRegistro"
              onChange={ ((event) => {
                setNameValid(validateName(event.target.value));
                setUserData({
                  ...userData,
                  name: event.target.value,
                });
              }) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="email" className="labelRegistro">
            Email
            <input
              type="text"
              id="email"
              data-testid="signup-email"
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
        <div>
          <label htmlFor="password" className="labelRegistro">
            Senha
            <input
              type="password"
              id="password"
              data-testid="signup-password"
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
        <div>
          <button
            type="button"
            data-testid="signup-btn"
            className="cadastrar"
            onClick={ async () => isUserRegistered(estados)}
            disabled={ !isNameValid || !isEmailValid || !isPasswordValid }
          >
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}

