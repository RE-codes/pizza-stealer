import React, { Component } from 'react';

export class PizzaDetail extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-7" style={{ float: 'right' }}>
          <h2>Time to Intercept Pizza!</h2>
          <p style={pizzaNarrativeStyle}>
            Charlie is on his way to your friend Sam's house with a large
            pepperoni pizza and a side of garlic knots. We estimate the goods
            will be delivered to 111 Rose Street in approximately 15-19 minutes,
            so head out now to intercept Charlie and conveniently arrive in time
            for dinner!
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
  marginTop: '2%',
  overflowWrap: 'normal'
};

export default PizzaDetail;
