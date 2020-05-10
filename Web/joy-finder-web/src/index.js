import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import App from './App';
import Login from './pages/Login';

const routing = (
  <Router>
      <Route path="/" component={(App)}/>
      <Route path="/login" component={Login}/>
  </Router>
)

ReactDOM.render(
    routing,
  document.getElementById('root')
);
