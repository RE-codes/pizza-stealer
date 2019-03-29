import React, { Component } from 'react';
import { connect } from 'react-redux';
import PizzaDetail from './PizzaDetail';

class PizzaFriendsList extends Component {
  state = {
    pizzaFriends: []
    //showThisPizzaFriend: {}
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
            .DriverName || 'Charlie';

        friend.orderStatus =
          data.Envelope.Body.GetTrackerDataResponse.OrderStatuses.OrderStatus.OrderStatus;

        friend.timeOrdered =
          data.Envelope.Body.GetTrackerDataResponse.OrderStatuses.OrderStatus.StartTime;

        friend.showPizzaDetail = false;

        this.setState({
          pizzaFriends: [...this.state.pizzaFriends, friend]
        });
      }
    });
  };

  toggleShowClick = e => {
    console.log('this.state:', this.state);

    const buttonId = e.currentTarget.getAttribute('id');

    console.log('e.currentTarget:', e.currentTarget);
    console.log('buttonId:', typeof buttonId);
    console.log('this.state.pizzaFriends:', this.state.pizzaFriends);

    // make a copy of the pizzaFrind
    const pizzaFriendsCopy = [...this.state.pizzaFriends];

    pizzaFriendsCopy.map((friend, index, array) => {
      if (friend.id == buttonId) {
        friend.showPizzaDetail = !friend.showPizzaDetail;
        //overwriting friend
        array[index] = friend;
      }
      return array;
    });

    // setState of updated friend
    this.setState({
      pizzaFriends: pizzaFriendsCopy
    });
  };

  renderPizzaFriends = () => {
    return this.state.pizzaFriends.map(pizzaFriend => {
      return (
        <li className="list-group-item">
          <div className="row w-100">
            <div className="col-6 col-sm-6 col-md-9 text-center text-sm-left">
              <label className="name lead mr-1"> {pizzaFriend.name} </label>
              <span className="fa fa-map-marker-alt fa-fw text-muted" title="">
                {' '}
              </span>{' '}
              <span className="text-muted mr-1"> {pizzaFriend.address} </span>
              <span className="fa fa-phone fa-fw text-muted" title="">
                {' '}
              </span>{' '}
              <span className="text-muted small"> {pizzaFriend.phone} </span>{' '}
            </div>
            <div className="col-3">
              <button
                onClick={this.toggleShowClick.bind(this)}
                className="rounded"
                id={pizzaFriend.id}
              >
                STEAL
                <img
                  src="https://i0.wp.com/www.pizzajerkpdx.com/wp-content/themes/pizza-jerk-theme/assets/images/slice.png?w=600"
                  width="30"
                  height="30"
                  alt=""
                  style={{ float: 'right' }}
                />
              </button>
            </div>{' '}
          </div>{' '}
        </li>
      );
    });
  };

  render() {
    const theRightPizzaDetail = this.state.pizzaFriends.find(
      pizzaFriend => pizzaFriend.showPizzaDetail === true
    );
    console.log('therghtpizadetial:', theRightPizzaDetail);
    //console.log('right pizza id:', theRightPizzaDetail.id);

    return (
      <div className="container">
        <div>
          <h3 className="text-left">Friends with Active Pizza Orders</h3>
        </div>
        <div style={{ marginBottom: '60px' }}>{this.renderPizzaFriends()}</div>
        {theRightPizzaDetail ? (
          <PizzaDetail
            key={theRightPizzaDetail.id}
            id={theRightPizzaDetail.id}
            timeOrdered={theRightPizzaDetail.timeOrdered}
            deliveryDriver={theRightPizzaDetail.deliveryDriver}
            pizzaType={theRightPizzaDetail.pizzaType}
            friendAddress={theRightPizzaDetail.address}
            orderStatus={theRightPizzaDetail.orderStatus}
            friendName={theRightPizzaDetail.name}
          />
        ) : null}
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

// const mapDispatchtoProps = dispatch => {
//   return bindActionCreators({ fetchPizza }, dispatch);
// };

export default connect(mapStateToProps)(PizzaFriendsList);
