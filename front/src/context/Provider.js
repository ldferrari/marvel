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
  const [isEmailValid, setEmailValid] = useState(false);
  const [isNameValid, setNameValid] = useState(false);
  const [isPasswordValid, setPasswordValid] = useState(false);
  const [isEmailRegistered, setEmailRegistered] = useState(false);
  const [comicsItens, setComicsItens] = useState([]);
  const [charactersItens, setCharactersItens] = useState([]);
  const [apiSuccess, setApiSuccess] = useState(false);
  const [nameEqual, setNameEqual] = useState(true);
  const [emailEqual, setEmailEqual] = useState(true);
  const [passwordEqual, setPasswordEqual] = useState(true);
  const [characterData, setCharacterData] = useState([]);
  const [comicData, setComicData] = useState([]);
  const context = {
    initialUser,
    userData,
    setUserData,
    isEmailValid,
    setEmailValid,
    isNameValid,
    setNameValid,
    isPasswordValid,
    setPasswordValid,
    isEmailRegistered,
    setEmailRegistered,
    comicsItens,
    setComicsItens,
    charactersItens,
    setCharactersItens,
    apiSuccess,
    setApiSuccess,
    nameEqual,
    setNameEqual,
    emailEqual,
    setEmailEqual,
    passwordEqual,
    setPasswordEqual,
    characterData,
    setCharacterData,
    comicData,
    setComicData,
  };
  
  return <AppContext.Provider value={ context }>{children}</AppContext.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.objectOf(Object).isRequired,
};
