import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import validateName from '../../services/validateName';
import AppContext from '../../context/AppContext';

const handleChange = (chValue, eName) => {
  const { setLocalName, user, setNameEqual, setApiSuccess } = chValue;
  setNameEqual(false);
  validateName(setLocalName(eName));
  if (eName === user.name) {
    setNameEqual(true);
  }
  setApiSuccess(false);
};

export default function ProfileInputName(props) {
  const { inpName } = props;
  const { localName, setLocalName, user } = inpName;
  const { setNameEqual, setApiSuccess } = useContext(AppContext);
  const chValue = { setLocalName, user, setNameEqual, setApiSuccess };
  return (
    <label htmlFor="name" className="labelProfile top">
      Name
      <input
        className="inputProfile"
        type="text"
        id="name"
        name="name"
        value={ localName }
        onChange={ (event) => handleChange(chValue, event.target.value) }
      />
    </label>
  );
}

ProfileInputName.propTypes = {
  inpName: PropTypes.shape({
    localName: PropTypes.string,
    setLocalName: PropTypes.string,
    user: PropTypes.string,
  }).isRequired,
};
