import React from 'react';
import ComicDetailsImage from './ComicDetailsImage';
import ComicDetailsName from './ComicDetailsName';
import ComicDatailsDescipton from './ComicDatailsDescipton';
import ComicFavoriteButton from './ComicFavoriteButton';
import ComicListCharacters from './ComicListCharacters';

export default function ComicDatailsMain() {
  return (
    <div className="datailsBody">
      <div className="datailsMain">
        <ComicDetailsImage />
        <div className="textDetails">
          <ComicDetailsName />
          <ComicDatailsDescipton />
          <ComicFavoriteButton />
        </div>
      </div>
      <ComicListCharacters />
    </div>
  );
}