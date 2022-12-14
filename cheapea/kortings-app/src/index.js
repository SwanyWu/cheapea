import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from "react-router-dom";
// import * as serviceWorker from './service-worker.js';

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// serviceWorker.unregister();