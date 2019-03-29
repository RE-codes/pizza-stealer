import React, { Component } from 'react';
import { connect } from 'react-redux';

class PizzaFriendsList extends Component {
  state = {
    pizzaFriends: []
  };

  componentDidMount() {
    this.getPizzaFriends();
  }
  // This function should take the contactsList and run all the phone numbers through the fetch request to determine who has pizza on the way. The OrderStatus.OrderStatus needs to be NOT undefined and NOT 'complete'.

  // It should return an array of objects containing the OrderStatus.phone, the OrderStatus.OrderDescription, and the OrderStatus.OrderStatus
  getPizzaFriends = () => {
    this.props.friends.filter(async friend => {
      // make api call
      const resp = await fetch(
        `https://my-json-server.typicode.com/marielklem/pizza-api/db`
      );
      const data = await resp.json();

      if (
        data.Envelope.Body.GetTrackerDataResponse.OrderStatuses.OrderStatus
          .Phone === friend.phone &&
        data.Envelope.Body.GetTrackerDataResponse.OrderStatuses.OrderStatus
          .OrderStatus !== 'Complete'
      ) {
        friend.pizzaType =
          data.Envelope.Body.GetTrackerDataResponse.OrderStatuses.OrderStatus.OrderDescription;

        friend.deliveryDriver =
          data.Envelope.Body.GetTrackerDataResponse.OrderStatuses.OrderStatus
            .DriverName || null;

        friend.orderStatus =
          data.Envelope.Body.GetTrackerDataResponse.OrderStatuses.OrderStatus.OrderStatus;

        friend.timeOrdered =
          data.Envelope.Body.GetTrackerDataResponse.OrderStatuses.OrderStatus.StartTime;

        this.setState({ pizzaFriends: [...this.state.pizzaFriends, friend] });
      }
    });
  };

  renderPizzaFriends = () => {
    return this.state.pizzaFriends.map(pizzaFriend => {
      return (
        <div>
          <h1>This is where the pizza friends live.</h1>
          <h4>{pizzaFriend.name}</h4>
          <p>{pizzaFriend.address}</p>
          <p>{pizzaFriend.phone}</p>
        </div>
      );
    });
  };

  render() {
    return <div>{this.renderPizzaFriends()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    friends: state.friends,
    pizzaFriends: state.pizzaFriends
  };
};

// const mapDispatchtoProps = dispatch => {
//   return bindActionCreators({ fetchPizza }, dispatch);
// };

export default connect(mapStateToProps)(PizzaFriendsList);
