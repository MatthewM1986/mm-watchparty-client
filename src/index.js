import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import { Watchparty } from './components/Watchparty';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Watchparty />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

