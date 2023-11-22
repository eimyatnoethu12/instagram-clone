import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import './index.css'; // Import app.css directly
import './output.css';

ReactDOM.render(
  <Provider store={store} className="">
    <App />
  </Provider>,
  document.getElementById('root')
);
