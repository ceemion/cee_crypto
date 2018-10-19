import React from 'react';
import ReactDOM from 'react-dom';
import CryptoCard from '../CryptoCard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CryptoCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
