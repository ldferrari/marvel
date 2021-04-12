import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import fetchUserData from '../../services/fetchUserData';
import fetchLoginData from '../../services/fetchLoginData';

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
  return props.props.history.push('/comics');
};

export default function RegisterButton(props) {
  const { isNameValid, isEmailValid, isPasswordValid } = useContext(AppContext);
  const { userData, setEmailRegistered } = useContext(AppContext);
  const estados = { setEmailRegistered, userData, props };
  return (
    <div>
      <button
        type="button"
        className="cadastrar"
        onClick={ async () => isUserRegistered(estados)}
        disabled={ !isNameValid || !isEmailValid || !isPasswordValid }
      >
        Cadastrar
      </button>
    </div>
  );
}
