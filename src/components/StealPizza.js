import React, { Component } from 'react';
import PizzaFriendsList from './PizzaFriendsList';

export class StealPizza extends Component {
  render() {
    return (
      <div style={{ marginTop: '75px' }}>
        <PizzaFriendsList />
      </div>
    );
  }
}

export default StealPizza;
