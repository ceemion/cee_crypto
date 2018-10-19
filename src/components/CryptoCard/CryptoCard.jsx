import React, { Component } from 'react';

class CryptoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div className="crypto-card">
        <div className="header">
          <div className="title">
            title - {this.props.type}
          </div>
          <div className="icon">
            icon
          </div>
        </div>

        <div className="prices">
          prices
          <div className="main">NGN ${this.props.data.NGN}</div>
        </div>

        <div className="updated-time">
          time
        </div>

        <p>set target</p>
      </div>
    )
  }
}

export default CryptoCard;
