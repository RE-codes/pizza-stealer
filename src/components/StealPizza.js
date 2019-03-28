import React, { Component } from 'react';
import PizzaDetail from './PizzaDetail';
import PizzaFriendsList from './PizzaFriendsList';

export class StealPizza extends Component {
  render() {
    return (
      <div style={{ marginTop: '75px' }}>
        <PizzaFriendsList />
        <PizzaDetail />
      </div>
    );
  }
}

export default StealPizza;
