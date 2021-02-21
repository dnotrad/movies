import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <HashRouter >
      <App />
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
