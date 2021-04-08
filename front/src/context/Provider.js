import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

const Provider = ({ children }) => {
  const [initialUser] = useState({
    email: '',
    password: '',
    name: '',
  });
  const [userData, setUserData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const context = {
    initialUser,
    userData,
    setUserData,
  };

  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
