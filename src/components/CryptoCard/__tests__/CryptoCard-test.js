import React from 'react';
import ReactDOM from 'react-dom';
import CryptoCard from '../CryptoCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CryptoCard type="btc" data={{}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
