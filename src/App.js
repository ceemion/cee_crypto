import React, { Component } from 'react';
import './App.css';
import FetchData from './components/FetchData';
import CryptoCard from './components/CryptoCard';

class App extends Component {
  render() {
    return (
      <div className="crypto-wrapper">
        <header className="main-title">
          <span>Cee</span><span>Crypto</span>
          <p className="sub-title">monitor cryptocurrency prices in real time</p>
        </header>

        <FetchData
          url="https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,BCH&tsyms=NGN,USD,EUR"
          render={({loading, data, error}) => (
            <div>
              {loading && <div className="status-text"><em>preparing your cryptos...</em></div>}
              {error && <div className="status-text">{error}. Ensure you're connected to a network and reload!</div>}
              {!!Object.keys(data).length && Object.keys(data).map(key => (
                <CryptoCard key={key} type={key} data={data[key]} />
              ))}
            </div>
          )}
        />

        <footer>
          <p>&copy; 2018 Kompilab</p>
        </footer>
      </div>
    )
  }
}

export default App;
