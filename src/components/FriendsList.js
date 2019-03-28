import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFriends } from '../actions';
import PizzaDetail from './PizzaDetail';

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  renderFriends() {
    console.log(this.props.friends);
    return _.map(this.props.friends, friends => {
      return (
        <li className="list-group-item">
          <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-3 px-0">
              <img
                src={friends.imgUrl}
                style={{ objectFit: 'cover' }}
                alt=""
                className="rounded-circle mx-auto d-block img-fluid"
                width="100px"
                height="100px"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
              <label className="name lead">{friends.name}</label>
              <br />
              <span
                className="fa fa-map-marker-alt fa-fw text-muted"
                title=""
              />
              <span className="text-muted">{friends.address}</span>
              <br />
              <span className="fa fa-phone fa-fw text-muted" title="" />
              <span className="text-muted small">{friends.phone}</span>
              <button onClick={onClickButton} className="rounded">
                <img
                  src="https://i0.wp.com/www.pizzajerkpdx.com/wp-content/themes/pizza-jerk-theme/assets/images/slice.png?w=600"
                  width="30"
                  height="30"
                  alt=""
                />
              </button>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <section className="full-page padding-lg">
        <div className="container"> {this.renderFriends()} </div>
        {/* <PizzaDetail /> */}
      </section>
    );
  }
}

const onClickButton = e => {
  e.preventDefault();
  console.log('hey!');
  return (
    <div>
      <PizzaDetail />
    </div>
  );
};
function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFriends }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);
