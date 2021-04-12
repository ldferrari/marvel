import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ComicsCard from './ComicsCard';
import AppContext from '../../context/AppContext';

export default function comicsMain() {
  const { comicsItens } = useContext(AppContext);
  return (
    <div className="listItens marginTop">
      {comicsItens.map((comicsIten) => (
        <ComicsCard key={ comicsIten.id } comicsIten={ comicsIten } />
      ))}
    </div>
  );
}

comicsMain.propTypes = {
  comicsItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};
