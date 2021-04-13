import React from 'react';
import CharacterDetailsImage from './CharacterDetailsImage';
import CharacterDetailsName from './CharacterDetailsName';
import CharacterDatailsDescipton from './CharacterDatailsDescipton';
import CharacterFavoriteButton from './CharacterFavoriteButton';
//import CharacterListComics from './CharacterListComics';

export default function CharacterDatailsMain() {
  return (
    <div className="datailsBody">
      <div className="datailsMain">
        <CharacterDetailsImage />
        <div className="textDetails">
          <CharacterDetailsName />
          <CharacterDatailsDescipton />
          <CharacterFavoriteButton />
        </div>
      </div>
      {/* <CharacterListComics /> */}
    </div>
  );
}
