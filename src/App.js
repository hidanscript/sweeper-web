import React from 'react';
import ChatBoard from './Screens/ChatBoard';
import Login from './Screens/Login';
import { Route, Switch } from 'react-router-dom';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <div className="bg-bar"></div>
      <Route render={({location}) => (
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/chat" component={ ChatBoard } />
        </Switch>
      )} />
    </div>
  );
}

export default App;
