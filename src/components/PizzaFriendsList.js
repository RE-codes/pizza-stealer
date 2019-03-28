import React, { Component } from 'react';
import { fetchPizza } from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PizzaFriendsList extends Component {
  // componentDidMount() {
  //   this.props.fetchPizza(9192717815);
  // }

  createPizzaFriendsList = () => {
    const pizzaFriends = this.props.friends.filter(async friend => {
      const resp = await fetch(this.props.fetchPizza(9192717815));
      const json = await resp.json();

      console.log(pizzaFriends);
      if (json.data.contactList.phone === friend.phone) return friend;
    });
  };

  // This function should take the contactsList and run all the phone numbers through the fetch request to determine who has pizza on the way. The OrderStatus.OrderStatus needs to be NOT undefined and NOT 'complete'.

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
    friends: state.friends,
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
