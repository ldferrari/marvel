import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import loginData from '../../services/fetchLoginData';

const login = async (userData, setUserData, props) => {
  const usuario = await loginData(userData);
  setUserData({
    ...userData,
    id: usuario.id,
    name: usuario.name,
    email: usuario.email,
  });
  localStorage.setItem('token', usuario.token);
  localStorage.setItem('user', JSON.stringify({
    id: usuario.id,
    name: usuario.name,
    email: usuario.email,
  }));
  return props.history.push('/comics');
};

export default function LoginButtonEntrar({ props }) {
  const { userData, setUserData } = useContext(AppContext);
  const { isEmailValid, isPasswordValid } = useContext(AppContext);
  return (
    <button
      type="button"
      data-testid="signin-btn"
      disabled={ !isEmailValid || !isPasswordValid }
      className="entrar"
      onClick={ () => {
        login(userData, setUserData, props);
      } }
    >
      ENTRAR
    </button>
  );
}

LoginButtonEntrar.propTypes = {
  props: PropTypes.arrayOf(PropTypes.object).isRequired,
};
