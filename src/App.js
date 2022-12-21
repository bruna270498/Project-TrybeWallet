import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bulma/css/bulma.min.css';

import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <main className="app">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/carteira" component={ Wallet } />
      </Switch>
    </main>
  );
}

export default App;
