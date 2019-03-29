import React, { Component } from 'react';

export class PizzaDetail extends Component {
  render() {
    console.log('this.props:', this.props);
    const { deliveryDriver, friendName, pizzaType, friendAddress } = this.props;
    return (
      <div className="row">
        <div className="col-md-7 shadow-lg rounded" style={{ float: 'right' }}>
          <h2 style={{ backgroundColor: '#3a4351', color: 'white' }}>
            Time to Intercept Pizza!
          </h2>
          <p style={pizzaNarrativeStyle}>
            {deliveryDriver} is on his way to your friend {friendName}
            's house with {pizzaType}. We estimate the goods will be delivered
            to {friendAddress} in approximately 15-19 minutes, so head out now
            to intercept {deliveryDriver} and conveniently arrive in time for
            dinner!
          </p>
        </div>
        <div className="col-md-3 offset-md-2">
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
  marginRight: '5%',
  overflowWrap: 'normal',
  fontSize: '27px'
};

export default PizzaDetail;
