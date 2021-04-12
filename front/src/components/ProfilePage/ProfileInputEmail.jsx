import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import validatePassword from '../../services/validatePassword';
import AppContext from '../../context/AppContext';

const handleChange = (chValue, eEmail) => {
  const { setLocalEmail, user, setEmailEqual, setApiSuccess } = chValue;
  setEmailEqual(false);
  validatePassword(setLocalEmail(eEmail));
  if (eEmail === user.Email) {
    setEmailEqual(true);
  }
  setApiSuccess(false);
};

export default function ProfileInputEmail(props) {
  const { inpEmail } = props;
  const { localEmail, setLocalEmail, user } = inpEmail;
  const { setEmailEqual, setApiSuccess } = useContext(AppContext);
  const chValue = { setLocalEmail, user, setEmailEqual, setApiSuccess };
  return (
    <label htmlFor="email" className="labelProfile">
      E-mail
      <input
        className="inputProfile"
        type="text"
        id="email"
        name="email"
        value={ localEmail }
        onChange={ (event) => handleChange(chValue, event.target.value) }
      />
    </label>
  );
}

ProfileInputEmail.propTypes = {
  inpEmail: PropTypes.shape({
    localEmail: PropTypes.string,
    setLocalEmail: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
};
