import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import apiCharacters from '../services/apiCharacters';
import Menu from '../components/Menu/Menu';
import CharactersMain from '../components/CharactersPage/CharactersMain';  

const Characters = () => {
  const token = localStorage.getItem('token') || null;
  const { setCharactersItens } = useContext(AppContext);
  useEffect( async () => apiCharacters().then((response) => setCharactersItens(response)),
    [setCharactersItens]);
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div>
      <Menu />
      <CharactersMain />
    </div>
  );
};

export default Characters;