import React, { Component } from 'react';
// import PizzaFriend from './PizzaFriend';
import { fetchPizza } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PizzaFriendsList extends Component {
  createPizzaFriendsList = props => {
    // This function should take the contactsList and run all the phone numbers through the fetch request to determine who has pizza on the way.
  };
  // It should return an array of objects containing the OrderStatus.phone, the OrderStatus.OrderDescription, and the OrderStatus.OrderStatus
  render() {
    return (
      <div>
        <h1>A list of pizza bearing friends goes in here</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pizzaFriends: state.pizzaFriends
  };
};

const mapDispatchtoProps = dispatch => {
  return bindActionCreators({ fetchPizza }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(PizzaFriendsList);
