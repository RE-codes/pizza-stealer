import React, { Component } from 'react';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import StealPizza from './components/StealPizza';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="container" />
          <Switch>
            <Route exact path={['/friends', '/']} component={FriendsList}/>
            <Route exact path={'/stealpizza'} component={StealPizza} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
