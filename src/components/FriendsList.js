import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFriends } from '../actions';

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() {
    return (
      <section className="full-page padding-lg">
        <div className="container">
          <ul className="row"> This is my friends list</ul>
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
