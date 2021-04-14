import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import coraçãoPreto from '../../image/coraçãoPreto.png';
import coraçãoVermelho from '../../image/coraçãoVermelho.png';

function convertFavorite(characterItens, setFavorite) {
  const saida = {
    id: characterItens.id,
    name: characterItens.name,
    image: imageValid(characterItens),
  };
  addFavority(saida, setFavorite);
  return saida;
}

function imageValid(characterItens) {
  if( characterItens.thumbnail ) {
    return characterItens.thumbnail.path+'.'+characterItens.thumbnail.extension
  }
  return characterItens.image;
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

export default function CharacterFavoriteButton({ characterItens }) {
  const [favorite, setFavorite] = useState(false);
  useEffect(async() => favoriteCharacter(setFavorite, characterItens.id), []);
  return (
    <Link onClick={() => convertFavorite(characterItens, setFavorite)}>
      {
        favorite ?
        <img src={ coraçãoVermelho } className="coraçãoVermelhoCP" alt="likeIcon"/> :
        <img src={ coraçãoPreto } className="coraçãoPretoCP" alt="likeIcon"/>
      }
    </Link>
  );
}

CharacterFavoriteButton.propTypes = {
  characterItens: propTypes.object.isRequired,
};
