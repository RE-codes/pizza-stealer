import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFriends } from '../actions';

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  renderFriends() {
    console.log(this.props.friends)
    return _.map(this.props.friends, friends => {
      return (
        <div className="card card-body mb-3">
        <ul className="row">
          <h1> {friends.name} </h1>
          </ul>
        </div>
      );
    });
  }

  render() {
    return (
      <section className="full-page padding-lg">
        <div className="container">
          {this.renderFriends()}
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    friends: state.friends
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchFriends
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);
