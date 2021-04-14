import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ComicsPage from './pages/ComicsPage';
import CharactersPage from './pages/CharactersPage';
import FavoriteComicsPage from './pages/FavoriteComicsPage';
import FavoriteCharactersPage from './pages/FavoriteCharactersPage';
import DatailsComicPage from './pages/DetailsComicPage';
import DatailsCharacterPage from './pages/DetailsCharacterPage';
import ProfilePage from './pages/ProfilePage';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Switch>
          <Route path="/login" component={ LoginPage } />
          <Route path="/register" component={ RegisterPage } />
          <Route path="/comics/:id_comics" component={ DatailsComicPage } />
          <Route path="/characters/:id_characters" component={ DatailsCharacterPage } />
          <Route exact path="/favorite_comics" component={ FavoriteComicsPage } />
          <Route exact path="/favorite_characters" component={ FavoriteCharactersPage } />
          <Route exact path="/comics" component={ ComicsPage } />
          <Route exact path="/characters" component={ CharactersPage } />
          <Route path="/profile" component={ ProfilePage } />
          <Route exact path="/" component={ () => <Redirect to="/login" /> } />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
