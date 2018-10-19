import React, { Component } from 'react';
import './App.css';
import FetchData from './components/FetchData';
import CryptoCard from './components/CryptoCard';

class App extends Component {
  render() {
    return (
      <div className="Ap">
        <header className="App-he">
          <div className="main-title">
            <span>Cee</span><span>Crypto</span>
            <p className="sub-title">monitor cryptocurrency prices in real time</p>
          </div>
        </header>

        <FetchData
          url="https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC,BCH&tsyms=NGN,USD,EUR"
          render={({loading, data}) => (
            <div>
              <p>{loading ? 'I am loading...' : 'Done loading'}</p>
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
