import React, { Component } from 'react';
import './CryptoCard.css';
import moment from 'moment';

class CryptoCard extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const {type, data} = this.props;
    const coinsFullName = {
      btc: 'bitcoin',
      eth: 'ethereum',
      bch: 'bitcoin cash'
    };

    return (
      <div className="crypto-card">
        <div className="header">
          <div className="title">
            {type.toUpperCase()} <span className={type.toLowerCase()}>{coinsFullName[type.toLowerCase()]}</span>
          </div>
          <div className="icon"></div>
        </div>

        <div className="prices">
          <div className="main">NGN {data.NGN}</div>
          <div className="sub">USD {data.USD}</div>
          <div className="sub">EUR {data.EUR}</div>
        </div>

        <div className="updated-time">
          <p>Updated {moment().calendar(null, {sameDay : '[today at] h:mm:ss a',})}</p>
        </div>

        <p>set target</p>
      </div>
    )
  }
}

export default CryptoCard;
