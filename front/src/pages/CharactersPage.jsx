import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { apiCharacters } from '../services/apiCharacters';
import Menu from '../components/Menu/Menu';
import CharactersMain from '../components/CharactersPage/CharactersMain';
import '../css/comics_characters.css';

const Characters = () => {
  const token = localStorage.getItem('token') || null;
  const { setCharactersItens } = useContext(AppContext);
  useEffect( async () => apiCharacters().then((response) => setCharactersItens(response)),
    [setCharactersItens]);
  if (!token || token === "undefined") return <Redirect to="/login" />;
  return (
    <div className="comicsCharactersMain">
      <Menu title="PERSONAGENS" />
      <CharactersMain />
    </div>
  );
};

export default Characters;