import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import fetchUpdateUser from '../../services/fetchUpdateUser';
import AppContext from '../../context/AppContext';

const handleClick = async (clickData) => {
  const { user, localName, localEmail, localPassword, setUserData } = clickData;
  const { setNameEqual, setEmailEqual, setPasswordEqual, setApiSuccess } = clickData;
  setUserData({
    ...user,
    name: localName,
    email: localEmail,
    password: localPassword,
  });
  localStorage.setItem(
    'user',
    JSON.stringify({ id: user.id, name: localName, email: localEmail }),
  );
  const api = await fetchUpdateUser(user.id, {
    ...user,
    name: localName,
    email: localEmail,
    password: localPassword,
  });
  if (api.message === 'success') {
    setApiSuccess(true);
  }
  
  setNameEqual(true);
  setEmailEqual(true); 
  setPasswordEqual(true);
};

export default function ProfileButton({ buttonData }) {
  const { localName, localEmail, localPassword, user } = buttonData;
  const { nameEqual, setNameEqual, setUserData } = useContext(AppContext);
  const { emailEqual, setEmailEqual, setApiSuccess } = useContext(AppContext);
  const { passwordEqual, setPasswordEqual } = useContext(AppContext);
  const clickData = { user, localName, localEmail, localPassword, setUserData, setApiSuccess, setNameEqual, emailEqual, setEmailEqual, passwordEqual, setPasswordEqual };
  let disableButton = true
  if(!nameEqual || !emailEqual || !passwordEqual) { disableButton = false }
  return (
    <button
      className="salvar"
      type="button"
      onClick={ () => handleClick(clickData) }
      disabled={ disableButton }
    >
      Salvar
    </button>
  );
}

ProfileButton.propTypes = {
  buttonData: PropTypes.shape({
    user: PropTypes.string,
    localName: PropTypes.string,
    localEmail: PropTypes.string,
    localPassword: PropTypes.string,
  }).isRequired,
};
