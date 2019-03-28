import React from 'react';
import PizzaFriend from './PizzaFriend';
import fetchPizza from '../actions/pizza-action';


const PizzaFriendsList = props => {
  createPizzaFriendsList = () => {
    // This function should take the contactsList and run all the phone numbers through the fetch request to determine who has pizza on the way.
    props.contactsList.map(contact => {
      props.fetchPizza(contact.phone)
    })
    // It should return an array of objects containing the OrderStatus.phone, the OrderStatus.OrderDescription, and the OrderStatus.OrderStatus


  }

  render() {
    return (
      <div>


      </div>
    )
  }

};

export default PizzaFriendsList;