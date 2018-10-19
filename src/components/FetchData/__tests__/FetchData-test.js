import React from 'react';
import ReactDOM from 'react-dom';
import FetchData from '../FetchData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FetchData />, div);
  ReactDOM.unmountComponentAtNode(div);
});
