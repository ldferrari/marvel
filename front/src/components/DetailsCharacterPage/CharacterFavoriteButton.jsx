import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import coraçãoPreto from '../../image/coraçãoPreto.png';
import coraçãoVermelho from '../../image/coraçãoVermelho.png';
import AppContext from '../../context/AppContext';

function convertFavorite(characterData, setFavorite) {
  const saida = {
    id: characterData[0].id,
    name: characterData[0].name,
    image: characterData[0].thumbnail.path+'.'+characterData[0].thumbnail.extension,
  };
  addFavority(saida, setFavorite);
  return saida;
}

function addFavority(character, setFavorite) {
  let oldFav = localStorage.getItem('favoriteCharacter');
  if (!oldFav) {
    setFavorite(true);
    return localStorage.setItem('favoriteCharacter', JSON.stringify([character]));
  }
  oldFav = [...JSON.parse(oldFav)];
  if (oldFav.find((el) => el.id === character.id)) {
    setFavorite(false);
    return localStorage.setItem(
      'favoriteCharacter',
      JSON.stringify(oldFav.filter((el) => el.id !== character.id)),
    );
  }
  const temp = [...oldFav, character];
  setFavorite(true);
  return localStorage.setItem('favoriteCharacter', JSON.stringify(temp));
}

function favoriteCharacter(setFavorite, id) {
  let favoriteCharacterVar = localStorage.getItem('favoriteCharacter');
  if (favoriteCharacterVar) {
    favoriteCharacterVar = JSON.parse(favoriteCharacterVar);
    favoriteCharacterVar = favoriteCharacterVar.find((el) => el.id === id);
    if (favoriteCharacterVar) {
      return setFavorite(true);
    }
  }
  return setFavorite(false);
}

export default function FavoriteButton() {
  const { characterData } = useContext(AppContext);
  const maior = (characterData.length > 0)
  const [favorite, setFavorite] = useState(false);
  useEffect(async() => {if(maior) favoriteCharacter(setFavorite, characterData[0].id), []});
  return (
    <Link onClick={() => convertFavorite(characterData, setFavorite)}>
      {
        favorite ?
        <img src={ coraçãoVermelho } className="coraçãoVermelho" alt="likeIcon"/> :
        <img src={ coraçãoPreto } className="coraçãoPreto" alt="likeIcon"/>
      }
    </Link>
  );
}
