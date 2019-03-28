import React, { Component } from 'react';

export class PizzaDetail extends Component {
  render() {
    return (
      <div className="row">
        <div
          className="col-md-6 offset-md-1 shadow-lg rounded"
          style={{ float: 'right' }}
        >
          <h2 style={{ backgroundColor: '#3a4351', color: 'white' }}>
            Time to Intercept Pizza!
          </h2>
          <p style={pizzaNarrativeStyle}>
            {driverName} is on his way to your friend {friend}'s house with{' '}
            {pizzaOrder}. We estimate the goods will be delivered to{' '}
            {friendAddress} in approximately 15-19 minutes, so head out now to
            intercept {driverName} and conveniently arrive in time for dinner!
          </p>
        </div>
        <div className="col-md-4">
          <img
            style={{ float: 'right' }}
            className="img-responsive"
            src="http://storage.googleapis.com/bro-cdn1/zgrid/themes/10307/images/home/pizza.png"
            width="400"
            height="400"
            alt=""
          />
        </div>
      </div>
    );
  }
}

const pizzaNarrativeStyle = {
  color: 'black',
  display: 'inline-block',
  verticalAlign: 'middle',
  marginTop: '3%',
  overflowWrap: 'normal',
  fontSize: '30px'
};

//harded coded values to be relaced with data from the api
const driverName = 'Alex';
const friend = 'Sam';
const pizzaOrder = 'large extra cheese pepperoni pizza and garlic knots';
const friendAddress = '111 Rose Street';

export default PizzaDetail;
