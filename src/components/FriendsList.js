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
    return _.map(this.props.friends, friends => {
      return (
        <li className="list-group-item" key={friends.id}>
          <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-3 px-0">
              <img
                src={friends.imgUrl}
                style={{
                  objectFit: 'cover'
                }}
                alt="your friend"
                className="rounded-circle mx-auto d-block img-fluid contactsImg"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
              <label className="name lead"> {friends.name} </label> <br />
              <span className="fa fa-map-marker-alt fa-fw text-muted" title="">
                {' '}
              </span>{' '}
              <span className="text-muted"> {friends.address} </span> <br />
              <span className="fa fa-phone fa-fw text-muted" title="">
                {' '}
              </span>{' '}
              <span className="text-muted small"> {friends.phone} </span>{' '}
            </div>{' '}
          </div>{' '}
        </li>
      );
    });
  }

  render() {
    return (
      <section className="full-page padding-lg">
        <div className="container" style={{ marginTop: '75px' }}>
          <div>
            <h3 className="text-left">All Friends</h3>
          </div>
          <div>{this.renderFriends()} </div>{' '}
        </div>{' '}
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    key: state.friends.id,
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
