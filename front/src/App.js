import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Provider from './context/Provider'
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Route path="/" component={ LoginPage } />
      </Provider>
    </div>
  );
}

export default App;
