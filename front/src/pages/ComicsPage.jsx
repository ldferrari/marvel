import React, { useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppContext from '../context/AppContext';
import apiComics from '../services/apiComics';
//import Menu from '../../components/client/Menu';
import ComicsMain from '../components/ComicsPage/ComicsMain';  

const Comics = () => {
  const token = localStorage.getItem('token') || null;
  const { setComicsItens } = useContext(AppContext);
  useEffect( async () => apiComics().then((response) => setComicsItens(response)),
    [setComicsItens]);
  if (!token) return <Redirect to="/login" />;
  return (
    <div>
      {/* <Menu title="Marvel" /> */}
      <ComicsMain />
    </div>
  );
};

export default Comics;
