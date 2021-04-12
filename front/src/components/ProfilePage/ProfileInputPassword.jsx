import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import validatePassword from '../../services/validatePassword';
import AppContext from '../../context/AppContext';

const handleChange = (chValue, ePassword) => {
  const { setLocalPassword, user, setPasswordEqual, setApiSuccess } = chValue;
  setLocalPassword(ePassword)
  setPasswordEqual(false);
  if (ePassword === user.Password || !validatePassword(ePassword) || ePassword === "") {
    setPasswordEqual(true);
  }
  setApiSuccess(false);
};

export default function ProfileInputPassword({ inpPassword }) {
  const { localPassword, setLocalPassword, user } = inpPassword;
  const { setPasswordEqual, setApiSuccess } = useContext(AppContext);
  const chValue = { setLocalPassword, user, setPasswordEqual, setApiSuccess };
  return (
    <label htmlFor="password" className="labelProfile">
      Password
      <input
        className="inputProfile"
        type="password"
        id="password"
        name="password"
        value={ localPassword }
        onChange={ (event) => handleChange(chValue, event.target.value) }
      />
    </label>
  );
}

ProfileInputPassword.propTypes = {
  inpPassword: PropTypes.shape({
    localPassword: PropTypes.string,
    setLocalPassword: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
};
