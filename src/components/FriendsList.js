import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { fetchFriends } from "../actions";

class FriendsList extends Component {
  componentDidMount() {
    this.props.fetchFriends();
  }
  render() {
    return (
      <div>
        List of all contacts will go here! 
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFriends }, dispatch)
}

export default connect(null, mapDispatchToProps)(FriendsList);